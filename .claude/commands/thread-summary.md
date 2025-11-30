---
description: Summarize a specific email thread (usage: /thread-summary [search term or email-id])
---

Please provide a summary of an email thread:

**Instructions:**

## Step 1: Find the Thread

1. **Locate the thread:**
   - If email/thread ID provided → use that directly
   - If search term provided → find most relevant thread
   - If nothing provided → ask which thread to summarize

2. **Get complete thread:**
   - Use `mcp__gmail__get_email_thread` to get ALL messages
   - Note the total message count

## Step 2: Verify My Status in Thread

3. **Check my involvement:**
   - Search sent emails to see if I've replied outside this thread
   - Identify the last message sender
   - Determine: is the ball in my court or someone else's?

## Step 3: Analyze the Thread

4. **Extract key information:**
   - All participants and their roles
   - Chronological flow of discussion
   - Decisions made (with dates)
   - Commitments by each party
   - Questions asked (and whether answered)
   - Deadlines mentioned

## Step 4: Present Summary

**Output format:**

```
THREAD: [Subject]
Participants: [names]
Messages: [X] | Date range: [first] to [last]
Last activity: [X days/hours ago]

WHO'S TURN: [Me / Waiting on: Name]

SUMMARY
[2-3 sentence overview of what this thread is about]

KEY POINTS (Chronological)
1. [Date] [Person]: [Key point/decision/question]
2. [Date] [Person]: [Key point/decision/question]
...

DECISIONS MADE
- [Decision] (by whom, when)

COMMITMENTS
- [Person] committed to: [what] (date)
- [Person] committed to: [what] (date)

OPEN ITEMS
- [ ] [Unanswered question or pending action]
- [ ] [Unanswered question or pending action]

MY ACTION REQUIRED: [Yes/No]
If yes: [Specific action needed]
Urgency: [High/Medium/Low]
```

**Key principles:**
- Be concise - summarize, don't transcribe
- Clearly indicate whose turn it is to respond
- Highlight any commitments I made that are still open
- Flag if thread has gone quiet (>3 days since last message)
