#!/usr/bin/env node
/**
 * Gmail OAuth Helper - Gets the auth URL and exchanges code for token
 */

import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { promises as fs } from 'fs';
import { join } from 'path';
import * as readline from 'readline';

const credentialsPath = join(process.cwd(), 'credentials.json');
const tokenPath = join(process.cwd(), 'token.json');

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.labels'
];

async function authenticate() {
  try {
    // Load credentials
    const credentials = JSON.parse(await fs.readFile(credentialsPath, 'utf-8'));
    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

    const oauth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

    // Generate auth URL
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });

    console.log('\n🔐 Gmail Authentication Required\n');
    console.log('Step 1: Visit this URL to authorize the app:\n');
    console.log(authUrl);
    console.log('\n');

    // Get authorization code
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Step 2: After authorization, paste the code here: ', async (code) => {
      rl.close();

      try {
        // Exchange code for token
        const { tokens } = await oauth2Client.getToken(code);

        // Save token
        await fs.writeFile(tokenPath, JSON.stringify(tokens, null, 2));

        console.log('\n✅ Success! Token saved to:', tokenPath);
        console.log('\nYou can now use the Gmail MCP Server with Claude Code!');
        console.log('The server will automatically use this token for authentication.\n');

      } catch (error) {
        console.error('\n❌ Error exchanging code for token:');
        console.error(error.message);
        process.exit(1);
      }
    });

  } catch (error) {
    console.error('\n❌ Error reading credentials:');
    console.error(error.message);
    console.error('\nMake sure you have credentials.json in:', credentialsPath);
    process.exit(1);
  }
}

authenticate();
