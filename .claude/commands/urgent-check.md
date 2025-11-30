---
description: Quick scan for urgent matters requiring immediate attention
---

Quick scan for urgent matters:

**Instructions:**

## Step 1: Gather Context First

1. **Fetch recent sent emails** (`from:me newer_than:3d`)
   - Essential to know what's already been handled
   - Note recent replies and follow-ups I've sent

## Step 2: Scan for Urgent Items

2. **Search last 48 hours** for urgency indicators:
   - Keywords: "urgent", "asap", "zsm", "per direct", "immediate", "deadline"
   - Time-sensitive: "today", "tomorrow", "end of day", "this week"
   - Blocking: "blocked", "waiting on", "need to proceed"
   - Follow-ups: "reminder", "following up", "still waiting"
   - ALL CAPS subjects or multiple exclamation marks

3. **Check overdue responses:**
   - Emails >48 hours old still unread
   - Direct questions to me without answers
   - Threads where I'm expected to respond

## Step 3: Verify Each Item

4. **CRITICAL: Verify each urgent item is still open:**
   - Cross-reference with sent emails - have I already responded?
   - Check thread for my subsequent replies
   - Check if issue was resolved via other means
   - Only flag items that GENUINELY still need my action

## Step 4: Present Findings

**Output format:**

```
URGENT SCAN RESULTS
Scanned: Last 48 hours
Verified against: Sent emails (last 72 hours)

CRITICAL (Action Required TODAY) - [X] items
1. From: [sender] | Subject: [subject]
   Why urgent: [reason]
   Action needed: [specific action]

IMPORTANT (Action This Week) - [X] items
1. From: [sender] | Subject: [subject]
   Action needed: [specific action]

ALREADY HANDLED - [X] items
[Brief list of items that looked urgent but I've already addressed]

NO URGENT MATTERS
[If nothing found, explicitly state: "No urgent matters - inbox is healthy!"]

RECOMMENDED FIRST ACTION:
[Single most important thing to do first]
```

**Key principles:**
- Speed over comprehensiveness - this is a quick scan
- Verify before alarming - don't flag already-handled items
- Be specific about what action is needed
- If nothing urgent, say so clearly
