---
description: Track emails you need to follow up on
---

Track my pending follow-ups:

**Instructions:**

## Step 1: Gather Context First

1. **Fetch recent sent emails** (`from:me newer_than:3d`)
   - Essential to verify what's already been handled

## Step 2: Find Commitments

2. **Search sent emails** (last 14 days) for commitment language:
   - "Will revert asap" / "Ik kom zsm bij je terug"
   - "I will get back to you" / "Let me check" / "Ik check even"
   - "Gaan we regelen" / "I'll follow up"
   - Questions I asked without answers

3. **Scan received emails** for threads awaiting my response:
   - Direct requests I acknowledged but haven't completed
   - Questions I haven't answered

## Step 3: Verify Each Item

4. **CRITICAL: Verify each commitment is still open:**
   - Check for subsequent emails to that recipient
   - Check full thread for my follow-up replies
   - Look for resolution indicators (POs, confirmations, "done")
   - Only report items with NO follow-up action yet

## Step 4: Present Findings

**Output format:**

```
FOLLOW-UP TRACKER
Scanned: Last 14 days | Verified against: Last 72 hours sent

OVERDUE (>3 days) - [X] items
1. To: [person] | About: [topic]
   Committed: [date] | Action: [what I need to do]

DUE SOON (1-3 days) - [X] items
1. To: [person] | About: [topic]
   Action: [what I need to do]

RECENTLY RESOLVED - [X] items
- [Brief list of commitments I've already completed]

WAITING ON OTHERS - [X] items
- [Person]: [what I'm waiting for] ([X] days)

SUMMARY
- Total pending: [X]
- Most urgent: [item]
- Recommended first action: [specific action]
```

**If overdue items exist:**
- Offer to draft follow-up emails using style guide
- Prioritize by age and importance
