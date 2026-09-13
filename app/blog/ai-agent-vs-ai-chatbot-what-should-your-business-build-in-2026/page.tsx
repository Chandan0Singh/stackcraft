import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Database,
  Gauge,
  Headphones,
  Layers3,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./blog-post.scss";

export const metadata: Metadata = {
  title: "AI Agent vs AI Chatbot: What Should Your Business Build in 2026?",
  description:
    "AI agent vs chatbot explained for businesses. Compare capabilities, integrations, automation, use cases, costs, and learn which AI solution your business should build in 2026.",
  keywords: [
    "AI agent development",
    "AI agent vs chatbot",
    "AI chatbot development",
    "AI agent for business",
    "AI automation development",
    "AI chatbot vs AI agent",
    "AI agent development company",
    "business AI agent",
    "AI automation company",
  ],
  alternates: {
    canonical:
      "https://www.stackcraftstudio.com/blog/ai-agent-vs-ai-chatbot-what-should-your-business-build-in-2026",
  },
  openGraph: {
    title: "AI Agent vs AI Chatbot: What Should Your Business Build in 2026?",
    description:
      "A practical business comparison of AI chatbots and AI agents, including use cases, integrations, costs and implementation.",
    url: "https://www.stackcraftstudio.com/blog/ai-agent-vs-ai-chatbot-what-should-your-business-build-in-2026",
    siteName: "StackCraft Studio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent vs AI Chatbot in 2026",
    description:
      "Should your business build an AI chatbot or an AI agent? Here's how to decide.",
  },
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-is-chatbot", label: "What Is an AI Chatbot?" },
  { id: "what-is-agent", label: "What Is an AI Agent?" },
  { id: "comparison", label: "Agent vs Chatbot" },
  { id: "difference", label: "The Core Difference" },
  { id: "use-cases", label: "Business Use Cases" },
  { id: "when-chatbot", label: "When to Build a Chatbot" },
  { id: "when-agent", label: "When to Build an Agent" },
  { id: "hybrid", label: "When a Hybrid Works" },
  { id: "architecture", label: "How They Are Built" },
  { id: "cost", label: "Development Cost" },
  { id: "timeline", label: "Development Timeline" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What is the difference between an AI chatbot and an AI agent?",
    answer:
      "An AI chatbot is primarily designed to communicate with users and provide information or responses. An AI agent can go further by selecting tools, calling APIs, executing steps and completing workflows within defined permissions.",
  },
  {
    question: "Is an AI agent better than a chatbot?",
    answer:
      "Not automatically. A chatbot can be the better solution when the main requirement is conversation, support, qualification or knowledge access. An agent becomes more useful when the application needs actions, tool use, multi-step workflows or automation.",
  },
  {
    question: "What businesses can use AI agents?",
    answer:
      "AI agents can be useful in sales, customer support, operations, research, internal knowledge workflows, scheduling, lead qualification, reporting and other processes where software needs to perform multiple actions.",
  },
  {
    question: "How much does AI agent development cost?",
    answer:
      "Cost depends on the number of workflows, integrations, tools, data sources, security requirements, user interfaces and testing depth. A focused agent MVP can be relatively simple, while multi-system enterprise automation can become significantly more expensive.",
  },
  {
    question: "Can a chatbot become an AI agent later?",
    answer:
      "Yes. A conversational product can evolve into an agentic application by adding tools, APIs, structured actions, permissions, workflow orchestration and verification. The architecture should be planned so those capabilities can be introduced without rebuilding the entire product.",
  },
  {
    question: "Should my business build a chatbot or an AI agent first?",
    answer:
      "Start with the smallest system that solves the business problem. If users mainly need answers, start with a chatbot. If the primary value comes from completing tasks, an agent or an agent-assisted workflow may be the better starting point.",
  },
];

