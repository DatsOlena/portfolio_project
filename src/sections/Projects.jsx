import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: 'Livappy Real Estate Platform',
    description: 'Built modern property listing and agent interaction platform using Next.js App Router and TypeScript. Implemented reusable UI components, API-driven data flows, internationalization, and Stripe-based payment intents for promotional features.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Stripe', 'OpenAPI'],
    image: './public/projects/livappy.png',
  },
  {
    title: 'Partner Portal',
    description: 'Developed enterprise partner management dashboard with onboarding workflows, analytics, and role-based authentication. Integrated CMS-driven dynamic content and RESTful APIs for partner data and asset management.',
    tags: ['React', 'TypeScript', 'Tailwind', 'REST API', 'CMS Integration'],
    image: './public/projects/partner-portal.png',
  },
  {
    title: 'Corporate Website',
    description: 'Implemented responsive multi-language corporate website with Symfony backend integration. Built dynamic product, news, and event content delivery supported by scalable AWS infrastructure.',
    tags: ['JavaScript', 'Twig', 'SCSS', 'PHP', 'Symfony', 'AWS'],
    image: './public/projects/website.png',
  },
  {
    title: 'Tracking Time System',
    description: 'Created internal operations dashboard for employee timesheet tracking and utilization analytics. Delivered real-time reporting features, role management, and exportable analytics visualizations.',
    tags: ['JavaScript', 'Laravel', 'Chart.js', 'Blade', 'REST API'],
    image: './public/projects/ET.png',
  },
  {
    title: 'Product Master Catalog',
    description: 'Developed centralized product data management platform with lifecycle dashboards, advanced filtering, and legacy data migration. Implemented integrations for CRM and marketing systems.',
    tags: ['JavaScript', 'Laravel', 'Microservices', 'AWS', 'Data Migration'],
    image: './public/projects/FOD.png',
  },
  {
    title: 'Personal Website',
    description: 'Developed my personal website using React and Tailwind CSS. It is a simple website that showcases my projects and skills.',
    tags: ['React', 'Tailwind', 'Vite', 'TypeScript'],
    image: './public/projects/personal-project.png',
  }
];


export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Project Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Engineering
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              in Practice.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from enterprise dashboards to user-focused platforms, these projects reflect my approach to building structured, maintainable, and meaningful interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 max-w-lg"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};