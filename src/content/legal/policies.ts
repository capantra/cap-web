export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicyChange = {
  version: string;
  date: string;
  notes: string[];
};

export type PolicyDoc = {
  key:
    | "terms"
    | "privacy"
    | "master-services"
    | "service-level"
    | "data-processing"
    | "acceptable-use"
    | "security"
    | "telecommunications"
    | "anti-spam"
    | "responsible-use"
    | "regulatory";
  title: string;
  path: string;
  category: "Legal" | "Compliance";
  policyId: string;
  summary: string;
  lastUpdated: string;
  version: string;
  jurisdictions: string;
  sections: PolicySection[];
  changeLog: PolicyChange[];
  contacts?: Array<{ label: string; email: string }>;
};

export const POLICY_DOCS: PolicyDoc[] = [
  {
    key: "terms",
    title: "Terms of Service",
    path: "/legal/terms",
    category: "Legal",
    policyId: "legal-terms",
    summary:
      "These Terms govern access to and use of the Capantra platform, including dialling, analytics, APIs, and related services.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "These Terms of Service govern your access to and use of the Capantra platform, including software, applications, dialling systems, dashboards, APIs, and related services.",
          "By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services.",
        ],
      },
      {
        heading: "2. Eligibility & Authority",
        bullets: [
          "You must be at least 18 years old to use the Services.",
          "If you use the Services on behalf of an organisation, you represent that you have authority to bind that organisation.",
        ],
      },
      {
        heading: "3. Services Overview",
        paragraphs: [
          "Capantra provides outbound infrastructure tools including dialling, sales performance analytics, and market-specific modules.",
          "Capantra does not provide legal advice, compliance certification, or campaign approval.",
        ],
      },
      {
        heading: "4. Customer Responsibilities",
        bullets: [
          "Ensure outbound activity complies with applicable laws and regulations.",
          "Obtain and document valid consent where required.",
          "Maintain suppression lists and honour opt-outs.",
          "Manage access credentials and role permissions.",
          "Ensure legality and accuracy of data uploaded or processed via the Services.",
        ],
      },
      {
        heading: "5. Prohibited Use",
        bullets: [
          "Unlawful, deceptive, harassing, or abusive communications.",
          "Bypassing Do Not Call registries, opt-outs, or consent requirements.",
          "Spam, robocalls, or automated harassment without lawful basis.",
          "Misrepresentation of caller identity where prohibited.",
        ],
      },
      {
        heading: "6. Intellectual Property",
        paragraphs: [
          "Capantra retains all rights, title, and interest in the Services.",
          "Customers retain ownership of their data and grant Capantra a limited right to process data solely to provide and improve the Services.",
        ],
      },
      {
        heading: "7. Availability & Modifications",
        paragraphs: [
          "Services are provided as-is and as-available.",
          "Capantra may update features for security, compliance, or performance reasons and will provide reasonable notice of material changes where practical.",
        ],
      },
      {
        heading: "8. Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by law, Capantra is not liable for indirect, incidental, special, or consequential damages.",
          "Total liability is limited to fees paid in the preceding 12 months, subject to non-excludable rights under applicable law.",
        ],
      },
      {
        heading: "9. Suspension & Termination",
        paragraphs: [
          "Capantra may suspend or terminate access to prevent harm, address abuse, comply with law, or where a customer materially breaches these Terms.",
        ],
      },
      {
        heading: "10. Governing Law",
        paragraphs: [
          "Governing law and venue may depend on the contracting entity and customer location.",
          "Unless otherwise agreed in writing: Australia (Western Australia), United States (Delaware), and EU (Ireland).",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Terms of Service."],
      },
    ],
  },
  {
    key: "privacy",
    title: "Privacy Policy",
    path: "/legal/privacy",
    category: "Legal",
    policyId: "legal-privacy",
    summary:
      "Explains how Capantra collects, uses, discloses, stores, and protects personal information and personal data.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Scope",
        paragraphs: [
          "This Policy describes how Capantra handles personal information.",
          "It is designed to align with the Australian Privacy Act 1988 (Cth), relevant US state privacy laws (including CCPA/CPRA where applicable), and GDPR.",
        ],
      },
      {
        heading: "2. Information We Process",
        bullets: [
          "Account details (name, email, role, authentication signals).",
          "Call and activity metadata (timestamps, outcomes, dispositions).",
          "Usage analytics and diagnostic logs.",
          "Customer-provided data processed within the Service.",
          "We do not sell personal data.",
        ],
      },
      {
        heading: "3. How We Use Information",
        bullets: [
          "Provide, maintain, and improve the Services.",
          "Security, fraud prevention, and abuse detection.",
          "Customer support and service communications.",
          "Compliance with legal obligations.",
        ],
      },
      {
        heading: "4. Legal Basis (GDPR)",
        paragraphs: [
          "Where GDPR applies, Capantra processes personal data based on contractual necessity, legitimate interests, and/or consent where required by law.",
        ],
      },
      {
        heading: "5. Security",
        paragraphs: [
          "Capantra implements technical and organisational measures including encryption in transit and at rest, role-based access controls, logging, and incident response procedures.",
        ],
      },
      {
        heading: "6. Retention",
        paragraphs: [
          "Personal information is retained only as long as needed for legitimate business purposes, contractual performance, or legal obligations, then deleted or de-identified where feasible.",
        ],
      },
      {
        heading: "7. International Transfers",
        paragraphs: [
          "Data may be processed outside your jurisdiction. Where required, lawful safeguards such as SCCs or equivalent mechanisms are used.",
        ],
      },
      {
        heading: "8. Your Rights",
        paragraphs: [
          "Depending on jurisdiction, individuals may have rights to access, correct, delete, restrict processing, object, and request portability.",
          "Capantra responds within legally required timeframes.",
        ],
      },
      {
        heading: "9. Contact",
        paragraphs: ["Privacy enquiries and requests: privacy@capantra.com"],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Privacy Policy."],
      },
    ],
    contacts: [{ label: "Privacy", email: "privacy@capantra.com" }],
  },
  {
    key: "master-services",
    title: "Master Services Agreement",
    path: "/legal/master-services",
    category: "Legal",
    policyId: "legal-msa",
    summary:
      "Enterprise master agreement covering parties, license grant, fees, responsibilities, confidentiality, indemnity, liability, and governing law.",
    lastUpdated: "02-03-2026",
    version: "v1.0",
    jurisdictions: "AU / US / UK",
    sections: [
      {
        heading: "1. Parties and Acceptance",
        paragraphs: [
          "This agreement is entered into between Capantra Pty Ltd and the legal entity accepting the agreement as Customer.",
          "Acceptance occurs by signed order form, electronic acceptance, or access/use of the services, and Customer represents authority to bind its organisation.",
        ],
      },
      {
        heading: "2. Structure of Agreement",
        bullets: [
          "Covers SaaS platform, enterprise modules and APIs, support services, professional services, and documentation.",
          "Order of precedence: Order Form, MSA, DPA, SLA.",
        ],
      },
      {
        heading: "3. License Grant",
        paragraphs: [
          "Subject to compliance and payment, Capantra grants a non-exclusive, non-transferable, non-sublicensable, revocable license for internal business use.",
        ],
        bullets: [
          "No resale or sublicensing without written approval.",
          "No reverse engineering except where legally non-excludable.",
          "No use to build competing software.",
          "No exceeding contracted usage limits.",
        ],
      },
      {
        heading: "4. Commercial Terms",
        bullets: [
          "Fees are set out in order forms and are non-refundable.",
          "Subscriptions auto-renew unless terminated under order form terms.",
          "Customer is responsible for GST, VAT, and sales taxes as applicable.",
          "Late payments may accrue interest at 1.5% per month or maximum lawful rate.",
        ],
      },
      {
        heading: "5. Customer Responsibilities",
        bullets: [
          "Lawful collection and processing of personal data.",
          "Regulatory compliance in customer operations.",
          "Accuracy and legality of Customer Data.",
          "User compliance with agreement obligations.",
        ],
      },
      {
        heading: "6. Intellectual Property",
        paragraphs: [
          "Capantra retains rights in services, platform architecture, improvements, and aggregated anonymised analytics.",
          "Customer retains ownership of Customer Data.",
        ],
      },
      {
        heading: "7. Confidentiality",
        paragraphs: [
          "Each party must protect confidential information with reasonable care, use it only for agreement purposes, and restrict access to authorised personnel.",
          "Confidentiality survives five years; trade secrets survive indefinitely.",
        ],
      },
      {
        heading: "8. Warranties",
        paragraphs: [
          "Capantra warrants services will materially conform to documentation.",
          "Exclusive remedy is correction of non-conformity or pro-rata refund for affected services.",
          "Except as stated, services are provided as-is and non-waivable statutory rights remain unaffected.",
        ],
      },
      {
        heading: "9. Indemnification",
        bullets: [
          "Capantra IP indemnity for third-party IP infringement claims relating to authorised use.",
          "Customer indemnity for claims arising from Customer Data, regulatory violations, or service misuse.",
        ],
      },
      {
        heading: "10. Limitation of Liability",
        paragraphs: [
          "Excluded damages include indirect or consequential damages, lost profits/goodwill, and business interruption.",
          "Standard cap is the greater of fees paid in the preceding 12 months or AUD $2,000,000.",
          "Super-cap for data protection breaches, confidentiality breaches, and IP indemnity is 2x standard cap (AUD $4,000,000).",
          "Nothing limits liability for death/personal injury, fraud, or liability that cannot legally be limited.",
        ],
      },
      {
        heading: "11. Term and Termination",
        paragraphs: [
          "Either party may terminate for material breach not cured within 30 days.",
          "Upon termination, access ceases, fees remain payable, data export remains available for 30–60 days, and data deletion follows the DPA.",
        ],
      },
      {
        heading: "12. Governing Law",
        bullets: [
          "Australia: Western Australia.",
          "United States: Delaware.",
          "United Kingdom: England & Wales.",
        ],
      },
      {
        heading: "13. Electronic Contracting",
        paragraphs: [
          "Electronic acceptance constitutes a legally binding agreement.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v1.0",
        date: "02-03-2026",
        notes: [
          "Aligned to updated enterprise MSA draft dated 2 March 2026.",
          "Expanded section mapping to match published MSA clause structure.",
        ],
      },
    ],
    contacts: [{ label: "Legal", email: "legal@capantra.com" }],
  },
  {
    key: "service-level",
    title: "Service Level Agreement (Enterprise)",
    path: "/legal/service-level",
    category: "Legal",
    policyId: "legal-sla",
    summary:
      "Enterprise SLA defining 99.9% monthly uptime commitment, service credits, severity response targets, exclusions, and repeated-failure termination rights.",
    lastUpdated: "02-03-2026",
    version: "v1.0",
    jurisdictions: "Global (contracted services)",
    sections: [
      {
        heading: "1. Availability Commitment",
        paragraphs: [
          "Capantra commits to 99.9% Monthly Uptime Percentage.",
          "MUP formula: (Total Minutes - Downtime) ÷ Total Minutes × 100.",
          "Allowed downtime is approximately 43.8 minutes per month.",
        ],
      },
      {
        heading: "2. Service Credits",
        bullets: [
          "99.0%–99.9% monthly uptime: 5% credit.",
          "98.0%–99.0% monthly uptime: 10% credit.",
          "Below 98.0% monthly uptime: 20% credit.",
          "Credits apply to affected services only.",
          "Claims must be requested within 15 days.",
          "Credits are exclusive remedy, capped at 20% of monthly fee, and no cash refunds apply.",
        ],
      },
      {
        heading: "3. Excluded Downtime",
        bullets: [
          "Scheduled maintenance.",
          "Emergency maintenance.",
          "Force majeure.",
          "Third-party outages.",
          "Customer-caused issues.",
          "Beta features.",
        ],
      },
      {
        heading: "4. Incident Severity",
        bullets: [
          "Severity 1 (Critical): response in 1 hour (24/7).",
          "Severity 2: response within 4 hours.",
          "Severity 3: response by next business day.",
          "Severity 4: backlog scheduling.",
        ],
      },
      {
        heading: "5. Repeated Failure Termination",
        paragraphs: [
          "If uptime falls below 98% for 3 consecutive months or 4 months in any rolling 6-month period, Customer may terminate affected services and receive pro-rata refund.",
        ],
      },
      {
        heading: "6. Scheduled Maintenance",
        paragraphs: [
          "Capantra provides 48 hours notice where practicable and conducts maintenance during designated maintenance windows.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v1.0",
        date: "02-03-2026",
        notes: [
          "Aligned to updated enterprise SLA draft dated 2 March 2026.",
          "Updated sections to match published SLA clause order and wording.",
        ],
      },
    ],
    contacts: [{ label: "Support", email: "support@capantra.com" }],
  },
  {
    key: "data-processing",
    title: "Data Processing Agreement",
    path: "/legal/data-processing",
    category: "Legal",
    policyId: "legal-dpa",
    summary:
      "Enterprise DPA defining controller/processor roles, processing scope, security controls, transfer safeguards, and audit/deletion obligations.",
    lastUpdated: "02-03-2026",
    version: "v1.0",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Roles",
        paragraphs: [
          "Customer acts as Controller and Capantra acts as Processor / Service Provider.",
        ],
      },
      {
        heading: "2. Nature of Processing",
        paragraphs: [
          "Processing is necessary to provide SaaS services, including hosting, storage, transmission, support, and analytics where contracted.",
        ],
      },
      {
        heading: "3. Categories of Data",
        bullets: [
          "Contact information.",
          "Communication records.",
          "Usage data.",
          "Device/IP data.",
          "Account credentials.",
        ],
      },
      {
        heading: "4. Processor Obligations",
        bullets: [
          "Process only on documented instructions.",
          "Ensure confidentiality.",
          "Maintain security measures.",
          "Assist with data subject rights.",
          "Notify of data breaches without undue delay.",
          "Delete or return data upon termination.",
        ],
      },
      {
        heading: "5. Security Measures",
        bullets: [
          "Encryption in transit.",
          "Encryption at rest.",
          "Role-based access controls.",
          "MFA for privileged access.",
          "Logging and monitoring.",
          "Vulnerability management.",
          "Incident response plan.",
        ],
      },
      {
        heading: "6. Subprocessors",
        bullets: [
          "Capantra may engage subprocessors.",
          "Equivalent contractual safeguards are imposed.",
          "Subprocessor list is maintained.",
          "Material changes are notified.",
        ],
      },
      {
        heading: "7. International Transfers",
        paragraphs: [
          "Transfers rely on EU SCC (2021), UK Addendum, APP-compliant safeguards, and US Service Provider provisions.",
          "SCCs are incorporated by reference where required.",
        ],
      },
      {
        heading: "8. US Privacy Compliance",
        paragraphs: [
          "Capantra acts as a Service Provider, does not sell personal data, does not share for behavioural advertising, and processes solely for business purposes.",
        ],
      },
      {
        heading: "9. Breach Notification",
        paragraphs: [
          "Capantra notifies without undue delay, provides breach details, cooperates in investigations, and does not notify regulators without instruction unless legally required.",
        ],
      },
      {
        heading: "10. Audit Rights",
        paragraphs: [
          "Customer may request security documentation and conduct one remote audit annually with notice.",
          "Third-party certifications may satisfy audit requirements.",
        ],
      },
      {
        heading: "11. Data Deletion",
        paragraphs: [
          "Upon termination, data export is available for 30–60 days, then data is securely deleted, with backups overwritten per retention schedule.",
        ],
      },
      {
        heading: "12. Liability",
        paragraphs: [
          "Liability under this DPA is subject to the MSA liability caps.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v1.0",
        date: "02-03-2026",
        notes: [
          "Aligned to updated enterprise DPA draft dated 2 March 2026.",
          "Updated section order and control language to match published DPA summary.",
        ],
      },
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Data Processing Agreement."],
      },
    ],
    contacts: [{ label: "Privacy", email: "privacy@capantra.com" }],
  },
  {
    key: "acceptable-use",
    title: "Acceptable Use Policy",
    path: "/legal/acceptable-use",
    category: "Legal",
    policyId: "legal-aup",
    summary:
      "Defines prohibited conduct and responsible usage requirements for dialling, messaging, data, and platform access.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. General Requirements",
        paragraphs: [
          "Customers must use the Services lawfully and responsibly.",
          "Customers are responsible for ensuring campaigns, calling practices, scripts, and data sources comply with applicable laws.",
        ],
      },
      {
        heading: "2. Prohibited Activities",
        bullets: [
          "Spam, robocalls, or automated harassment without lawful basis.",
          "Harassment, intimidation, threats, or discriminatory conduct.",
          "Fraud, misrepresentation, or deceptive caller identity.",
          "Circumventing opt-outs, suppression lists, or Do Not Call requirements.",
          "Uploading unlawful data or violating third-party rights.",
        ],
      },
      {
        heading: "3. Enforcement",
        paragraphs: [
          "Capantra may suspend or terminate access where necessary to prevent harm, investigate misuse, comply with law, or enforce these policies.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Acceptable Use Policy."],
      },
    ],
  },
  {
    key: "security",
    title: "Security Policy",
    path: "/legal/security",
    category: "Legal",
    policyId: "legal-security",
    summary:
      "Describes Capantra security principles and controls used to protect the platform, customer data, and operations.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Security Principles",
        bullets: [
          "Least privilege access.",
          "Defence-in-depth controls.",
          "Secure-by-default architecture.",
          "Incident preparedness and response.",
        ],
      },
      {
        heading: "2. Controls",
        bullets: [
          "Encryption in transit (TLS) and at rest where applicable.",
          "Role-based access controls and audit logs.",
          "Monitoring and alerting for abnormal usage patterns.",
          "Dependency and patch management.",
        ],
      },
      {
        heading: "3. Incident Response",
        paragraphs: [
          "Capantra maintains incident handling procedures and notifies customers where required by law or contract when customer data is impacted.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Security Policy."],
      },
    ],
    contacts: [{ label: "Security", email: "security@capantra.com" }],
  },
  {
    key: "telecommunications",
    title: "Telecommunications Compliance Policy",
    path: "/compliance/telecommunications",
    category: "Compliance",
    policyId: "compliance-telecommunications",
    summary:
      "Explains how Capantra supports compliant outbound operations and outlines customer obligations across AU, US, and EU.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Purpose",
        paragraphs: [
          "Capantra is designed to support compliant outbound operations through controls and visibility.",
          "Capantra does not provide compliance certification and does not guarantee that customer use is compliant.",
        ],
      },
      {
        heading: "2. Customer Obligations",
        bullets: [
          "Obtain consent where required and maintain evidence of consent.",
          "Respect Do Not Call registries and opt-out requests.",
          "Comply with calling hours and identification rules where applicable.",
          "Ensure scripts and practices comply with consumer protection laws.",
        ],
      },
      {
        heading: "3. Platform Support Features",
        bullets: [
          "Disposition logging and auditability.",
          "Role-based access controls.",
          "Opt-out and suppression-list compatible workflows (where implemented).",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Telecommunications Compliance Policy."],
      },
    ],
  },
  {
    key: "anti-spam",
    title: "Anti-Spam & Calling Policy",
    path: "/compliance/anti-spam",
    category: "Compliance",
    policyId: "compliance-anti-spam",
    summary:
      "Defines opt-out handling, suppression expectations, and respectful outbound communication standards.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Opt-out & Suppression",
        paragraphs: [
          "Customers must honour opt-out requests promptly and maintain suppression lists to prevent re-contacting individuals who have opted out.",
        ],
      },
      {
        heading: "2. Respectful Contact Standards",
        bullets: [
          "No harassment, threats, or coercion.",
          "No deceptive identity or misleading representations.",
          "Calling windows and local rules must be respected.",
        ],
      },
      {
        heading: "3. Enforcement",
        paragraphs: [
          "Capantra may review usage patterns for abuse prevention and suspend accounts where necessary to mitigate harm or comply with law.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Anti-Spam & Calling Policy."],
      },
    ],
  },
  {
    key: "responsible-use",
    title: "Responsible Use Statement",
    path: "/compliance/responsible-use",
    category: "Compliance",
    policyId: "compliance-responsible-use",
    summary:
      "Capantra is built to enable lawful, respectful outbound engagement and does not support abusive or unlawful usage.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Our Position",
        paragraphs: [
          "Capantra exists to improve legitimate outbound operations through clearer performance insight, better workflow discipline, and more respectful contact outcomes.",
        ],
      },
      {
        heading: "2. Not Supported",
        bullets: [
          "Harassment or intimidation.",
          "Spam or unlawful automated calling.",
          "Circumvention of opt-outs or Do Not Call requirements.",
          "Fraudulent or deceptive practices.",
        ],
      },
      {
        heading: "3. Enforcement",
        paragraphs: [
          "Capantra may restrict or terminate access where use conflicts with this statement, customer contracts, policies, or applicable law.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Responsible Use Statement."],
      },
    ],
  },
  {
    key: "regulatory",
    title: "Regulatory Alignment Statement",
    path: "/compliance/regulatory",
    category: "Compliance",
    policyId: "compliance-regulatory-alignment",
    summary:
      "High-level statement describing how Capantra monitors regulatory expectations across AU, US, and EU.",
    lastUpdated: "31-12-2025",
    version: "v0.2",
    jurisdictions: "AU / US / EU",
    sections: [
      {
        heading: "1. Monitoring",
        paragraphs: [
          "Capantra monitors relevant privacy, telecoms, and consumer protection guidance across AU, US, and EU.",
          "Where changes materially impact platform expectations, policies and (where appropriate) product controls are updated.",
        ],
      },
      {
        heading: "2. Customer Responsibility",
        paragraphs: [
          "Customers operate campaigns and remain responsible for legal interpretations, consent requirements, and compliance programs.",
          "Capantra provides tools to support accountability, not legal determinations.",
        ],
      },
    ],
    changeLog: [
      {
        version: "v0.2",
        date: "31-12-2025",
        notes: [
          "Added enterprise procurement summary structure.",
          "Added change log and versioning.",
          "Clarified AU/US/EU scope and responsibilities.",
        ],
      },
      {
        version: "v0.1",
        date: "31-12-2025",
        notes: ["Initial publication of Regulatory Alignment Statement."],
      },
    ],
  },
];

export function getPolicyByKey(key: PolicyDoc["key"]): PolicyDoc {
  const policy = POLICY_DOCS.find((doc) => doc.key === key);
  if (!policy) {
    throw new Error(`Unknown policy key: ${key}`);
  }
  return policy;
}

export function getPolicyNav(category?: PolicyDoc["category"]): PolicyDoc[] {
  return category ? POLICY_DOCS.filter((doc) => doc.category === category) : POLICY_DOCS;
}
