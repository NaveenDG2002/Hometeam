import {
  AppWindow,
  Layers,
  Lightbulb,
  MonitorSmartphone,
  SearchCheck,
  FlaskConical,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  id: string
  title: string
  icon: LucideIcon
  /** Short description, used on the Home overview and as "what it is" on the Services page. */
  summary: string
  /** The business problem this service addresses. */
  problem: string
  /** Who typically needs it. */
  audience: string
  /** How Hometeam approaches it. */
  approach: string
  /** Who delivers it. Keep consistent with the agreed service division. */
  deliveredBy: string
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: MonitorSmartphone,
    summary:
      'Clear, well-structured websites that present your business properly and make it easy for customers to get in touch.',
    problem:
      'A website that is outdated, hard to use or unclear about what the business does costs trust and enquiries.',
    audience:
      'Startups, SMEs and organisations launching a first website or replacing one that no longer fits the business.',
    approach:
      'We agree the purpose and content first, then design and build a responsive, accessible website that you can maintain and grow.',
    deliveredBy: 'Delivered by Hometeam',
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    icon: AppWindow,
    summary:
      'Browser-based applications for portals, workflows and internal tools that a standard website cannot handle.',
    problem:
      'Teams that rely on spreadsheets, email and manual steps lose time and make avoidable errors.',
    audience:
      'Businesses that need user accounts, data handling, dashboards or process automation in the browser.',
    approach:
      'Hometeam scopes the requirements and recommends the right approach. Where the application is complex or needs custom engineering, DcodeCloud, a separate specialist business, builds it under its own agreement.',
    deliveredBy: 'Scoped by Hometeam, built by DcodeCloud when complex',
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    icon: SearchCheck,
    summary:
      'Understanding how your business operates, where it loses time, and what a better setup needs to achieve.',
    problem:
      'Technology projects often start with a solution before the real problem is understood, which leads to rework and wasted budget.',
    audience:
      'Owners and managers who know something is not working but are not yet sure what to change or build.',
    approach:
      'We review how the business works, gather requirements from the people involved, and document clear priorities before any build decision is made.',
    deliveredBy: 'Delivered by Hometeam',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    icon: Lightbulb,
    summary:
      'Practical, independent guidance on technology choices, planning and the next step for your business.',
    problem:
      'Choosing between tools, platforms and approaches is difficult without technical context, and a wrong choice is expensive to undo.',
    audience:
      'Businesses planning a new system, reviewing their current tools or deciding how to approach a digital project.',
    approach:
      'We explain the options in plain language, weigh them against your goals and budget, and recommend a realistic path forward.',
    deliveredBy: 'Delivered by Hometeam',
  },
  {
    id: 'technology-research',
    title: 'Technology Research',
    icon: FlaskConical,
    summary:
      'Focused research into tools, platforms and approaches so decisions are based on evidence rather than assumption.',
    problem:
      'Teams often lack the time to properly compare options, so decisions are made on habit, sales pitches or incomplete information.',
    audience:
      'Businesses evaluating software, platforms or a new technical direction before committing to it.',
    approach:
      'We define the question, compare suitable options against your requirements, and summarise findings with a clear recommendation.',
    deliveredBy: 'Delivered by Hometeam',
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    icon: Layers,
    summary:
      'End-to-end planning of the digital solution a business needs, from the first requirement through to delivery.',
    problem:
      'Digital projects can stall when the plan, the people and the technology are not aligned from the start.',
    audience:
      'Businesses that want one point of contact to plan a solution and bring in the right delivery team.',
    approach:
      'Hometeam plans the solution and stays your first point of contact. Delivery is handled by Hometeam or, when the scope needs it, by DcodeCloud under a separate agreement.',
    deliveredBy: 'Planned by Hometeam, delivered by Hometeam or DcodeCloud depending on scope',
  },
]
