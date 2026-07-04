export const HERO_CONTENT = {
  badge: 'Introducing MADES v1.0',
  title: 'The World Model for',
  titleAccent: 'Everything That Is Made',
  subtitle:
    'From a sketch to a shipping part, MADES is the first industrial foundation model that understands geometry, physics, materials, machines, cost and manufacturing constraints — end-to-end.',
  primaryCta: 'Start Building',
  secondaryCta: 'Watch the Demo',
  stats: [
    { value: '7', label: 'Core Model Families' },
    { value: '6', label: 'Industrial Modalities' },
    { value: '100ms', label: 'DFM Latency' },
    { value: '99.2%', label: 'Feature Recognition' },
  ],
};

export const PRODUCT_POSITIONING = {
  eyebrow: 'Beyond CAD Copilots',
  title: 'MADES is not a CAD copilot.',
  subtitle: 'It is an Industrial World Model.',
  description:
    'Traditional copilots merely autocomplete the screen. MADES builds a latent understanding of the physical world — how forces travel through steel, how a tool cuts aluminum, where a mold will fail — so it can design, plan, simulate and manufacture at a level of reasoning previously reserved for teams of senior engineers.',
  coreUnderstandings: [
    'Geometry',
    'Physics',
    'Process',
    'Materials',
    'Machines',
    'Cost',
    'Constraints',
  ],
  outcomes: ['Understand products', 'Design products', 'Make products', 'Optimize products'],
};

export type ArchitectureLayer = {
  level: number;
  title: string;
  subtitle: string;
  color: 'cyan' | 'indigo' | 'violet';
  highlight?: boolean;
  inputs?: string[];
  capabilities?: string[];
  outputs?: string[];
  systems?: string[];
  example?: string;
};

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    level: 1,
    title: 'Industrial Language',
    subtitle: 'Multimodal semantic understanding',
    color: 'cyan',
    inputs: ['Natural language', 'Drawings', 'PDFs', 'Excel', 'Images', 'Sketches', 'CAD models'],
    capabilities: [
      'Requirements parsing',
      'Industrial semantic grounding',
      'Engineering parameter extraction',
      'Knowledge-grounded reasoning',
    ],
  },
  {
    level: 2,
    title: 'Industrial Geometry',
    subtitle: 'Deep B-Rep understanding',
    color: 'indigo',
    highlight: true,
    inputs: ['STEP', 'IGES', 'Parasolid', 'SolidWorks', 'JT'],
    capabilities: [
      'Topology graph generation',
      'Parameter graph construction',
      'Feature recognition across 30+ primitives',
      'Constraint graph learning',
      'Assembly, tolerance & kinematics understanding',
    ],
  },
  {
    level: 3,
    title: 'Industrial Physics',
    subtitle: 'Materials & mechanical reasoning',
    color: 'violet',
    inputs: ['Material libraries', 'FEA/CFD datasets', 'Process telemetry'],
    capabilities: [
      'Steel, aluminum, titanium, polymers, composites',
      'Stress, thermal deformation, vibration, fatigue',
      'Cutting, melting, solidification, forming dynamics',
    ],
  },
  {
    level: 4,
    title: 'Manufacturing Reasoning',
    subtitle: 'DFM · Process planning · Cost',
    color: 'cyan',
    inputs: ['Part model', 'Tolerance specs', 'Production volume'],
    capabilities: [
      'DFM: risk, cost, tolerance diagnostics & redesign hints',
      'Process routing: machines, fixtures, tools, sequence',
      'Cost reasoning: material, machining, finishing, logistics',
    ],
  },
  {
    level: 5,
    title: 'Manufacturing Execution',
    subtitle: 'CNC program generation & CAM',
    color: 'indigo',
    inputs: ['Planned routes', 'Tool library', 'Machine kinematics'],
    capabilities: ['Automatic tool selection', 'Toolpath generation', 'Collision-free sequencing', 'Machining simulation'],
    outputs: ['CNC programs', 'G-code', 'M-code', 'Toolpaths'],
    systems: ['FANUC', 'Siemens', 'Heidenhain', 'Mitsubishi', 'Haas'],
  },
  {
    level: 6,
    title: 'Design Generation',
    subtitle: 'End-to-end industrial design',
    color: 'violet',
    example: '"Design a drone arm optimized for 2kg payload, CNC-machined from 7075 aluminum."',
    capabilities: [
      'Concept generation from requirements',
      'Parametric geometry synthesis',
      'Material & process co-selection',
      'End-to-end manufacturability assurance',
    ],
    outputs: ['Concept', 'Parameters', 'Materials', '3D model', 'Process plan', 'Quote'],
  },
];

type CapValue = boolean | 'weak';

interface MatrixTool {
  name: string;
  highlight?: boolean;
}
interface MatrixRow {
  capability: string;
  cells: CapValue[];
}
export const CAPABILITY_MATRIX: { tools: MatrixTool[]; rows: MatrixRow[] } = {
  tools: [
    { name: 'Generic LLM' },
    { name: 'CAD Software' },
    { name: 'CAM Software' },
    { name: 'MADES', highlight: true },
  ],
  rows: [
    { capability: 'Understand natural language', cells: [true, false, false, true] },
    { capability: 'Understand 2D drawings', cells: ['weak', true, 'weak', true] },
    { capability: 'Understand 3D CAD models', cells: [false, true, 'weak', true] },
    { capability: 'DFM & manufacturability analysis', cells: [false, 'weak', 'weak', true] },
    { capability: 'Process planning', cells: [false, false, true, true] },
    { capability: 'Engineering cost estimation', cells: [false, false, false, true] },
    { capability: 'Generate ready-to-run G-code', cells: [false, false, true, true] },
    { capability: 'End-to-end new product design', cells: ['weak', true, false, true] },
  ],
};

