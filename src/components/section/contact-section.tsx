import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const { LinkedIn, email } = DATA.contact.social;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
        <div className="flex gap-3">
          <a
            href={LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border bg-primary px-5 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            <LinkedIn.icon className="size-4" />
            LinkedIn
          </a>
          <a
            href={email.url}
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            <email.icon className="size-4" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

