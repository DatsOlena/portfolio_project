import { SectionHeader } from '@/components/SectionHeader'

const teamworkCards = [
    {
        frontTitle: 'Clear Communication',
        frontText: 'I keep goals, blockers, and progress visible so the whole team can move faster.',
        backTitle: 'How I do it',
        backText:
            'I share context early, ask focused questions, and document decisions to reduce handoff friction.',
    },
    {
        frontTitle: 'Ownership Mindset',
        frontText: 'I treat features end-to-end, from UX details to performance and maintainability.',
        backTitle: 'Team impact',
        backText:
            'This helps teammates rely on predictable delivery, fewer regressions, and cleaner collaboration.',
    },
    {
        frontTitle: 'Constructive Feedback',
        frontText: 'I value direct, respectful feedback loops during planning, reviews, and retros.',
        backTitle: 'Working style',
        backText:
            'I focus on solutions, align quickly on trade-offs, and keep shared quality standards high.',
    },
]


export const Teamwork = () => {
    return (
        <section id="teamwork" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    label="Teamwork"
                    title="Collaboration "
                    titleItalic="is the key to success."
                    subtitle="I believe in the power of collaboration to build great products."
                    position="right"
                />

                <div className="grid md:grid-cols-3 gap-7">
                    {teamworkCards.map((card, idx) => (
                        <article
                            key={card.frontTitle}
                            className="group h-80 [perspective:1200px] animate-fade-in reveal-on-scroll"
                            style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                        >
                            <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 glass rounded-3xl border border-primary/25 p-7 card-hover-lift shadow-[0_12px_32px_rgba(15,23,42,0.18)] [backface-visibility:hidden]">
                                    <span className="text-xs font-medium tracking-wider uppercase text-primary">
                                        Team Value
                                    </span>
                                    <h3 className="text-[1.65rem] font-semibold mt-4 leading-tight">{card.frontTitle}</h3>
                                    <p className="text-muted-foreground mt-5 leading-relaxed">{card.frontText}</p>
                                </div>

                                <div className="absolute inset-0 glass rounded-3xl border border-primary/35 p-7 shadow-[0_12px_32px_rgba(15,23,42,0.18)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <span className="text-xs font-medium tracking-wider uppercase text-primary">
                                        In Practice
                                    </span>
                                    <h3 className="text-[1.65rem] font-semibold mt-4 leading-tight">{card.backTitle}</h3>
                                    <p className="text-muted-foreground mt-5 leading-relaxed">{card.backText}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}