// Single source of truth for portfolio content.
export const RESUME_URL = 'https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/DwayneOtero_Resume_Jul26.pdf';
export const PHOTO_URL = 'https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/images/profilePicture.jpg';
export const EMAIL = 'daa.otero.2024@computing.smu.edu.sg';
export const LINKEDIN = 'https://www.linkedin.com/in/dwayne-arnold-otero/';
export const GITHUB = 'https://github.com/oreoolis';

// name, logo file in public/logos (null = monogram), core = on résumé, match = stack names it covers
const S = (name, logo, core = false, match = [name], abbr) => ({
  name, logo, core, match, abbr: abbr || name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase(),
});

export const skillGroups = [
  { label: 'Languages', items: [S('Java', 'java', true), S('Python', 'python', true), S('TypeScript', 'typescript', true), S('JavaScript', 'javascript', true), S('PHP', 'php', true), S('SQL', null, true, ['SQL', 'PostgreSQL', 'MySQL'], 'SQL')] },
  { label: 'Frontend', items: [S('React', 'react', true), S('Next.js', 'next-js', true), S('Vue.js', 'vue-js', true), S('HTML5', 'html5', true), S('CSS3', 'css3', true), S('Tailwind CSS', 'tailwind-css')] },
  { label: 'Backend & messaging', items: [S('Spring Boot', 'spring-boot', true), S('FastAPI', 'fastapi', true), S('Flask', 'flask', true), S('Express.js', 'express-js'), S('RabbitMQ', 'rabbitmq', true), S('Temporal', 'temporal', true), S('Kong', 'kong'), S('Keycloak', 'keycloak'), S('Stripe', 'stripe')] },
  { label: 'Data', items: [S('PostgreSQL', 'postgresql', true), S('Supabase', 'supabase', true), S('Amazon RDS', 'amazon-rds', true), S('phpMyAdmin', 'phpmyadmin', true), S('DynamoDB', 'amazon-dynamodb')] },
  { label: 'Cloud & DevOps', items: [S('AWS', 'amazon-web-services', true, ['AWS', 'AWS Bedrock', 'AWS Lambda', 'Amazon Cognito', 'Amazon S3', 'DynamoDB', 'Amazon RDS']), S('AWS Bedrock', 'aws-bedrock'), S('Amazon S3', 'amazon-s3'), S('Terraform', 'terraform', true), S('Docker', 'docker', true), S('GitHub Actions', 'github-actions', true), S('Git', 'git'), S('Prometheus', 'prometheus'), S('Grafana', 'grafana')] },
  { label: 'AI, testing & tools', items: [S('OpenAI', 'openai'), S('Gemini', 'google-gemini'), S('OpenCV', 'opencv'), S('Playwright', 'playwright'), S('Vitest', 'vitest'), S('JUnit 5', 'junit5'), S('Power BI', null, false, undefined, 'BI'), S('Jira', 'jira')] },
];
skillGroups.forEach(g => g.items.forEach(s => { s.cat = g.label; }));
export const allSkills = skillGroups.flatMap(g => g.items);

export const education = [
  { school: 'Singapore Management University', degree: 'B.Sc. Software Engineering', dates: 'Aug 2024 — Present', badge: 'Year 3',
    points: ['Coursework: full-stack web development, databases, object-oriented programming, data structures & algorithms, IT solution architecture.',
      'Hackathons: TikTok TechJam 2026 Finalist (LQAM); SimplifyNext Agentic AI Hackathon 2026 2nd Runner-Up.'] },
  { school: 'Temasek Polytechnic', degree: 'Diploma in Information Technology', dates: 'Apr 2019 — Apr 2022',
    points: ['Coursework: software testing assurance, full-stack web development, mobile app development, data mining & analysis.'] },
];

export const roles = [
  { title: 'Teaching Assistant', org: 'Singapore Management University', dates: 'Aug 2026 — Present', now: true,
    points: ['Deliver technical demonstrations on frontend development and testing practices for IS216 Web Application Development II (AY26/27 Term 1).', 'Support students with their queries during in-class exercises.'],
    stack: ['Frontend', 'Testing', 'Teaching'] },
  { title: 'Student Assistant', org: 'SMU Academy', dates: 'Jan 2026 — Present', now: true,
    points: ['Built Python and Playwright automation scripts that cut weekly administrative data-entry work by 3 hours.', 'Produce weekly Power BI dashboards visualising postgraduate course feedback for internal faculty review.'],
    stack: ['Python', 'Playwright', 'Power BI'] },
  { title: 'Full Stack Engineer Intern', org: 'X0PA.Ai Pte. Ltd.', dates: 'Sep 2021 — Feb 2022',
    points: ['Built and maintained front-end features for clients’ SaaS products with React, Git and PostgreSQL, and maintained APIs in Express.js.', 'Contributed to sprint meetings in an agile lifecycle and collaborated with other developers through Jira.'],
    stack: ['React', 'Express.js', 'PostgreSQL', 'Git', 'Jira'] },
];

export const featured = {
  name: 'MyWay', kind: 'Agentic career-planning system · 2026', award: '2nd Runner-Up · SimplifyNext Agentic AI Hackathon 2026',
  blurb: 'A serverless career-navigation platform that orchestrates five Amazon Bedrock agents through a resumable pipeline, grounding salary and role advice in live Singapore labour-market data instead of model guesses.',
  points: ['RAG pipeline with Titan Embeddings V2 semantically re-ranks live Singapore labour-market data (MyCareersFuture Skills Framework API) against the resume vector.',
    'CI/CD on GitHub Actions with Trivy scanning the Terraform IaC and gitleaks guarding against secret leaks.'],
  stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB', 'Amazon S3', 'Terraform', 'GitHub Actions', 'Vitest'],
  repo: 'https://github.com/oreoolis/meong-MyWay',
  metrics: [
    { value: '5', label: 'LLM agents orchestrated through a resumable, checkpointed pipeline' },
    { value: '$0.174', label: 'hard cost ceiling per run, enforced by per-agent token limits' },
    { value: '−28%', label: 'time to first usable screen (69s → ~50s) by prefetching the slowest agent' },
  ],
};

