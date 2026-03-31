import { SectionHeader } from '@/components/SectionHeader'


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
            </div>
        </section>
    )
}