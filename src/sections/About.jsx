import { Blocks, BrainCircuit, Code2, Rocket, Users, Workflow } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

const focusAreas = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Crafting maintainable, scalable codebases that stay reliable as products grow.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Improving speed, responsiveness, and perceived smoothness across core user flows.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Partnering closely with design and engineering teams to ship clear product outcomes.',
  },
  {
    icon: Workflow,
    title: 'Systems Thinking',
    description:
      'Designing reusable UI patterns and scalable frontend architectures.',
  },
  {
    icon: Blocks,
    title: 'Product Clarity',
    description:
      'Turning complex requirements into intuitive and trustworthy experiences.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Native UX',
    description:
      'Exploring agentic interfaces that adapt to user context and behavior.',
  },
]

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-8">
            <SectionHeader
              label="About Me"
              title="Building meaningful products, "
              titleItalic="not just interfaces."
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200 reveal-on-scroll">
              <p>
                I am a frontend engineer who cares deeply about how technology
                feels to people. For me, great software is not only about clean
                architecture or performance metrics. It is about clarity, trust,
                and creating experiences that users intuitively understand.
              </p>
              <p>
                Over the past years I have worked on complex web platforms, real
                estate systems, structured multi-step workflows, and scalable
                component libraries. I enjoy transforming messy requirements into
                elegant, maintainable UI systems that teams can build on with
                confidence.
              </p>
              <p>
                My main stack revolves around React, Next.js and TypeScript, but
                my real strength lies in thinking in systems. I design reusable
                patterns, improve product flows, and bridge the gap between
                engineering logic and human behavior.
              </p>
              <p>
                Outside of coding, I continuously learn, experiment with design,
                explore new technologies, and build personal projects that
                challenge my limits. Growth is not a phase for me. It is a
                mindset.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 reveal-on-scroll card-hover-lift">
              <p className="text-lg font-medium italic text-foreground">
                My goal is simple: to create digital products that feel
                effortless to use, solid to maintain, and inspiring to build.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:pt-14">
            {focusAreas.map((item, idx) => (
              <article
                key={item.title}
                className="glass rounded-2xl p-6 animate-fade-in reveal-on-scroll card-hover-lift"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}