export const projects = [
  { name: 'Liu Qi Agent Management', kind: 'Agent middleware platform', context: 'TikTok TechJam 2026', award: 'Finalist · TikTok TechJam 2026',
    blurb: 'Multi-agent orchestration middleware that governs autonomous agent workspaces with sequential, round-robin and supervisor dispatch, bounded steps and timeouts.',
    points: ['Vitest unit and end-to-end tests cover orchestration routing, authorization denial paths and container execution.'],
    stack: ['React', 'TypeScript', 'Docker', 'PostgreSQL', 'Vitest'], links: [{ label: 'Code', href: 'https://github.com/TheMajoris/liuqitechjam' }] },
  { name: 'Brainrot Learning Platform', kind: 'Learning management system', context: 'SMU CS203 · 2026',
    blurb: 'Microservices LMS with Keycloak OAuth and an asynchronous AI content-generation pipeline: OpenAI and Gemini workers pick up jobs from RabbitMQ.',
    points: ['JUnit 5 suites across the Spring Boot services run in GitHub Actions CI with JaCoCo coverage reporting.'],
    stack: ['React', 'TypeScript', 'Spring Boot', 'Java', 'Python', 'Keycloak', 'RabbitMQ', 'Docker', 'Amazon RDS', 'Amazon S3', 'OpenAI', 'Gemini', 'JUnit 5', 'GitHub Actions'],
    links: [{ label: 'Code', href: 'https://github.com/Joseph-LohYeKai/CS203-Project' }] },
  { name: 'Just Meal Savers', kind: 'Event-driven meal marketplace', context: 'SMU IS213 · 2026',
    blurb: 'Discounted-meal marketplace: Python and Node.js microservices behind Kong Gateway, with Stripe payments and loyalty points coordinated by durable Temporal workflows.',
    points: ['Every service runs in Docker, with Prometheus and Grafana for real-time monitoring.'],
    stack: ['React', 'TypeScript', 'FastAPI', 'Flask', 'Python', 'Kong', 'RabbitMQ', 'Temporal', 'Stripe', 'Docker', 'Amazon RDS', 'Prometheus', 'Grafana'],
    links: [{ label: 'Code', href: 'https://github.com/Nicholas1811/is213-backend' }] },
  { name: 'Facial Recognition Attendance', kind: 'Computer-vision attendance system', context: 'SMU CS102 · 2025',
    blurb: 'OpenCV face detection and recognition (static, live and multi-face) against embeddings stored in AWS S3, automating batch attendance with late and absence marking.',
    points: ['Exports PDF and CSV reports and sends absence alerts to students.'],
    stack: ['Spring Boot', 'Java', 'OpenCV', 'Amazon S3', 'Docker'], links: [{ label: 'Code', href: 'https://github.com/Darren322/cs102-opencv' }] },
];

export const awards = [
  { title: 'AWS Certified Cloud Practitioner', result: 'Certified', meta: 'Amazon Web Services · Exam CLF-C02', logo: 'amazon-web-services',
    detail: 'Foundational AWS certification covering cloud concepts, core services, security, architecture and pricing.' },
  { title: 'SimplifyNext Agentic AI Hackathon', result: '2nd Runner-Up', meta: '2026 · Project: MyWay',
    detail: 'Built MyWay, a serverless multi-agent career-planning system on Amazon Bedrock that grounds advice in live Singapore labour-market data.',
    href: 'https://github.com/oreoolis/meong-MyWay', linkLabel: 'View the MyWay repository' },
  { title: 'TikTok TechJam', result: 'Finalist', meta: '2026 · Project: Liu Qi Agent Management (LQAM)',
    detail: 'Reached the finals with LQAM, a multi-agent orchestration middleware that governs autonomous agent workspaces with sequential, round-robin and supervisor dispatch.',
    href: 'https://github.com/TheMajoris/liuqitechjam', linkLabel: 'View the LQAM repository' },
  { title: 'Global Startup Hackathon Challenge', result: 'Finalist', meta: '2021 – 2022 · Most Innovative Solution',
    detail: 'Finalist, recognised for the Most Innovative Solution (Sep 2021 – Mar 2022).',
    href: 'https://www.credential.net/f9799c14-4e32-4045-afd3-13d44cba5855', linkLabel: 'Verify credential' },
  { title: 'SCDF-Dell Lifesavers’ Innovation Challenge', result: 'Participant', meta: '2025',
    detail: 'Proposed an application and business system that helps Singaporean civilians learn first aid and apply it in real situations.',
    href: 'https://reactportfolio-bucket.s3.ap-southeast-1.amazonaws.com/documents/SCDFHackathon/CODEREDY_SCDF+Competition.pdf', linkLabel: 'Research & development document' },
];

// Where a skill shows up: every role and project whose stack matches.
const everything = [
  ...roles.map(r => ({ stack: r.stack, kind: 'Role', name: `${r.title}, ${r.org}`, meta: r.dates, isProject: false })),
  { stack: featured.stack, kind: 'Project', name: featured.name, meta: featured.kind, isProject: true },
  ...projects.map(p => ({ stack: p.stack, kind: 'Project', name: p.name, meta: p.kind, isProject: true })),
];
export const usesSkill = (skill, stack) => !!skill && skill.match.some(m => stack.includes(m));
export const usedFor = skill => everything.filter(e => usesSkill(skill, e.stack));
