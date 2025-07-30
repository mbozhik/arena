import {ShieldAlert, ServerCrash, ShieldCheck, GlobeLock, Network, Radar, MonitorCog, Speech, Radio, FileLock2, Shredder, ScanEye, FolderLock, Handshake, MonitorSpeaker} from 'lucide-react'

export const SERVICES = [
  {
    title: 'Vulnerability Assessment and Penetration Testing',
    description: 'Identify, analyze, and exploit vulnerabilities across your applications, networks, or infrastructure to assess real-world risks.',
    information: 'Combines automated scanning with manual testing to identify exploitable weaknesses and provide prioritized remediation guidance.',
    icon: ShieldAlert,
  },
  {
    title: 'Web Application Security Testing',
    description: 'Secure your web platforms against OWASP Top 10 vulnerabilities and other business logic flaws.',
    information: 'Comprehensive testing for injection flaws, broken authentication, and business logic vulnerabilities in web applications and APIs.',
    icon: ServerCrash,
  },
  {
    title: 'Mobile Application Security Testing',
    description: 'Perform security assessments of Android and iOS apps, including static and dynamic analysis.',
    information: 'Identifies data storage risks, insecure communications, and anti-tampering weaknesses in mobile applications across platforms.',
    icon: ShieldCheck,
  },
  {
    title: 'Network Security Assessment',
    description: 'Evaluate the security of your network infrastructure, including firewalls, routers, and other network devices.',
    information: 'Analyzes firewall configurations, access controls, and network segmentation to identify security gaps and hardening opportunities.',
    icon: GlobeLock,
  },
  {
    title: 'Cloud Security Assessment',
    description: 'Audit your cloud environments (AWS, Azure, GCP) to ensure compliance, visibility, and security best practices.',
    information: 'Evaluates IAM policies, data storage security, and logging configurations across major cloud platforms against best practices.',
    icon: Network,
  },
  {
    title: 'Social Media & OSINT Monitoring',
    description: 'Detect fake profiles, impersonation, threats, and sensitive leaks through open-source intelligence.',
    information: 'Continuous monitoring of social platforms and dark web for brand impersonations, data leaks, and potential threats.',
    icon: Radar,
  },
  {
    title: 'Red Teaming & Adversary Simulation',
    description: "Simulate real-world attacks to test your organization's detection and response capabilities.",
    information: 'Real-world attack simulations that test people, processes, and technology across multiple attack vectors.',
    icon: MonitorCog,
  },
  {
    title: 'Security Awareness Training',
    description: 'Educate employees through phishing simulations, workshops, and threat understanding sessions.',
    information: 'Interactive training program combining simulated phishing with security best practices education for all staff levels.',
    icon: Speech,
  },
  {
    title: 'Incident Response & Forensics',
    description: 'React fast to cyber incidents with expert-led digital forensics and root-cause analysis.',
    information: 'Rapid containment, evidence preservation, and root cause analysis for security breaches and cyber incidents.',
    icon: Radio,
  },
  {
    title: 'Endpoint Security & EDR Implementation',
    description: 'Protect workstations and servers with advanced detection, response, and endpoint hardening solutions.',
    information: 'Deploys behavior-based threat detection and response capabilities across all enterprise endpoints.',
    icon: FileLock2,
  },
  {
    title: 'Firewall & Perimeter Security Configuration',
    description: 'Set up and review firewalls, IDS/IPS, and security appliances for effective network protection.',
    information: 'Optimizes firewall rulesets and intrusion prevention systems to block malicious traffic effectively.',
    icon: Shredder,
  },
  {
    title: 'Dark Web Monitoring',
    description: 'Detect compromised credentials, leaks, and threats emerging from the dark web ecosystem.',
    information: 'Continuous scanning of dark web markets and forums for compromised credentials and organizational data.',
    icon: ScanEye,
  },
  {
    title: 'Security Compliance & Policy Design',
    description: 'Assist in achieving ISO 27001, GDPR, NIST, or other regulatory frameworks.',
    information: 'Develops compliant security policies and controls aligned with major regulatory standards and frameworks.',
    icon: FolderLock,
  },
  {
    title: 'Cybersecurity Consultancy',
    description: 'Strategic advisory for CISOs, IT heads, or startup founders to design and improve cybersecurity infrastructure.',
    information: 'Provides risk-based security strategy and architecture guidance tailored to organizational needs.',
    icon: Handshake,
  },
  {
    title: 'Managed Security Services (MSSP)',
    description: 'Ongoing threat monitoring, detection, and mitigation with 24/7 SOC support.',
    information: '24/7 security monitoring and incident response delivered by experienced SOC analysts and threat hunters.',
    icon: MonitorSpeaker,
  },
]
