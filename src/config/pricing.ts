export const imraboPlans = [
  {
    name: "Free with BYOK",
    price: "$0",
    cadence: "ImRabo workspace",
    audience: "For people who want control over their own AI provider accounts.",
    description: "Use your own model-provider API keys and pay providers directly for the usage you consume.",
    features: ["Bring your own provider API keys", "Choose supported models and providers", "Personal workspace and conversations", "Explore available tools and connectors", "No ImRabo subscription fee"],
    action: "Get started",
    href: "/docs/getting-started/",
    featured: false,
    note: "Provider API usage is billed separately by each provider."
  },
  {
    name: "Solo",
    price: "Coming soon",
    cadence: "Individual plan",
    audience: "For individuals who want a managed, ready-to-use AI workspace.",
    description: "A streamlined personal experience with subscription-based access and less provider setup.",
    features: ["Personal AI workspace", "Managed usage allowance (to be announced)", "Agent and workflow capabilities", "Expanded productivity features", "Personal settings and history"],
    action: "Explore the plan",
    href: "/pricing/",
    featured: true,
    note: "Final price, usage allowance and included models will be published before launch."
  },
  {
    name: "Team",
    price: "Coming soon",
    cadence: "Per-seat plan",
    audience: "For teams that need shared workspaces and coordinated AI work.",
    description: "Bring people, shared resources and agent workflows into a collaborative workspace.",
    features: ["Team workspace and member management", "Shared agents and reusable workflows", "Shared connector configuration", "Usage visibility and team controls", "Centralized billing (planned)"],
    action: "Explore the plan",
    href: "/pricing/",
    featured: false,
    note: "Seat pricing, minimum seats and administration scope are to be announced."
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "Contract-based",
    audience: "For organizations with advanced security, governance and deployment needs.",
    description: "A tailored deployment and commercial arrangement based on organizational requirements.",
    features: ["Enterprise identity and access requirements", "Governance and administrative controls", "Deployment and integration assessment", "Security and compliance review", "Dedicated commercial discussion"],
    action: "Contact us",
    href: "/contact/",
    featured: false,
    note: "Availability and contractual commitments are subject to an agreed scope."
  }
] as const;
