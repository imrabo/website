export const pricingPlans = [
  {
    key: "free",
    name: "Free",
    eyebrow: "Free forever",
    priceInr: "₹0",
    monthlyInr: "₹0",
    annualInr: "₹0",
    monthlyUsd: "$0",
    annualUsd: "$0",
    cadence: "Forever",
    audience: "For developers exploring ImRabo.",
    features: [
      "Local AI provider configurations",
      "Bring Your Own API Key",
      "Local chat and agent execution",
      "Basic MCP connectors",
      "Basic agent and sub-agent creation",
      "Local data storage",
      "Community support"
    ],
    action: "Get started for free",
    href: "/docs/getting-started/",
    note: "BYOK is supported on every plan. Model-provider API usage is billed separately."
  },
  {
    key: "solo",
    name: "Solo",
    eyebrow: "Recommended",
    priceInr: "₹499",
    monthlyInr: "₹499",
    annualInr: "₹4,990",
    monthlyUsd: "$6",
    annualUsd: "$6",
    cadence: "/month",
    audience: "For individual professionals and developers.",
    features: [
      "Everything in Free",
      "Cloud synchronization",
      "Unlimited agent configurations",
      "Custom sub-agents",
      "Full connector marketplace",
      "Agent import/export",
      "Advanced activity logs",
      "Cross-device access",
      "Personal cloud workspace",
      "Priority support"
    ],
    action: "Choose Solo",
    href: "/contact/",
    note: "Annual India billing: ₹4,990/year. International pricing: $6/month."
  },
  {
    key: "team",
    name: "Team",
    eyebrow: "For small teams",
    priceInr: "₹1,499",
    monthlyInr: "₹1,499",
    annualInr: "₹14,990",
    monthlyUsd: "$19",
    annualUsd: "$19",
    cadence: "/month",
    audience: "For teams building with AI agents.",
    features: [
      "Everything in Solo",
      "Up to 5 members",
      "Shared workspace",
      "Shared agents and sub-agents",
      "Shared MCP configurations",
      "Team-level permissions",
      "Role-based access control",
      "Team activity and audit logs",
      "Shared agent templates",
      "Centralized configuration management",
      "Team administration"
    ],
    action: "Choose Team",
    href: "/contact/",
    note: "Annual India billing: ₹14,990/year. International pricing: $19/month."
  },
  {
    key: "enterprise",
    name: "Enterprise",
    eyebrow: "Custom licensing",
    priceInr: "Custom pricing",
    monthlyInr: "Custom pricing",
    annualInr: "Custom pricing",
    monthlyUsd: "Custom pricing",
    annualUsd: "Custom pricing",
    cadence: "",
    audience: "For organizations and large deployments.",
    features: [
      "Everything in Team",
      "Custom or unlimited seats",
      "Self-hosted deployment",
      "SSO and identity management",
      "Advanced RBAC",
      "Organization-wide policies",
      "Centralized secrets management",
      "Advanced audit and compliance",
      "Custom connectors and integrations",
      "Dedicated support and SLA",
      "Custom deployment and licensing"
    ],
    action: "Contact sales",
    href: "/contact/",
    note: "Licensing, deployment scope, support and SLA are agreed by contract."
  }
] as const;

export const commercialPolicies = [
  ["LLM API consumption", "BYOK"],
  ["Hosted AI credits", "Optional paid add-on"],
  ["Local agent execution", "Free"],
  ["Cloud synchronization", "Paid"],
  ["Team collaboration", "Team+"],
  ["Self-hosting", "Free/community where supported; enterprise deployment services paid"],
  ["Premium support", "Paid plans"],
  ["Additional team members", "Paid seat add-on"],
  ["Enterprise licensing", "Custom contract"]
] as const;

export const illustrativeRevenueTargets = [
  { customers: "50 Solo", revenue: "₹24,950" },
  { customers: "100 Solo", revenue: "₹49,900" },
  { customers: "100 Solo + 20 Team", revenue: "₹79,880" },
  { customers: "300 Solo + 50 Team", revenue: "₹2,24,650" },
  { customers: "1,000 Solo + 100 Team", revenue: "₹6,48,900" }
] as const;
