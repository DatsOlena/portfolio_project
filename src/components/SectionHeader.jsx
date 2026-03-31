export const SectionHeader = ({
  label,
  title,
  titleItalic,
  subtitle,
  position = 'center',
}) => (
  <div
    className={`max-w-3xl mb-16 ${position === 'center' ? 'text-center mx-auto' : position === 'left' ? 'text-left mr-auto' : 'text-right ml-auto'}`}
  >
    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in reveal-on-scroll">
      {label}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6 animate-fade-in animation-delay-100 reveal-on-scroll text-secondary-foreground">
      {title}
      {titleItalic && (
        <span className="font-serif italic font-normal text-foreground">
          {titleItalic}
        </span>
      )}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground animate-fade-in animation-delay-200 reveal-on-scroll">
        {subtitle}
      </p>
    )}
  </div>
)
