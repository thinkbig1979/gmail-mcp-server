---
description: Morning or evening email digest
---

Provide my daily email digest:

**Instructions:**

## Step 1: Determine Timeframe

1. **Set timeframe:**
   - Morning digest → Yesterday's emails (last 24 hours)
   - Evening digest → Today's emails
   - Default: Last 24 hours

## Step 2: Gather Data

2. **Fetch all relevant emails:**
   - Received emails in timeframe
   - Sent emails in timeframe
   - Current unread count

## Step 3: Analyze and Verify

3. **For action items found:**
   - Cross-reference against sent emails
   - Verify each item is still open
   - Mark resolved items as completed

## Step 4: Present Digest

**Output format:**

```
DAILY DIGEST
Period: [timeframe]
Received: [X] | Sent: [Y] | Unread: [Z]

URGENT/PRIORITY
[Only items needing immediate attention - verified still open]

BY PROJECT
BN828: [brief status]
KAOS: [brief status]
[Other active projects...]

FINANCIAL
[Invoice/payment items if any]

KEY COMMUNICATIONS
- [Person]: [Brief summary of important exchange]
- [Person]: [Brief summary]

ACTION ITEMS (Verified Open)
My actions:
- [ ] [Action] - for [person]

Waiting on others:
- [Person]: [what]

ALREADY HANDLED TODAY
- [Brief list of items completed]

TOMORROW'S PRIORITIES
1. [Most important]
2. [Second priority]
3. [Third priority]

INBOX HEALTH: [Healthy / Needs attention / Backlogged]
```

**Key principles:**
- Lead with urgent items
- Group by project for context
- Only show verified open action items
- Keep summaries brief - one line each
- End with clear priorities for tomorrow
