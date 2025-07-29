import {ShieldAlert, ServerCrash, ShieldCheck, GlobeLock, Network, Radar, MonitorCog, Speech, Radio, FileLock2, Shredder, ScanEye, FolderLock, Handshake, MonitorSpeaker} from 'lucide-react'

import {GRADIENT} from '~/UI/Button'

import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import {H2, H3, P} from '~/UI/Typography'
import Background from '~/Global/Background'

const SERVICES = [
  {
    title: 'Vulnerability Assessment and Penetration Testing',
    description: 'Identify, analyze, and exploit vulnerabilities across your applications, networks, or infrastructure to assess real-world risks.',
    icon: ShieldAlert,
  },
  {
    title: 'Web Application Security Testing',
    description: 'Secure your web platforms against OWASP Top 10 vulnerabilities and other business logic flaws.',
    icon: ServerCrash,
  },
  {
    title: 'Mobile Application Security Testing',
    description: 'Perform security assessments of Android and iOS apps, including static and dynamic analysis.',
    icon: ShieldCheck,
  },
  {
    title: 'Network Security Assessment',
    description: 'Evaluate the security of your network infrastructure, including firewalls, routers, and other network devices.',
    icon: GlobeLock,
  },
  {
    title: 'Cloud Security Assessment',
    description: 'Audit your cloud environments (AWS, Azure, GCP) to ensure compliance, visibility, and security best practices.',
    icon: Network,
  },
  {
    title: 'Social Media & OSINT Monitoring',
    description: 'Detect fake profiles, impersonation, threats, and sensitive leaks through open-source intelligence.',
    icon: Radar,
  },
  {
    title: 'Red Teaming & Adversary Simulation',
    description: "Simulate real-world attacks to test your organization's detection and response capabilities.",
    icon: MonitorCog,
  },
  {
    title: 'Security Awareness Training',
    description: 'Educate employees through phishing simulations, workshops, and threat understanding sessions.',
    icon: Speech,
  },
  {
    title: 'Incident Response & Forensics',
    description: 'React fast to cyber incidents with expert-led digital forensics and root-cause analysis.',
    icon: Radio,
  },
  {
    title: 'Endpoint Security & EDR Implementation',
    description: 'Protect workstations and servers with advanced detection, response, and endpoint hardening solutions.',
    icon: FileLock2,
  },
  {
    title: 'Firewall & Perimeter Security Configuration',
    description: 'Set up and review firewalls, IDS/IPS, and security appliances for effective network protection.',
    icon: Shredder,
  },
  {
    title: 'Dark Web Monitoring',
    description: 'Detect compromised credentials, leaks, and threats emerging from the dark web ecosystem.',
    icon: ScanEye,
  },
  {
    title: 'Security Compliance & Policy Design',
    description: 'Assist in achieving ISO 27001, GDPR, NIST, or other regulatory frameworks.',
    icon: FolderLock,
  },
  {
    title: 'Cybersecurity Consultancy',
    description: 'Strategic advisory for CISOs, IT heads, or startup founders to design and improve cybersecurity infrastructure.',
    icon: Handshake,
  },
  {
    title: 'Managed Security Services (MSSP)',
    description: 'Ongoing threat monitoring, detection, and mitigation with 24/7 SOC support.',
    icon: MonitorSpeaker,
  },
]

export default function ServicesPage() {
  return (
    <Container className="sm:space-y-16">
      <div className="space-y-6 sm:space-y-4 text-center">
        <H2 className="text-purple-highlight">Our Cyber Security Services</H2>

        <P className="max-w-[85ch] mx-auto">Arena Web Security is the best place to do Cyber Security & Ethical Hacking, OSINT, Linux and Freelancing Course. To become a cyber hero it is your first step. We design the entire course from basic to advance. We focus hardly on our learners.</P>
      </div>

      <div className="grid grid-cols-4 xl:grid-cols-3 sm:grid-cols-1 gap-x-6 gap-y-14 sm:gap-y-10">
        {SERVICES.map((service) => (
          <div key={service.title} className={cn('relative px-6 pt-14 pb-8 sm:px-4 sm:pt-10 sm:pb-6', 'flex flex-col h-full', 'bg-white rounded-2xl text-center')}>
            <div className={cn('absolute inset-0 h-[1px] w-full', 'grid place-items-center')}>
              <div className={cn('-mt-10 xl:-mt-8 sm:-mt-6 p-4 sm:p-2.5 bg-white rounded-full', GRADIENT)}>
                <service.icon className="size-10 xl:size-8 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <H3 className="text-purple-border font-medium mb-6">{service.title}</H3>

            <P className="text-purple-course font-normal flex-1">{service.description}</P>
          </div>
        ))}
      </div>

      <Background page="others" />
    </Container>
  )
}
