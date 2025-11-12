export const siteContent = {
  hero: {
    headline: "Tattoo now. Pay Over Time.",
    subhead: "The first BNPL purpose-built for multi-session services. Approve once, capture each visit only after it happens. Lower risk, higher completion, transparent terms.",
    primaryCTA: "Request Investor Deck"
  },

  valueProps: [
    {
      title: "Built for sessions",
      description: "One approval, multiple verified disbursements. Unused authorization simply expires.",
      icon: "layers"
    },
    {
      title: "Bank-grade compliance",
      description: "TILA/Reg Z & ESIGN flows; Reg E for ACH; ECOA adverse action; clear, fair terms.",
      icon: "shield-check"
    },
    {
      title: "Safer unit economics",
      description: "Pay only for delivered sessions; engineered to reduce loss severity.",
      icon: "trending-down"
    },
    {
      title: "Faster completion & bigger tickets",
      description: "Customers finish projects sooner; merchants grow conversion and AOV.",
      icon: "zap"
    }
  ],

  customerJourney: {
    title: "Customer Journey",
    steps: [
      { label: "Pre-qualify & create account", icon: "user-plus" },
      { label: "KYC & link bank", icon: "link" },
      { label: "Approval with clear terms", icon: "check-circle" },
      { label: "Book sessions", icon: "calendar" },
      { label: "After each session: confirm → capture → merchant paid", icon: "arrow-right" },
      { label: "Fixed ACH repayments; re-amortize if ending early", icon: "repeat" }
    ],
    callout: "Fixed monthly ACH; if you end early, we re-amortize—you only repay what was captured."
  },

  merchantJourney: {
    title: "Merchant Journey",
    steps: [
      {
        title: "Request",
        description: "Integrate via portal or lightweight API.",
        icon: "plug"
      },
      {
        title: "Verify",
        description: "Record session completion in 10 seconds.",
        icon: "check-square"
      },
      {
        title: "Payout",
        description: "Payout next-day (ACH/RTP), with optional small rolling reserve for certain verticals.",
        icon: "dollar-sign"
      }
    ],
    callout: "Freeze next capture on dispute; previously paid sessions stand unless fraud."
  },

  merchantBenefits: {
    title: "Why Merchants Earn More",
    benefits: [
      "Fewer cancellations & no-shows (customer has financing locked)",
      "Faster project completion (weeks, not months of saving)",
      "Larger average order values; multi-session packages become accessible",
      "Immediate cash per session (predictable cash flow)"
    ]
  },

  economics: {
    title: "Economics at a Glance",
    cards: [
      {
        title: "Session-aligned funding",
        description: "Engineered lower LGD through verified disbursements"
      },
      {
        title: "Revenue drivers",
        description: "Merchant fee, optional origination, interest spread"
      }
    ]
  },

  compliance: {
    title: "Compliance & Risk",
    subtitle: "Bank-grade standards from day one",
    items: [
      { title: "TILA/Reg Z & ESIGN", description: "Clear disclosures & electronic signatures" },
      { title: "Reg E (ACH)", description: "Authorization & error resolution" },
      { title: "ECOA/Reg B", description: "Adverse action notices" },
      { title: "UDAAP", description: "Transparent, fair practices" },
      { title: "Fair Lending", description: "Ongoing monitoring" },
      { title: "SOC2/Safeguards", description: "Security alignment" },
      { title: "Vendor Oversight", description: "Third-party management" },
      { title: "Collections", description: "Digital-first partners" }
    ]
  },

  faq: [
    {
      question: "How is this different from pay-in-4?",
      answer: "Traditional BNPL pays merchants upfront for the full amount. Derma Finance only pays for completed sessions—so if a customer books 10 tattoo sessions but only completes 6, the merchant receives payment for 6, not 10. This reduces risk and aligns incentives."
    },
    {
      question: "What happens if a customer stops mid-project?",
      answer: "We re-amortize the loan based on what was actually captured. The customer only repays what was disbursed to the merchant, keeping payments fair and transparent."
    },
    {
      question: "Does this hurt my credit?",
      answer: "We perform a soft inquiry during pre-qualification (no impact). A hard inquiry happens only at final approval, and responsible repayment can help build credit."
    },
    {
      question: "How fast do merchants get paid?",
      answer: "Merchants receive payment T+0 or T+1 (next business day) after confirming session completion. Faster than traditional invoice factoring."
    },
    {
      question: "How do disputes work?",
      answer: "If a customer disputes a charge, we freeze the next pending capture while investigating. Previously paid sessions remain with the merchant unless fraud is proven."
    },
    {
      question: "Where do you operate?",
      answer: "We're launching in select U.S. states with licensed bank partners. Expansion plans are underway based on merchant and customer demand."
    }
  ],

  finalCTA: {
    headline: "Ready to see the economics in action?",
    primaryCTA: "Request Investor Deck",
    secondaryCTA: "Merchant Demo"
  },

  footer: {
    company: "Derma Finance, Inc.",
    email: "hello@dermafinance.com",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" }
    ]
  }
};
