---
description: Get a prioritized summary of unread emails
---

Please provide a comprehensive inbox summary:

**Instructions:**

## Step 1: Gather Context First

1. **Fetch recent sent emails** (`from:me newer_than:3d`)
   - This is essential to know what's already been handled
   - Note recent replies and actions taken

2. **Fetch unread emails** (last 50 unread)
   - Include email body for proper analysis

## Step 2: Filter and Prioritize

3. **Separate by addressing:**
   - **Direct (To: me)** - These are my priority
   - **CC'd** - Lower priority, for awareness only
   - **Mailing lists/Newsletters** - Lowest priority

4. **Verify each email still needs attention:**
   - Check if I've already replied (cross-reference with sent emails)
   - Check if thread has continued after this message
   - Only flag as "needs response" if I genuinely haven't responded

## Step 3: Categorize by Urgency

5. **Categorize VERIFIED items:**
   - **URGENT** - Deadlines today/tomorrow, explicit urgency, blocking issues, direct questions to me
   - **IMPORTANT** - Project updates needing input, client requests, decisions needed
   - **ROUTINE** - FYI updates, newsletters, CC'd items, no action required

## Step 4: Present Summary

6. **For each email needing action, provide:**
   - From / Subject
   - Brief summary (1 sentence)
   - What's needed from me (specific action)
   - Deadline if mentioned

7. **Output format:**

```
INBOX STATUS
- Total unread: X
- Needs my action: Y (verified)
- CC/FYI only: Z

URGENT (Action Today)
[List only verified items needing immediate action]

IMPORTANT (Action This Week)
[List verified items needing response soon]

ROUTINE (No Action Required)
[Brief count/summary - don't list each one]

ALREADY HANDLED
[Brief list of items that appeared unread but I've already addressed]
```

**Key principle:** Only surface items that genuinely need my attention. Filter out noise.
