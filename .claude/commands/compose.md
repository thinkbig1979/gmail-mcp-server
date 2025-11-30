---
description: Compose a new email in your style (usage: /compose [recipient] [topic])
---

Please help me compose a new email:

**Instructions:**

## Step 1: Gather Requirements

1. **Get recipient info:**
   - If provided → use that
   - If not → ask who the email is for
   - Accept: name, email address, or company

2. **Get topic/purpose:**
   - If provided → use that
   - If not → ask what the email is about

## Step 2: Research Context

3. **Check existing correspondence:**
   - Search for recent emails with this recipient
   - Check for open threads on similar topics
   - If active thread exists → suggest replying to that instead

4. **Check for existing drafts:**
   - Search drafts for this recipient
   - If draft exists → offer to continue/modify that

5. **Determine communication patterns:**
   - What language do we use? (English/Dutch)
   - What's our relationship? (client, colleague, vendor, etc.)
   - What tone is typical?

## Step 3: Draft the Email

6. **Read the style guide:**
   - **CRITICAL:** Read `email-helpers/edwin-email-style-guide.md`
   - Select appropriate template
   - Choose correct language based on recipient history

7. **Draft structure:**
   - Appropriate greeting (based on relationship)
   - Purpose in first sentence
   - Body: 1-4 sentences or brief bullets
   - Clear ask or next steps
   - Bilingual signature block

## Step 4: Create and Validate

8. **Create the draft:**
   - Use `mcp__gmail__create_draft`
   - Show complete draft text

9. **Validation checklist:**
   - [ ] Correct language (no mixing)?
   - [ ] Purpose clear in first sentence?
   - [ ] Brief and action-oriented?
   - [ ] Bilingual signature present?
   - [ ] Tone appropriate for relationship?

**Output format:**

```
NEW EMAIL TO: [recipient]
Previous correspondence: [Yes - X emails / None found]
Language: [English/Dutch] (based on: [history/assumption])

DRAFT:
To: [email]
Subject: [subject]

[Full email text with signature]

NOTES:
- Template used: [which one]
- Existing thread: [None / Found - suggested reply instead]

Draft saved to Gmail. Review before sending.
```

**Examples:**
- `/compose Mike Barr payment follow-up`
- `/compose Aldo factuur vraag`
- `/compose alex@ammonite.ltd sports bar update`

**Important:** Do NOT send - only create draft for review.