function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AI Agent vs AI Chatbot: What Should Your Business Build in 2026?",
    description:
      "A practical comparison of AI chatbots and AI agents for businesses.",
    author: {
      "@type": "Organization",
      name: "StackCraft Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "StackCraft Studio",
    },
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.stackcraftstudio.com/blog/ai-agent-vs-ai-chatbot-what-should-your-business-build-in-2026",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default function AIAgentVsChatbotPage() {
  return (
    <main className="ai-agent-blog">
      <JsonLd />

      <div className="blog-background">
        <div className="blog-grid" />
        <div className="blog-glow blog-glow-one" />
        <div className="blog-glow blog-glow-two" />
      </div>

      {/* NAV */}
      <header className="blog-nav">
        <Link
          href="/"
          className="blog-logo"
          aria-label="StackCraft Studio home"
        >
          <span className="blog-logo-mark">
            <span />
            <span />
            <span />
          </span>
          <span>StackCraft</span>
        </Link>

        <nav className="blog-nav-links">
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="blog-nav-cta">
            Start a project
            <ArrowRight size={15} />
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={13} />
            <span>AI Agent Development</span>
          </div>

          <div className="blog-hero-content">
            <div className="blog-eyebrow">
              <Sparkles size={14} />
              AI AGENTS VS AI CHATBOTS
            </div>

            <h1>
              AI Agent vs <span className="gradient-text">AI Chatbot</span>:
              What Should Your Business Build in 2026?
            </h1>

            <p className="blog-hero-description">
              Chatbots answer. Agents can act. But the real business question
              is more important: which architecture actually fits the workflow
              you need to automate?
            </p>

            <div className="blog-hero-meta">
              <span>Updated September 14, 2026</span>
              <span className="meta-dot" />
              <span>11 min read</span>
              <span className="meta-dot" />
              <span>AI Automation</span>
            </div>

            <div className="blog-hero-actions">
              <a href="#quick-answer" className="primary-blog-button">
                See the comparison
                <ArrowRight size={17} />
              </a>

              <Link href="/contact" className="secondary-blog-button">
                Build an AI solution
              </Link>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>CHAT</strong>
              <span>Understand & respond</span>
            </div>
            <div>
              <strong>AGENT</strong>
              <span>Reason & take action</span>
            </div>
            <div>
              <strong>HYBRID</strong>
              <span>Talk + execute</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="blog-layout blog-container">
        <aside className="blog-sidebar">
          <div className="toc-card">
            <div className="toc-title">In this guide</div>

            <nav>
              {toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>{item.label}</span>
                  <ChevronRight size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebar-cta">
            <div className="sidebar-icon">
              <Workflow size={20} />
            </div>
            <h3>Need business automation?</h3>
            <p>
              We design AI-powered workflows, agents and web applications
              around real business processes.
            </p>
            <Link href="/contact">
              Talk to StackCraft
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>

        <article className="blog-article">
          {/* INTRO */}
          <section className="article-section" id="quick-answer">
            <div className="quick-answer">
              <div className="quick-answer-badge">
                <Zap size={14} />
                QUICK ANSWER
              </div>

              <h2>
                Build a chatbot when the primary job is{" "}
                <span>conversation</span>. Build an agent when the primary job
                is <span>execution</span>.
              </h2>

              <div className="quick-answer-grid">
                <div>
                  <MessageSquare size={19} />
                  <strong>AI Chatbot</strong>
                  <p>
                    Answers questions, explains information, guides users and
                    handles conversational interactions.
                  </p>
                </div>

                <div>
                  <Workflow size={19} />
                  <strong>AI Agent</strong>
                  <p>
                    Uses tools, APIs and structured workflows to perform
                    actions and complete multi-step tasks.
                  </p>
                </div>
              </div>
            </div>

            <p className="lead">
              The biggest mistake is treating “AI agent” as simply a more
              advanced chatbot. They can overlap, but their product
              architectures and business outcomes can be very different.
            </p>

            <p>
              A good decision starts with one question:{" "}
              <strong>does the AI need to tell the user what to do, or actually
              do something for them?</strong>
            </p>
          </section>

          {/* CHATBOT */}
          <section className="article-section" id="what-is-chatbot">
            <SectionHeading
              number="01"
              icon={<MessageSquare size={19} />}
              title="What Is an AI Chatbot?"
            />

            <p>
              An AI chatbot is a conversational interface that uses an AI
              model to understand user input and generate useful responses.
            </p>

            <div className="capability-grid">
              <Capability
                icon={<MessageSquare />}
                title="Answer questions"
                text="Help users find information and understand products, services or content."
              />
              <Capability
                icon={<Headphones />}
                title="Customer support"
                text="Handle common questions and guide customers through support flows."
              />
              <Capability
                icon={<Target />}
                title="Lead qualification"
                text="Ask questions, collect details and route qualified leads."
              />
              <Capability
                icon={<Sparkles />}
                title="Content assistance"
                text="Generate, rewrite, summarize or classify information."
              />
            </div>

            <div className="callout purple">
              <div className="callout-icon">
                <Check size={18} />
              </div>
              <div>
                <strong>Chatbots are still valuable.</strong>
                <p>
                  Not every business needs autonomous execution. A focused
                  conversational experience can be simpler to launch, easier
                  to control and easier for users to understand.
                </p>
              </div>
            </div>
          </section>

          {/* AGENT */}
          <section className="article-section" id="what-is-agent">
            <SectionHeading
              number="02"
              icon={<Workflow size={19} />}
              title="What Is an AI Agent?"
            />

            <p>
              An AI agent is a software system that can use an AI model to
              decide what actions to take within a defined environment,
              commonly involving tools, APIs, data sources or application
              workflows.
            </p>

            <div className="agent-flow">
              <AgentStep
                number="01"
                title="Understand"
                text="Interpret the goal"
              />
              <i>→</i>
              <AgentStep
                number="02"
                title="Plan"
                text="Choose the next action"
              />
              <i>→</i>
              <AgentStep
                number="03"
                title="Use tools"
                text="Call APIs / systems"
              />
              <i>→</i>
              <AgentStep
                number="04"
                title="Verify"
                text="Check the result"
              />
            </div>

            <p>
              For example, a sales agent could research a lead, update a CRM,
              draft an email and prepare a follow-up task rather than merely
              explaining how a salesperson could do those things.
            </p>
          </section>

          {/* COMPARISON */}
          <section className="article-section comparison-section" id="comparison">
            <SectionHeading
              number="03"
              icon={<Layers3 size={19} />}
              title="AI Agent vs AI Chatbot: Side-by-Side Comparison"
            />

            <p>
              The practical difference becomes clearer when you compare what
              each system is expected to do.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>
                      <MessageSquare size={15} />
                      AI Chatbot
                    </th>
                    <th>
                      <Workflow size={15} />
                      AI Agent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Answers questions</td>
                    <td>
                      <Check />
                      Yes
                    </td>
                    <td>
                      <Check />
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td>Takes actions</td>
                    <td>
                      <X />
                      Limited
                    </td>
                    <td>
                      <Check />
                      Core capability
                    </td>
                  </tr>
                  <tr>
                    <td>Workflow execution</td>
                    <td>
                      <X />
                      Usually limited
                    </td>
                    <td>
                      <Check />
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td>API / tool usage</td>
                    <td>
                      <span className="neutral-dot" />
                      Possible
                    </td>
                    <td>
                      <Check />
                      Core capability
                    </td>
                  </tr>
                  <tr>
                    <td>Multi-step tasks</td>
                    <td>
                      <X />
                      Limited
                    </td>
                    <td>
                      <Check />
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td>Customer support</td>
                    <td>
                      <Check />
                      Strong fit
                    </td>
                    <td>
                      <Check />
                      Strong fit
                    </td>
                  </tr>
                  <tr>
                    <td>Sales automation</td>
                    <td>
                      <Check />
                      Basic
                    </td>
                    <td>
                      <Check />
                      Advanced
                    </td>
                  </tr>
                  <tr>
                    <td>Operational automation</td>
                    <td>
                      <X />
                      Limited
                    </td>
                    <td>
                      <Check />
                      Strong fit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CORE DIFFERENCE */}
          <section className="article-section" id="difference">
            <SectionHeading
              number="04"
              icon={<Zap size={19} />}
              title="The Core Difference: Answers vs Actions"
            />

            <div className="big-difference">
              <div className="difference-card chatbot">
                <div className="difference-icon">
                  <MessageSquare size={21} />
                </div>
                <span>CHATBOT</span>
                <h3>“What should I do?”</h3>
                <p>
                  The system primarily provides information, recommendations
                  or conversation.
                </p>
                <div className="difference-example">
                  <strong>User:</strong> “How do I reset my password?”
                  <br />
                  <br />
                  <strong>AI:</strong> “Go to Settings → Security → Reset
                  Password.”
                </div>
              </div>

              <div className="difference-vs">VS</div>

              <div className="difference-card agent">
                <div className="difference-icon">
                  <Workflow size={21} />
                </div>
                <span>AGENT</span>
                <h3>“Do it for me.”</h3>
                <p>
                  The system can interact with connected software and execute
                  a defined action.
                </p>
                <div className="difference-example">
                  <strong>User:</strong> “Reset my password.”
                  <br />
                  <br />
                  <strong>AI:</strong> “I've initiated the reset and sent the
                  required confirmation.”
                </div>
              </div>
            </div>

            <div className="callout warning">
              <div className="callout-icon">
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong>More autonomy means more responsibility.</strong>
                <p>
                  Agentic systems need permissions, guardrails, error handling,
                  logging and verification because they can affect real
                  systems and data.
                </p>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="article-section" id="use-cases">
            <SectionHeading
              number="05"
              icon={<Target size={19} />}
              title="Which Businesses Can Use AI Agents?"
            />

            <p>
              Agents are most valuable when there is a repeatable workflow
              involving multiple systems, decisions or actions.
            </p>

            <div className="use-case-grid">
              <UseCase
                icon={<Target />}
                title="Sales"
                text="Research leads, qualify prospects, update CRM records and prepare follow-ups."
              />
              <UseCase
                icon={<Headphones />}
                title="Customer support"
                text="Resolve issues, fetch account information and trigger approved actions."
              />
              <UseCase
                icon={<Database />}
                title="Operations"
                text="Move information between systems, summarize reports and execute repetitive workflows."
              />
              <UseCase
                icon={<Network />}
                title="Research"
                text="Search information, compare sources and compile structured research outputs."
              />
              <UseCase
                icon={<Clock3 />}
                title="Scheduling"
                text="Coordinate requests, check availability and create approved appointments."
              />
              <UseCase
                icon={<Gauge />}
                title="Internal productivity"
                text="Connect company knowledge with tools employees already use."
              />
            </div>
          </section>

          {/* WHEN CHATBOT */}
          <section className="article-section" id="when-chatbot">
            <SectionHeading
              number="06"
              icon={<MessageSquare size={19} />}
              title="When Should Your Business Build an AI Chatbot?"
            />

            <p>
              Choose a chatbot when the value primarily comes from
              understanding a user and responding clearly.
            </p>

            <div className="decision-list">
              <Decision
                yes
                title="Users mainly need answers"
                text="Your users ask questions and need fast, useful information."
              />
              <Decision
                yes
                title="The workflow is mostly conversational"
                text="The conversation itself is the primary interface."
              />
              <Decision
                yes
                title="Actions are limited"
                text="The system does not need broad access to external tools."
              />
              <Decision
                yes
                title="You want a faster MVP"
                text="A focused chatbot can often be simpler to scope and launch."
              />
            </div>
          </section>

          {/* WHEN AGENT */}
          <section className="article-section" id="when-agent">
            <SectionHeading
              number="07"
              icon={<Workflow size={19} />}
              title="When Should Your Business Build an AI Agent?"
            />

            <p>
              Choose an agent when the product needs to move beyond
              conversation and actually perform work.
            </p>

            <div className="decision-list">
              <Decision
                yes
                title="The system needs to take actions"
                text="Examples include creating records, updating data or triggering workflows."
              />
              <Decision
                yes
                title="Multiple tools are involved"
                text="The AI needs to work across CRMs, databases, internal APIs or business software."
              />
              <Decision
                yes
                title="The workflow has multiple steps"
                text="The system must decide what to do next based on context or results."
              />
              <Decision
                yes
                title="Automation is the main value"
                text="You are reducing manual work rather than simply improving communication."
              />
            </div>
          </section>

          {/* HYBRID */}
          <section className="article-section" id="hybrid">
            <SectionHeading
              number="08"
              icon={<Sparkles size={19} />}
              title="Sometimes the Best Answer Is a Hybrid"
            />

            <p>
              A business does not necessarily need to choose between a
              chatbot and an agent as separate products.
            </p>

            <div className="hybrid-flow">
              <div>
                <MessageSquare size={19} />
                <strong>Conversation</strong>
                <span>User explains the goal</span>
              </div>

              <i>→</i>

              <div className="hybrid-main">
                <BrainIcon />
                <strong>AI orchestration</strong>
                <span>Reason + choose actions</span>
              </div>

              <i>→</i>

              <div>
                <Workflow size={19} />
                <strong>Tools</strong>
                <span>Execute approved actions</span>
              </div>
            </div>

            <p>
              This pattern can provide a natural conversational interface
              while still allowing the system to perform controlled actions
              behind the scenes.
            </p>
          </section>

          {/* ARCHITECTURE */}
          <section className="article-section" id="architecture">
            <SectionHeading
              number="09"
              icon={<Layers3 size={19} />}
              title="How AI Chatbots and Agents Are Built"
            />

            <p>
              Both can use the same underlying AI model, but the application
              layer around the model changes significantly.
            </p>

            <div className="architecture-comparison">
              <ArchitectureColumn
                title="Typical chatbot"
                items={[
                  "User interface",
                  "Conversation API",
                  "Prompt / context",
                  "AI model",
                  "Optional knowledge retrieval",
                  "Response",
                ]}
              />

              <ArchitectureColumn
                title="Typical agent"
                items={[
                  "User interface",
                  "Goal / context",
                  "Agent orchestration",
                  "AI model",
                  "Tools & APIs",
                  "Permissions",
                  "Execution",
                  "Verification",
                ]}
              />
            </div>

            <p>
              This does not mean every agent needs a complicated framework. In
              many cases, a small, deterministic workflow with a few well-defined
              tools can be more reliable than a highly autonomous system.
            </p>
          </section>

          {/* COST */}
          <section className="article-section" id="cost">
            <SectionHeading
              number="$"
              icon={<Gauge size={19} />}
              title="How Much Does AI Agent or Chatbot Development Cost?"
            />

            <p>
              Pricing depends more on product scope than on the label
              “chatbot” or “agent.”
            </p>

            <div className="cost-grid">
              <CostCard
                label="AI chatbot MVP"
                range="$8K – $25K+"
                text="Focused conversational experience, authentication, basic knowledge or workflow integration."
              />
              <CostCard
                label="AI agent MVP"
                range="$15K – $40K+"
                text="One or more business workflows, tool calling, permissions and action execution."
              />
              <CostCard
                label="Advanced AI automation"
                range="$40K – $120K+"
                text="Multiple workflows, integrations, RAG, monitoring, complex permissions and production infrastructure."
              />
            </div>

            <div className="cost-factors">
              <div>
                <Check size={15} />
                <span>Number of integrations</span>
              </div>
              <div>
                <Check size={15} />
                <span>Workflow complexity</span>
              </div>
              <div>
                <Check size={15} />
                <span>RAG / private knowledge</span>
              </div>
              <div>
                <Check size={15} />
                <span>Authentication & permissions</span>
              </div>
              <div>
                <Check size={15} />
                <span>Admin & monitoring</span>
              </div>
              <div>
                <Check size={15} />
                <span>Testing & reliability requirements</span>
              </div>
            </div>

            <p className="small-note">
              These are planning ranges, not universal market rates or fixed
              StackCraft pricing. A proper estimate requires the workflow,
              integrations and production requirements to be scoped first.
            </p>

            <p>
              For a broader AI product budget breakdown, see our{" "}
              <Link href="/blog/how-much-does-it-cost-to-build-an-ai-saas-app-in-2026">
                AI SaaS development cost guide
              </Link>
              .
            </p>
          </section>

          {/* TIMELINE */}
          <section className="article-section" id="timeline">
            <SectionHeading
              number="10"
              icon={<Clock3 size={19} />}
              title="How Long Does It Take to Build?"
            />

            <div className="timeline">
              <TimelineItem
                number="01"
                title="Discovery"
                duration="1–2 weeks"
                text="Define the workflow, user journey, tools, permissions and MVP scope."
              />
              <TimelineItem
                number="02"
                title="UX & architecture"
                duration="1–3 weeks"
                text="Design the product interface and technical architecture."
              />
              <TimelineItem
                number="03"
                title="Core development"
                duration="3–8+ weeks"
                text="Build the frontend, backend, database, authentication and core workflow."
              />
              <TimelineItem
                number="04"
                title="AI + automation"
                duration="2–6+ weeks"
                text="Integrate models, tools, APIs, RAG and agentic workflows."
              />
              <TimelineItem
                number="05"
                title="Testing + launch"
                duration="1–3+ weeks"
                text="Test outputs, actions, permissions, failure states and production infrastructure."
              />
            </div>
          </section>

          {/* MISTAKES */}
          <section className="article-section" id="mistakes">
            <SectionHeading
              number="!"
              icon={<X size={19} />}
              title="Common AI Agent Development Mistakes"
            />

            <div className="mistake-grid">
              <Mistake
                number="01"
                title="Making the agent too autonomous"
                text="Give systems only the permissions and actions they actually need."
              />
              <Mistake
                number="02"
                title="Using agents for simple tasks"
                text="A deterministic function or standard API can be more predictable."
              />
              <Mistake
                number="03"
                title="Skipping verification"
                text="Critical actions should have validation, guardrails or human review."
              />
              <Mistake
                number="04"
                title="Ignoring tool failures"
                text="External APIs fail. The application needs retries, fallbacks and clear error handling."
              />
              <Mistake
                number="05"
                title="Not tracking AI costs"
                text="Model usage and repeated tool calls can create unexpected operating costs."
              />
              <Mistake
                number="06"
                title="Confusing a demo with a product"
                text="Production AI needs authentication, permissions, observability and reliable UX."
              />
            </div>
          </section>

          {/* DECISION FRAMEWORK */}
          <section className="article-section decision-section">
            <SectionHeading
              number="✓"
              icon={<CircleCheck size={19} />}
              title="The Simple Decision Framework"
            />

            <div className="decision-framework">
              <DecisionBox
                question="Does the user mainly need information?"
                answer="Build a chatbot"
                icon={<MessageSquare />}
              />
              <DecisionBox
                question="Does the system need to perform actions?"
                answer="Consider an AI agent"
                icon={<Workflow />}
              />
              <DecisionBox
                question="Does it need conversation + actions?"
                answer="Build a hybrid"
                icon={<Sparkles />}
              />
              <DecisionBox
                question="Is the workflow deterministic?"
                answer="Use standard automation where possible"
                icon={<Layers3 />}
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section" id="faq">
            <SectionHeading
              number="?"
              icon={<Sparkles size={19} />}
              title="Frequently Asked Questions"
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <ChevronRight size={18} />
                  </summary>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="final-cta">
            <div className="final-cta-glow" />

            <div className="final-cta-icon">
              <Workflow size={24} />
            </div>

            <div className="final-cta-content">
              <span>AI AUTOMATION DEVELOPMENT</span>
              <h2>Need an AI agent for your business?</h2>
              <p>
                Talk to StackCraft Studio about building an AI agent,
                conversational application or automated workflow around your
                actual business process.
              </p>
            </div>

            <Link href="/contact" className="final-cta-button">
              Talk to StackCraft Studio
              <ArrowRight size={17} />
            </Link>
          </section>
        </article>
      </div>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div className="blog-container footer-inner">
          <Link href="/" className="blog-logo">
            <span className="blog-logo-mark">
              <span />
              <span />
              <span />
            </span>
            <span>StackCraft</span>
          </Link>

          <p>AI-powered websites, web apps and digital products.</p>

          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <span className="copyright">© 2026 StackCraft Studio</span>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------------------------
   COMPONENTS
----------------------------------------- */

function SectionHeading({
  number,
  icon,
  title,
}: {
  number: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-top">
        <span className="section-number">{number}</span>
        <span className="section-icon">{icon}</span>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

function Capability({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="capability-card">
      <div className="capability-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function AgentStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="agent-step">
      <span>{number}</span>
      <strong>{title}</strong>
      <small>{text}</small>
    </div>
  );
}

function UseCase({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="use-case-card">
      <div className="use-case-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Decision({
  yes,
  title,
  text,
}: {
  yes?: boolean;
  title: string;
  text: string;
}) {
  return (
    <div className="decision-row">
      <div className={`decision-icon ${yes ? "yes" : ""}`}>
        {yes ? <Check size={15} /> : <X size={15} />}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ArchitectureColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="architecture-column">
      <h3>{title}</h3>

      <div className="architecture-stack">
        {items.map((item, index) => (
          <div className="architecture-node" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function CostCard({
  label,
  range,
  text,
}: {
  label: string;
  range: string;
  text: string;
}) {
  return (
    <div className="cost-card">
      <span>{label}</span>
      <strong>{range}</strong>
      <p>{text}</p>
    </div>
  );
}

function TimelineItem({
  number,
  title,
  duration,
  text,
}: {
  number: string;
  title: string;
  duration: string;
  text: string;
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-number">{number}</div>

      <div className="timeline-content">
        <div className="timeline-title">
          <h3>{title}</h3>
          <span>{duration}</span>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

function Mistake({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mistake">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function DecisionBox({
  question,
  answer,
  icon,
}: {
  question: string;
  answer: string;
  icon: ReactNode;
}) {
  return (
    <div className="decision-box">
      <div className="decision-box-icon">{icon}</div>

      <p>{question}</p>

      <strong>{answer}</strong>
    </div>
  );
}

function BrainIcon() {
  return <Bot size={19} />;
}