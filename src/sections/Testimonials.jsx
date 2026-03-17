import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Olena made an impressive transition into frontend development and quickly became a key contributor. Her analytical mindset, fast learning ability, and positive energy had a real impact on the team.",
    author: "Pascal F.",
    role: "Senior Azure Cloud Architect",
  },
  {
    quote:
      "Olena settled into the team incredibly fast and handled multiple tasks like an absolute professional. She consistently delivered high-quality results and always went the extra mile.",
    author: "Eva G.",
    role: "Senior PMM, Screening Eagle Technologies",
  },
  {
    quote:
      "Olena combines strong technical skills with creativity and attention to detail. Her proactive attitude and collaborative mindset make her a valuable asset to any development team.",
    author: "Ainoa N.",
    role: "Creative Designer | UX/UI",
  },
  {
    quote:
      "She demonstrated strong frontend expertise and a clear ability to translate business needs into intuitive interfaces. Her code was clean, reliable, and delivered on time even under tight deadlines.",
    author: "Gurvinder S.",
    role: "Technical Lead",
  },
  {
    quote:
      "Olena consistently showed ownership, speed, and precision while maintaining exceptional quality. Her contributions had a real impact on product experience and team dynamics.",
    author: "Jan S.",
    role: "Chief Technology Officer",
  },
  {
    quote:
      "Her speed, attention to detail, and willingness to support others made her a strong contributor within the digital marketing team.",
    author: "Karolina P.",
    role: "Senior Marketing Specialist",
  },
  {
    quote:
      "Olena has an exceptional ability to translate design concepts into pixel-perfect responsive interfaces. She communicates clearly, collaborates well, and delivers quality work on time.",
    author: "Juan R.",
    role: "Senior Graphic Designer",
  },
  {
    quote:
      "Her determination, consistency, and eye for user experience stood out during our frontend studies. She is collaborative, thoughtful, and passionate about development.",
    author: "Yevhen B.",
    role: "Frontend Engineer",
  },
];


export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-soft-pulse"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in reveal-on-scroll"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 reveal-on-scroll text-secondary-foreground"
          >
            Perspectives from teammates and partners on how{" "}
            <span
              className="font-serif italic 
            font-normal text-foreground"
            >
              I work, build, and contribute to projects.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 reveal-on-scroll card-hover-lift">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-soft-pulse">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};