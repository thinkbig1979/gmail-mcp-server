---
description: Draft a reply to a specific email in your voice (usage: /draft-reply [email-id or search term])
---

Please help me draft a reply to an email:

**Instructions:**

## Step 1: Find the Email

1. **Locate the email:**
   - If email ID provided → use that directly
   - If search term provided → find most recent matching email
   - If nothing provided → ask which email to reply to

2. **Get full thread context:**
   - Use `mcp__gmail__get_email_thread` to get complete conversation
   - Understand the history and what's been discussed

## Step 2: Verify Status

3. **Check if I've already replied:**
   - Search sent emails for replies to this thread
   - Check if draft already exists for this email
   - If already replied → inform me and ask if I want to send a follow-up instead

## Step 3: Gather Context

4. **Understand the sender:**
   - Search previous correspondence with this person
   - Determine: language preference (English/Dutch), relationship, typical tone
   - Note any relevant history

5. **Analyze what's needed:**
   - Identify ALL questions/requests in the email (don't miss any)
   - Determine urgency level
   - Note any deadlines mentioned
   - Identify if others are CC'd who need to be kept in loop

## Step 4: Draft the Reply

6. **Read the style guide:**
   - **CRITICAL:** Read `email-helpers/edwin-email-style-guide.md`
   - Select appropriate template based on email type
   - Choose correct language (match the sender's language)

7. **Draft the response:**
   - Address ALL points raised (check off each one)
   - Lead with the main point/answer
   - Keep it brief (1-4 sentences typical)
   - Include clear next steps if applicable
   - Use bilingual signature block

## Step 5: Create and Validate

8. **Create the draft:**
   - Use `mcp__gmail__create_draft` to save in Gmail
   - Show me the complete draft text

9. **Validation checklist:**
   - [ ] All questions/points addressed?
   - [ ] Correct language (no mixing)?
   - [ ] Bilingual signature present?
   - [ ] Tone matches relationship?
   - [ ] Brief and action-oriented?

**Output format:**

```
REPLYING TO:
From: [sender]
Subject: [subject]
Key points to address: [list]

DRAFT:
[Full draft text]

NOTES:
- Language: [English/Dutch]
- Template used: [which one]
- All points addressed: [Yes/No - list any missed]

Draft saved to Gmail. Review before sending.
```

**Important:** Do NOT send - only create draft for review.
