---
description: Get all emails related to a specific project (usage: /project-emails [project-name])
---

Compile emails related to a specific project:

**Instructions:**

## Step 1: Identify the Project

1. **Get project identifier:**
   - If provided → use that (e.g., BN828, KAOS, Tankoa, Discovery Platform)
   - If not → ask which project to analyze
   - Also accept: client names, vessel names, or keywords

## Step 2: Gather Data

2. **Search comprehensively:**
   - Subject lines containing project name/keywords
   - Body content mentioning project
   - Both sent AND received emails
   - Default: last 30 days (adjust if specified)

3. **Fetch recent sent emails** (`from:me newer_than:7d`)
   - Cross-reference to verify action item status

## Step 3: Analyze and Verify

4. **Verify open items:**
   - For each action item found, check if already completed
   - Cross-reference commitments against sent emails
   - Only report items that are STILL OPEN

## Step 4: Present Summary (Tiered Output)

**Output format:**

```
PROJECT: [Name]
Emails found: [X] | Date range: [start] to [end]
Key participants: [names]

EXECUTIVE SUMMARY
[3-4 sentences: What is this project? Current status? Key blocker if any?]

STATUS: [On Track / At Risk / Blocked]

CURRENT SITUATION
- Latest update: [date] from [person]
- Ball in court of: [me / person / waiting on multiple]
- Next milestone: [if known]

OPEN ITEMS (Verified)
My actions:
- [ ] [Action] - for [person] - [deadline if any]
- [ ] [Action] - for [person]

Waiting on others:
- [ ] [Person]: [what we're waiting for]
- [ ] [Person]: [what we're waiting for]

RECENT ACTIVITY (Last 7 days)
[Date] [Person]: [Brief summary]
[Date] [Person]: [Brief summary]

RESOLVED RECENTLY
- [Item that was open but is now done]
```

**For detailed history (if requested):**
```
FULL TIMELINE
[Chronological list of all key communications]
```

**Key principles:**
- Lead with current status and blockers
- Verify all action items before reporting
- Keep summary concise - details available on request
- Clearly distinguish "my actions" vs "waiting on others"
- Flag if project has gone quiet (no activity in X days)

**Common projects:**
- BN828 (Feadship sports bar)
- KAOS (maintenance)
- Tankoa 62m / C135
- Discovery Platform (marketing)
- Ammonite (dome lighting)
