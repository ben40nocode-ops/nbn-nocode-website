// AUTO-GENERATED

export interface ArticleEN {
  slug: string; title: string; description: string; date: string;
  author: string; category: string; keywords: string[]; readingTime: string; content: string;
}

export const articlesEN: ArticleEN[] = [
  {
    slug: "bmad-agile-ai-driven-development-method",
    title: "BMAD: The Method That Stopped Me From Going in Circles With AI Agents",
    description: "BMAD (Breakthrough Method for Agile AI-Driven Development) is the open-source framework I use to structure AI projects before writing a single line of code. A concrete look at how it works.",
    date: "2026-06-05",
    author: "Benjamin Bertigny",
    category: "Build in Public",
    keywords: ["BMAD method", "AI-driven development", "Claude Code workflow", "agile AI framework", "AI agents development", "BMAD open source"],
    readingTime: "6 min",
    content: "<p>For months, I worked with Claude Code the same way: I'd describe roughly what I wanted, the agent would code, I'd correct, the agent would recode — and after a few hours we'd drifted far from the original problem without either of us noticing. The code worked. But it no longer matched what I'd had in mind at the start.</p><p>That's not an AI problem. That's a context problem.</p><p>BMAD — <strong>Breakthrough Method for Agile AI-Driven Development</strong> — is the open-source framework that changed my approach. The central idea: <strong>build context before writing a single line of code</strong>. Not as a constraint, but as the thing that separates a project that holds together from one that accumulates technical debt from day one.</p><h2>The problem BMAD solves</h2><p>AI agents are extraordinarily good at executing. They're much less good at guessing your intentions. Give them a vague brief and they'll produce something plausible — not necessarily what you need.</p><p>The real cost of that vagueness doesn't show up in the first session. It shows up three weeks later, when you add a feature that doesn't integrate cleanly, when you realise the architecture can't support your next requirement, or when someone else joins the project and there's no way to reconstruct why a given decision was made.</p><p>BMAD forces you to answer those questions <em>before</em> you start coding.</p><h2>How it works in practice</h2><p>The framework is built around a sequence of three specialised agents, each producing a structured deliverable that feeds the next:</p><h3>1. The Analyst → Project Brief</h3><p>First, you clarify the <em>why</em>. What problem are you actually solving? For whom? What are the real constraints? What's in scope — and crucially, what isn't? This is the deep interview phase, where no ambiguity is left hanging. The Analyst produces a 1-2 page brief that acts as a compass for everything that follows.</p><h3>2. The PM → PRD</h3><p>The brief becomes a Product Requirements Document: Epics (major workstreams) broken down into Stories (isolated, bounded tasks). This breakdown is the core of the method. A well-written Story fits into a single working session with an agent. It has a clear acceptance criterion. The agent can't go off-track because the scope is defined.</p><h3>3. The Architect → Architecture Document</h3><p>This is where technical decisions get locked in: stack, file structure, patterns, API choices. For Nortrip Toolbox, this is where we documented why we chose Supabase over Prisma, or how API routes are structured. Three months later, those decisions are traceable.</p><p>A fourth role — the PO — validates coherence across the three documents before development agents are launched. They also shard the documents into files the dev agents can actually use: each agent receives only what it needs.</p><h2>What I changed in my workflow</h2><p>I've applied BMAD on two recent projects: an accounting reconciliation feature for Nortrip Toolbox, and a quote management system for a craftsman client in Gironde.</p><p>The most immediate difference: <strong>recovery speed when something goes wrong</strong>. When an agent heads in the wrong direction, I have the documents to course-correct in a single sentence — no need to re-explain the full context from scratch. The Project Brief is there. The Story is there. The architecture is there.</p><p>The second difference: <strong>decision traceability</strong>. In six months, when I come back to this code — or when someone else works on it — the BMAD documents explain the <em>why</em>. It's not just code. It's project knowledge.</p><h2>BMAD scales to the size of the project</h2><p>One important thing: BMAD isn't a heavy process you apply to everything. The framework calibrates to complexity:</p><ul><li><strong>Simple bugfix</strong>: no BMAD, just code</li><li><strong>New feature</strong>: lightweight brief + Stories</li><li><strong>Full system</strong>: all three documents + PO validation</li></ul><p>That's what makes it usable day to day. It doesn't slow down your workflow — it structures it at the right depth.</p><h2>Who is this for?</h2><p>If you're using Claude Code, Cursor, or any AI agent to build systems — automations, web apps, internal tools — and you've ever felt like you were going in circles without making real progress, BMAD is for you.</p><p>It's not a method reserved for tech teams. I apply the principles with SMB clients who've never written a line of code, purely to frame their requirements before we start building together. The result: fewer back-and-forths, more predictable delivery, and systems that hold up over time.</p><h2>Where to start</h2><p>The framework is open-source and available on GitHub. But if you want to see how to apply it concretely to your project — whether that's a Make automation, a custom web app, or an AI agent system — we can work through it together.</p><p>I offer a <strong>free one-hour audit</strong> to scope your project using the BMAD method and identify the first Stories to build.</p><p><strong><a href=\"https://calendly.com/ben40nocode/1h\">Book your slot here</a></strong> — and stop going in circles.</p><p><em>Benjamin Bertigny — Founder NBN IA. I build AI systems for SMBs and craftsmen. Based in Bordeaux, serving all of France.</em></p>"
  },
  {
    slug: "from-zapier-to-claude-automated-accounting",
    title: "From 3 Zapier Workflows to One Page: How I Automated Accounting with Claude AI",
    description: "I replaced 3 Zapier workflows, Airtable, Google Apps Script and PDF.co with a single Next.js page built in one session with Claude Anthropic.",
    date: "2026-05-13",
    author: "Benjamin Bertigny",
    category: "Build in Public",
    keywords: ["Claude Anthropic automation", "replace Zapier with Next.js", "AI accounting automation", "build in public travel agency", "Nortrip Toolbox"],
    readingTime: "4 min",
    content: "<p>For several months, reconciling our Evaneos commissions relied on a chain I had built piece by piece: 3 Zapier workflows, PDF.co for extraction, ChatGPT to structure the data, a custom Google Apps Script, Airtable as an intermediate database, an OneDrive Excel file for enrichment, and finally a PDF generated and automatically deposited back on OneDrive.</p><p>It worked. But it was opaque, expensive, and any single link could break independently of the others. When Zapier updated a connector or PDF.co had an outage, the workflow would fail silently.</p><h2>The trigger: a working session with Claude</h2><p>This morning, I described the problem to Claude (Anthropic's AI). By sharing screenshots of the Zaps and the relevant PDFs, we analysed the workflow together in a few minutes. Claude immediately understood the business context — not just the code, but the operational logic behind it.</p><p>Then we coded. Together.</p><h2>What we built</h2><p>A single <code>/ventilation</code> page in our Nortrip Toolbox back-office (Next.js 16 + Supabase + Vercel):</p><ul><li><strong>Drop the Evaneos PDF invoice</strong> — Claude extracts file IDs and amounts automatically via the Anthropic API (Haiku model for speed), summing multiple fee lines per file</li><li><strong>The app connects to Microsoft OneDrive</strong> via MSAL and Microsoft Graph API — read-only token only (<code>Files.Read</code> scope, so Microsoft itself blocks any write attempt at the token level)</li><li><strong>The sales recap file loads automatically</strong> from OneDrive — the central company reference file, which changes constantly</li><li><strong>Each line is automatically enriched</strong>: Toogo code, client name, destination, display order</li><li><strong>Sorted table + one-click PDF export</strong> — same format as the output produced by the 3 Zaps</li></ul><h2>The result</h2><p>Zero Zapier. Zero Airtable for this workflow. Zero Google Apps Script. Zero PDF.co. All of it built in one working session.</p><p>What struck me: Claude didn't just write code. It understood the business context, anticipated edge cases (multiple fee lines per file to sum, thousands separators breaking PDF rendering), and raised the right security questions <em>before</em> I did.</p><p>When I mentioned the Excel file was the company's central reference document, Claude immediately proposed the read-only firewall — restricting MSAL scopes to <code>Files.Read</code> so Microsoft blocks any write at the token level. That wasn't in my original specs.</p><h2>What this says about AI in 2026</h2><p>The AI-augmented developer isn't a myth. It's also not \"AI replaces the developer\". It's a collaboration: you bring the business context and the decisions, the AI brings execution speed and exhaustive technical memory.</p><p>In one morning, we replaced a chain of SaaS tools that cost money in subscriptions, was fragile, and too complex to evolve quickly.</p><p>And it runs on Vercel.</p><p><em>Benjamin Bertigny — Founder NBN IA. I build AI tools for travel agencies and SMBs.</em></p>"
  },
  {
    slug: "ai-for-restaurants-save-time-increase-revenue",
    title: "AI for Restaurants: 4 Automations That Save Time and Increase Revenue",
    description: "How restaurant owners can use AI to automate reviews, bookings, and supplier orders. Real examples with numbers from independent restaurants in France.",
    date: "2026-05-03",
    author: "Benjamin Bertigny",
    category: "Automation",
    keywords: ["AI for restaurants", "restaurant automation", "AI tools hospitality", "restaurant efficiency 2026"],
    readingTime: "5 min",
    content: "<p>Running a restaurant means juggling a hundred things at once: managing a team, tracking stock, responding to customer reviews, handling reservations, chasing suppliers. Most independent restaurant owners work 60 to 70 hours a week — and still feel like they're always behind.</p><p>AI won't cook your dishes or greet your guests. But it can quietly handle a significant chunk of the administrative workload that eats into your days. In 2026, the independent restaurants gaining ground on larger chains are the ones that have started automating the right things.</p><p>Here are four concrete automations — no tech background required — that are making a real difference for restaurant owners we've worked with across France.</p><h2>1. Automatic responses to Google and TripAdvisor reviews</h2><p>Online reviews drive foot traffic. A restaurant with 200 reviews and regular owner responses ranks higher on Google Maps than one with 200 unanswered reviews. The problem: writing personalised responses takes time, and most owners either ignore reviews entirely or copy-paste the same generic reply.</p><p>We set up a simple system for a bistro in Bordeaux: every new review — positive or negative — triggers an AI-drafted response that reads the tone, references specific details the customer mentioned, and feels genuinely human. The owner reviews and approves with a single click in under 30 seconds.</p><p><strong>Result: review response rate went from 12% to 100%. Google ranking improved visibly within 6 weeks.</strong> Time spent: about 15 minutes per week instead of 2 hours.</p><h2>2. Reservation confirmations and pre-visit messages</h2><p>Every no-show costs money. A table for four that doesn't show up on a Saturday evening is easily €120 to €200 of lost revenue. And yet most restaurants still rely on manual phone call reminders — which nobody does consistently.</p><p>An automated reminder sequence is straightforward to set up: a confirmation SMS immediately after booking, a reminder 48 hours before, and a final nudge the morning of the reservation. You can add a personal touch — a note about a special dish that evening, a birthday acknowledgment if the booking mentioned it.</p><p>For a 40-cover restaurant in the Médoc we worked with, no-show rates dropped from around 18% to under 6% within the first month. <strong>On a busy Friday night, that's the difference between two full tables or two empty ones.</strong></p><h2>3. Supplier order management and stock alerts</h2><p>How many times have you run out of something on a busy evening because a supplier order fell through the cracks? Or ordered too much of a product that then sat in cold storage losing value?</p><p>A basic automation connected to your sales data can monitor stock levels and send you a summary each morning: what's running low, what needs ordering, what's been sitting too long. You can go further and have it draft the supplier orders automatically — you just review and send.</p><p>One restaurant owner we helped in the Gironde region was spending around 90 minutes per week manually cross-checking stock against upcoming reservations. That process now takes 10 minutes. <strong>Food waste dropped by roughly 20% in the first two months.</strong></p><h2>4. Post-visit follow-up and loyalty nudges</h2><p>Your existing customers are your cheapest source of new revenue. A guest who visited three months ago and hasn't been back isn't necessarily lost — they may just need a reason to return.</p><p>A simple follow-up sequence can do this automatically: a thank-you message a few days after their first visit, a seasonal offer when you change your menu, a birthday message if you have the date. The messages are generated by AI to feel personal rather than promotional, and sent only to customers who've opted in.</p><p>The numbers are consistently strong: email open rates for personalised restaurant follow-ups average 35 to 45%, compared to 10 to 15% for generic newsletters. <strong>Even if 20% of lapsed customers come back once, that's significant recurring revenue for zero acquisition cost.</strong></p><h2>What does it cost to set this up?</h2><p>For a typical independent restaurant, the monthly running cost of these four automations sits between €60 and €120 — covering the software subscriptions needed to connect your tools and run the AI layer.</p><p>Setup is a one-time investment, usually between €800 and €1,800 depending on complexity and which systems you already use (reservation platform, POS, Google Business, etc.). Most restaurant owners we work with recover that investment within 6 to 10 weeks through reduced no-shows and recovered admin time alone.</p><h2>Where to start</h2><p>If you're a restaurant owner thinking about this, the best move isn't to automate everything at once. Pick the single biggest pain point — whether that's review management, no-shows, or stock headaches — and start there.</p><p>At NBN IA, we work with independent restaurants, wine estates, and hospitality businesses across Gironde and the rest of France. We handle the setup from end to end and make sure the system fits your existing workflow, not the other way around.</p><p>If you want to see what's actually possible for your specific setup, we offer a <strong>free one-hour audit</strong>. We'll look at your current tools, identify your top three automation opportunities, and give you a clear picture of the time and revenue you could recover.</p><p><strong><a href=\"https://calendly.com/ben40nocode/1h\">Book your free audit here</a></strong> — and stop losing revenue to tasks a machine can handle.</p>"
  },
  {
    slug: "ai-automation-for-small-business-2026",
    title: "AI Automation for Small Business: What Actually Works in 2026 (From Real Client Projects)",
    description: "Most automation guides list tools. This one shows real results — restaurants cutting no-shows by 70%, craftsmen saving 2h/day. No fluff, no theory. By Benjamin Bertigny, NBN IA.",
    date: "2026-05-03",
    author: "Benjamin Bertigny",
    category: "Automation",
    keywords: ["AI automation small business", "SMB automation 2026", "AI tools for craftsmen", "business automation France"],
    readingTime: "5 min",
    content: `<p>If you run a small business in 2026 and you're still spending hours copying data between spreadsheets, manually chasing unpaid invoices, or re-typing the same information across five different tools — this article is going to change your week. <strong>AI automation for small businesses</strong> is no longer a luxury reserved for tech startups. It's a practical, accessible lever for any craftsman, restaurant owner, or local service company, even with zero coding knowledge.</p>

<p>I've worked with dozens of SMBs across Gironde — from plumbers in Mérignac to wine estates in the Médoc and boutique hotels on the Bassin d'Arcachon. Every single one had the same problem: too much time lost on repetitive admin, not enough time doing what they actually love. The businesses that adopted AI automation in 2025 are now running leaner, serving clients faster, and growing without hiring extra staff.</p>

<p>Here's how you can do the same — no developer required.</p>

<h2>What is AI automation and why does it matter for your business?</h2>

<p>AI automation means connecting your existing tools (emails, calendar, invoicing software, CRM) so they talk to each other automatically — and adding an AI layer that can understand, summarize, write, and decide.</p>

<p>Think of it this way: instead of manually copying a new client's details from an email into your spreadsheet, then sending a welcome email, then adding a reminder to call them in three days — <strong>all of that happens automatically</strong>, triggered the moment the inquiry arrives.</p>

<p>The platforms that make this possible — like <strong>Make</strong> (formerly Integromat) — let you build these workflows visually, by connecting blocks. No code. No developer. Just logic.</p>

<p>Add <strong>Claude AI</strong> into the mix, and your automations can now read documents, write personalised responses, summarise meeting notes, and qualify leads intelligently. A full-time assistant, working 24/7, for around €20 per month.</p>

<h2>Four real examples from businesses like yours</h2>

<h3>1. The plumber who stopped losing leads</h3>

<p>A local plumbing company in the Bordeaux area was missing calls and failing to respond to website enquiries quickly enough. We set up a simple automation: when a new enquiry arrives via the contact form, it instantly sends a personalised SMS to the client confirming receipt, creates a task in their job management tool, and notifies the team on WhatsApp.</p>

<p>Response time dropped from several hours to under two minutes. <strong>Booking rate increased by 35% in the first month.</strong> The owner didn't write a single line of code.</p>

<h3>2. The restaurant that automated its reviews</h3>

<p>A restaurant in Bordeaux was getting regular Google reviews but never had time to respond to them. We connected their Google Business profile to a Make scenario that detects new reviews and uses Claude AI to draft a personalised, warm response — which the owner approves with one click.</p>

<p>Review response rate went from 10% to 100%. Their Google ranking improved noticeably within 8 weeks. <strong>Time spent: 5 minutes per week instead of 2 hours.</strong></p>

<h3>3. The wine estate that streamlined B2B orders</h3>

<p>A mid-sized wine estate in the Médoc was managing wholesale orders via email, manually updating stock in a spreadsheet and chasing payments by hand. We built an Airtable + Make system that tracks orders automatically, generates invoices, sends payment reminders at 7 and 15 days, and updates the stock view in real time.</p>

<p><strong>Unpaid invoices dropped by 60%. The estate owner recovered 8 hours per week.</strong> The whole system cost less than a single day of an accountant's time to set up.</p>

<h3>4. The boutique hotel that personalised guest communication</h3>

<p>A small hotel on the Bassin d'Arcachon was sending generic confirmation emails that felt impersonal. We used Claude AI to generate personalised pre-arrival messages based on the booking details — mentioning the guest's name, their room type, local tips relevant to the season, and a tailored upsell offer.</p>

<p>Upsell conversion (breakfast, spa, late checkout) increased by 22%. <strong>Guest satisfaction scores improved. And it runs entirely automatically, 365 days a year.</strong></p>

<h2>The 3 automations every small business should start with</h2>

<p>Not sure where to begin? Here are the three highest-impact automations for most small businesses:</p>

<p><strong>1. Lead capture and follow-up</strong><br>
Every new enquiry — whether from your website, a Facebook ad, or a referral — should trigger an immediate acknowledgement and a structured follow-up sequence. Speed matters: businesses that respond within 5 minutes are 9x more likely to close the deal.</p>

<p><strong>2. Invoice reminders</strong><br>
Automated, polite payment reminders at 7, 15, and 30 days. No awkwardness, no forgetting. Just consistent, professional follow-up that recovers cash faster.</p>

<p><strong>3. Client onboarding</strong><br>
When a contract is signed or a booking is confirmed, automatically send welcome information, request the documents you need, assign the client to the right team member, and schedule the key touchpoints. Your clients feel looked after from day one — without you lifting a finger.</p>

<h2>How to get started: a simple 4-step method</h2>

<p>The biggest mistake I see small business owners make is trying to automate everything at once. Here's the approach that actually works:</p>

<p><strong>Step 1: List your irritants</strong><br>
Spend one week noting every repetitive task that annoys you. The copy-paste moments, the forgotten follow-ups, the manual reports. Write them down.</p>

<p><strong>Step 2: Pick your highest-impact target</strong><br>
Look at your list and ask: which task takes the most time AND adds the least value? That's your first automation. Almost always, it's data entry or email follow-up.</p>

<p><strong>Step 3: Build a simple version first</strong><br>
Don't try to build a perfect system. Build something that works 80% of the time and refine it over two weeks. An imperfect automation that runs beats a perfect one that never launches.</p>

<p><strong>Step 4: Add one automation per month</strong><br>
In 6 months, you'll have a robust, layered system built on solid foundations. The cumulative time savings are extraordinary.</p>

<h2>What does it actually cost?</h2>

<p>Here's a realistic picture for a small business:</p>

<ul>
<li><strong>Tool subscriptions</strong>: €50 to €150/month (Make, Airtable, Claude AI)</li>
<li><strong>Setup cost</strong>: €800 to €2,500 depending on complexity (one-time)</li>
<li><strong>Time recovered</strong>: 8 to 20 hours per month</li>
<li><strong>Typical ROI</strong>: 300 to 500% in year one</li>
</ul>

<p>For most craftsmen and small business owners, the setup pays for itself within 6 to 10 weeks. After that, it's pure gain — time you can reinvest in clients, growth, or simply having your evenings back.</p>

<h2>Ready to see what's possible for your business?</h2>

<p>If you've read this far, you already know AI automation is worth exploring. The only question is where to start — and that's exactly what the free audit is for.</p>

<p>In one hour together, we'll map your current processes, identify your top 3 automation opportunities, and give you a clear picture of the time and money you could recover. No sales pitch. Just a practical, honest conversation about your situation.</p>

<p>Whether you're based in Bordeaux, on the Bassin d'Arcachon, in the Médoc, or anywhere else in France — we can work together in person or via video call.</p>

<p><strong><a href="https://calendly.com/ben40nocode/1h">Book your free 1-hour audit here</a></strong> and discover what AI automation can do for your business in 2026.</p>`
  }
];
