export type Project = {
  title: string;
  description: string;
  status: 'Live' | 'In progress' | 'Private' | 'Case study';
  tech: string[];
  preview: {
    label: string;
    metric: string;
    type: 'dashboard' | 'workflow' | 'analytics';
  };
  image?: {
    src: string;
    alt: string;
  };
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Plan B Academy Website',
    description:
      'Built and improved internal dashboard flows to help teams review operational data faster and with clearer context.',
    status: 'Live',
    tech: ['Frontend', 'Backend APIs', 'Data Views'],
    preview: {
      label: 'Global E-learning platform',
      metric: 'Faster review flow',
      type: 'dashboard',
    },
    // Add a real screenshot later, for example:
    // image: {
    //   src: '/projects/operations-dashboard.png',
    //   alt: 'Operations dashboard feature preview',
    // },
    image: {
      src: '/projects/pbnmap.png',
      alt: 'Operations dashboard feature preview',
    },
    featured: true,
  },
  {
    title: 'Workflow Automation Feature',
    description:
      'Contributed to workflow features that reduced repetitive manual steps and made business processes easier to track.',
    status: 'Private',
    tech: ['JavaScript', 'Backend Logic', 'Process Automation'],
    preview: {
      label: 'Business workflow',
      metric: 'Less manual work',
      type: 'workflow',
    },
    featured: true,
  },
  {
    title: 'Data Analysis & Reporting Feature',
    description:
      'Helped transform raw information into useful reports, filters, and summaries for better decision making.',
    status: 'Private',
    tech: ['Python', 'SQL', 'Data Analysis'],
    preview: {
      label: 'Reporting module',
      metric: 'Clearer insights',
      type: 'analytics',
    },
    featured: true,
  },
];

export const experiments = [
  {
    title: 'Interactive UI ideas',
    description:
      'Small interface concepts, motion tests, and component explorations that help sharpen frontend decisions.',
  },
  {
    title: 'Bitcoin learning notes',
    description:
      'Technical notes and experiments around Bitcoin, open protocols, self-custody, and useful web tooling.',
  },
  {
    title: 'AI-assisted workflows',
    description:
      'Practical ways to use AI as a coding partner for research, debugging, automation, and better documentation.',
  },
];
