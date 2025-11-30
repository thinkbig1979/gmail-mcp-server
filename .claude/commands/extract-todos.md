---
description: Extract action items and todos from recent emails
---

Extract action items from my emails:

**Instructions:**

## Step 1: Gather Context First

1. **Fetch recent sent emails** (`from:me newer_than:3d`)
   - Essential to verify what's already been completed

## Step 2: Find Action Items

2. **Search recent emails** (last 7 days, or specify timeframe):
   - Both sent and received
   - Focus on emails containing action items

3. **Identify action items:**
   - My commitments: "I will...", "Will revert asap", "Gaan we regelen"
   - Requests from others needing my action
   - Deadlines mentioned (explicit or implied)
   - Questions awaiting my response

## Step 3: Verify Each Item

4. **CRITICAL: Verify each todo is still pending:**
   - Check if I've already completed it (sent reply, forwarded info)
   - Check thread for subsequent activity
   - Look for resolution indicators (POs, confirmations)
   - Only report items NOT yet actioned

## Step 4: Present Findings

**Output format:**

```
ACTION ITEMS
Scanned: Last 7 days | Verified against: Last 72 hours sent

OVERDUE/URGENT - [X] items
1. [ ] [Action description]
   For: [person] | Deadline: [if any]
   Context: [brief - one line]

THIS WEEK - [X] items
1. [ ] [Action description]
   For: [person]
   Context: [brief]

UPCOMING - [X] items
[Lower priority items]

BLOCKED/AWAITING INFO - [X] items
- Waiting on [person] for [what]

RECENTLY COMPLETED - [X] items
- [Brief list of items done in last 72 hours]

SUMMARY
- Total open: [X]
- Urgent: [X]
- Top priority: [specific action]
```

**Key principles:**
- Only show VERIFIED open items
- Be specific about what action is needed
- Include deadlines where known
- Keep context brief - one line max
