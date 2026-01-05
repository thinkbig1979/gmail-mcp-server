# Gmail MCP Server

This MCP server provides Gmail integration for Claude Code. Use these tools for email management tasks.

## Available Tools

### Reading & Searching
- `mcp__gmail__read_emails` - Read emails with optional filters (query, max_results, include_body)
- `mcp__gmail__search_emails` - Search with Gmail syntax (from:, to:, subject:, has:attachment, etc.)
- `mcp__gmail__get_email_thread` - Get complete conversation thread by thread ID

### Composing & Sending
- `mcp__gmail__send_email` - Send an email (to, subject, body, cc, bcc, html)
- `mcp__gmail__create_draft` - Save draft without sending

### Organization
- `mcp__gmail__mark_as_read` - Mark emails as read
- `mcp__gmail__add_labels` - Add labels to emails
- `mcp__gmail__remove_labels` - Remove labels from emails
- `mcp__gmail__get_labels` - List all labels

### Label Management
- `mcp__gmail__create_label` - Create new label
- `mcp__gmail__update_label` - Rename or change visibility
- `mcp__gmail__delete_label` - Delete a label

### Setup
- `mcp__gmail__get_auth_url` - Get OAuth2 authorization URL

## Configuration

The server reads credential paths from environment variables (set in `.env`):

```
GMAIL_CREDENTIALS_PATH=/path/to/credentials.json
GMAIL_TOKEN_PATH=/path/to/token.json
```

If not set, defaults to `credentials.json` and `token.json` in the current working directory.

## Common Search Queries

```
is:unread                    # Unread emails
from:someone@example.com     # From specific sender
subject:meeting              # Subject contains "meeting"
has:attachment               # Has attachments
newer_than:7d                # Last 7 days
label:important              # Has label
```
