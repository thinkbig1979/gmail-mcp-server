---
description: Complete morning email briefing to start your workday
---

Good morning! Preparing your daily email briefing.

**Instructions:**

## Step 1: Gather Context (Required First)

1. **Fetch sent emails from last 72 hours** (`from:me newer_than:3d`)
   - Essential for verifying what's already been handled
   - Keep this data for cross-referencing all items below

## Step 2: Urgent Scan

2. **Search last 48 hours** for urgency indicators:
   - Keywords: "urgent", "asap", "zsm", "per direct", "immediate", "deadline"
   - Time-sensitive: "today", "tomorrow", "end of day"
   - Blocking: "blocked", "waiting on"

3. **Verify each urgent item** against sent emails:
   - Only report items NOT already addressed

## Step 3: Inbox Overview

4. **Fetch unread emails** (last 50):
   - Separate: Direct (To: me) vs CC'd
   - Verify which genuinely need response

5. **Categorize verified items:**
   - URGENT: Deadlines today/tomorrow, blocking issues
   - IMPORTANT: Project updates, client requests
   - ROUTINE: FYI, newsletters (just count, don't list)

## Step 4: Commitments Check

6. **Search sent emails (last 14 days)** for commitments:
   - "Will revert asap" / "Gaan we regelen" / "Let me check"

7. **Verify each commitment is still open:**
   - Check for subsequent follow-up emails
   - Check threads for resolution
   - Only report VERIFIED open commitments

## Step 5: Quick Wins

8. **Identify quick-response emails** (verified not replied):
   - Simple confirmations, yes/no questions
   - Brief updates needed

## Step 6: Present Morning Briefing

**Output format:**

```
GOOD MORNING BRIEFING
Date: [today] | Unread: [X] | Action needed: [Y]

CRITICAL (Action Today)
[Only verified urgent items - or "No urgent matters - inbox is healthy!"]

MUST DO TODAY (Top 3)
1. [Most critical - specific action]
2. [Second priority]
3. [Third priority]

FOLLOW-UPS OVERDUE (Verified)
- [Person]: [topic] - [X] days overdue
[Or: "All commitments up to date"]

QUICK WINS (~[X] min to clear [Y] emails)
- [Brief list of quick responses available]

WAITING ON OTHERS
- [Person]: [what] - [X] days

RECENTLY RESOLVED
- [Items that looked open but I've already handled]

RECOMMENDED SEQUENCE
1. [First action]
2. [Second action]
3. [Third action]

Estimated total triage time: ~[X] minutes
```

**Key principles:**
- Verify everything before reporting
- Lead with critical items
- Be specific about what action is needed
- If inbox is healthy, say so clearly
- Keep it scannable - details on request