export const FOUNDATION_MODELS = [
  {
    name: 'Industrial LLM',
    tagline: 'Language, reasoning, process, knowledge',
    scale: '70B – 200B',
    inputs: ['Natural language', 'Technical documents', 'Process manuals'],
    outputs: ['Process plans', 'Reasoned reports', 'Technical briefs'],
    positioning: 'General intelligence foundation for industry.',
    accent: 'indigo',
  },
  {
    name: 'Geometry Model',
    tagline: 'CAD understanding & generation',
    scale: '30B (custom)',
    inputs: ['B-Rep graphs', 'Point clouds', 'Meshes'],
    outputs: ['STEP', 'Parasolid', 'Feature graphs'],
    positioning: 'The "Geometry GPT" — reads and writes 3D.',
    accent: 'cyan',
  },
  {
    name: 'Industrial Vision',
    tagline: 'Drawings, PDFs, sketches',
    scale: '12B vision-language',
    inputs: ['Engineering drawings', 'PDFs', 'Hand sketches'],
    outputs: ['Structured parameters', 'Geometric features'],
    positioning: 'The eyes of the industrial stack.',
    accent: 'violet',
  },
  {
    name: 'Planning Model',
    tagline: 'Process & NC planning',
    scale: 'Decision-transformer',
    inputs: ['Part models', 'Manufacturing specs'],
    outputs: ['Process routes', 'NC programs'],
    positioning: 'The planning network of the factory floor.',
    accent: 'indigo',
  },
  {
    name: 'Simulation Model',
    tagline: 'Physics & cost prediction',
    scale: 'Multi-physics latent',
    inputs: ['Design variants', 'Material parameters'],
    outputs: ['FEM results', 'Cost estimates', 'Defect risk'],
    positioning: 'Industrial-grade physical simulation in milliseconds.',
    accent: 'cyan',
  },
];

export const SCENARIOS = [
  {
    industry: 'Aerospace',
    description: 'Intelligent design and manufacturing optimization for complex structural components in titanium and high-temperature alloys.',
    icon: 'Rocket',
    accent: 'from-indigo-500/20 to-violet-500/10',
  },
  {
    industry: 'Automotive',
    description: 'DFM analysis and cost optimization across full vehicle part portfolios, from powertrain to chassis and body-in-white.',
    icon: 'Car',
    accent: 'from-cyan-500/20 to-indigo-500/10',
  },
  {
    industry: 'Mold & Tooling',
    description: 'Automated mold design, gate placement, cooling circuit optimization and process planning for high-volume tooling.',
    icon: 'Box',
    accent: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    industry: 'Consumer Electronics',
    description: 'Rapid design iteration and instant quoting for precision structural parts — from concept to DFM in minutes.',
    icon: 'Smartphone',
    accent: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    industry: 'Industrial Machinery',
    description: 'Intelligent production of general mechanical parts with adaptive process planning across mixed CNC fleets.',
    icon: 'Cog',
    accent: 'from-indigo-500/20 to-cyan-500/10',
  },
  {
    industry: 'Medical Devices',
    description: 'High-precision design and manufacturing for surgical instruments, implants and regulated medical components.',
    icon: 'HeartPulse',
    accent: 'from-rose-500/15 to-violet-500/10',
  },
];

export const ABOUT_CONTENT = {
  eyebrow: 'About AIMADES',
  title: 'Born from Nanyang Technological University.',
  description:
    'AIMADES is an AI research company headquartered in Singapore, staffed by a core team from NTU with decades of combined industrial domain expertise and leadership experience at top global AI labs. Our mission is to build the cognitive layer for the world\'s physical production.',
  highlights: [
    { value: 'NTU', label: 'Core Research Roots' },
    { value: '10+', label: 'Years of Industrial Depth' },
    { value: '3', label: 'Continents Served' },
    { value: '24/7', label: 'Engineering Partner Network' },
  ],
};

export const CTA_CONTENT = {
  title: 'Begin the next era of intelligent manufacturing.',
  subtitle:
    'Experience MADES today. From first sketch to production-ready G-code, in one model.',
  primaryCta: 'Start Free Trial',
  secondaryCta: 'Talk to Sales',
};

export const TRUSTED_BY = [
  'Nanyang Technological University',
  'Singapore Economic Development Board',
  'Advanced Remanufacturing and Technology Centre',
  'National Additive Manufacturing Centre',
  'Agency for Science, Technology and Research',
  'Singapore Manufacturing Federation',
];

export const navigation = [
  { label: 'Product', href: '/#product' },
  { label: 'Research', href: '/research' },
  { label: 'Docs', href: '/docs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const productLinks = [
  { label: 'World Model', href: '/#product', description: 'Meet MADES, the Industrial World Model' },
  { label: 'Architecture', href: '/#architecture', description: 'Six layers of industrial reasoning' },
  { label: 'Foundation Models', href: '/#models', description: 'Specialist models for design & make' },
  { label: 'Scenarios', href: '/#scenarios', description: 'Where MADES ships today' },
  { label: 'Console', href: '/dashboard', description: 'Your MADES workspace' },
];

export const resourceLinks = [
  { label: 'Documentation', href: '/docs', description: 'Guides, API references & SDKs' },
  { label: 'Research Papers', href: '/research', description: 'Latest publications & benchmarks' },
  { label: 'Partners', href: '/partners', description: 'Technology & integrations' },
  { label: 'News & Updates', href: '/news', description: 'Product launches & announcements' },
  { label: 'Security', href: '/privacy', description: 'Trust, safety & compliance' },
];
