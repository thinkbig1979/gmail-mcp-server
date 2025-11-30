---
description: Add relevant labels to recent unlabeled emails
---

Intelligently label recent emails that haven't been labeled yet.

**Instructions:**

## Step 1: Gather Unlabeled Emails

1. **Fetch recent emails without user labels** (`newer_than:50d -label:clients -label:projects -label:finance -label:bizdev -label:suppliers -label:action -label:type`)
   - Maximum 50 emails to process
   - Include body content for proper analysis
   - Focus on emails that are truly unlabeled (excluding system labels only)

## Step 2: Analyze Each Email

For each unlabeled email, determine appropriate labels based on:

2. **Sender/Recipient Analysis:**
   - Map known contacts to client/supplier labels
   - Identify internal vs external communications

3. **Content Analysis:**
   - Subject line keywords
   - Email body content
   - Thread context if available

4. **Label Categories to Consider:**

   **Clients:** CAT, VBH, ONEXP, Eekels, Feadship-Lentyard, Ammonite, MyCosmos, Videoworks, Tankoa, Oceanco, Yachtica, Channel28, Smart, Arrow, Triton, PanoBlu

   **Suppliers:** CAT, Ammonite, MyCosmos, Videoworks, Tricycle, Negu, Jansen-Watercrafts

   **Projects:** RVL-Feadship/828-Sports-Bar, RVL-Feadship/828-Starry-Night, RVL-Feadship/828-General, Tankoa-62m, Oceanco, Archived

   **Finance:** Invoices-Sent, Invoices-To-Pay, Payment-Received, Payment-Due, PO-Tracking, Credits, Overdue

   **Action:** Urgent, Follow-Up-This-Week, Review-Needed, Delegated, Waiting-For, ToDo

   **BizDev:** METS, Partnerships, Marketing, Opportunities, Events

   **Type:** Internal, Technical, Administrative, Contractual

## Step 3: Apply Labels

5. **For each email:**
   - Select 1-3 most relevant labels (don't over-label)
   - Prioritize specificity over generality
   - Use hierarchical labels appropriately (e.g., Clients/CAT/VBH)

6. **Apply labels using the add_labels tool**
   - Batch similar emails together for efficiency
   - Map label names to label IDs from the system

## Step 4: Report Results

7. **Provide summary:**

```
EMAIL LABELING COMPLETE
Total emails processed: X
Total labels applied: Y

LABELING BREAKDOWN:
- Clients: X emails labeled
- Projects: X emails labeled
- Finance: X emails labeled
- Action: X emails labeled
- BizDev: X emails labeled
- Suppliers: X emails labeled
- Type: X emails labeled

SAMPLE LABELED EMAILS:
[Show 5-10 examples with: Subject, Applied Labels, Reasoning]

SKIPPED (No clear labels):
[List any emails that couldn't be confidently labeled]
```

**Key Principles:**
- Be conservative: Only apply labels you're confident about
- Prioritize actionable labels (Action/*, Finance/*, Projects/*)
- Don't label obvious spam, promotions, or newsletters
- If unsure between 2 labels, choose the more specific one
- Always explain your labeling logic in the summary
