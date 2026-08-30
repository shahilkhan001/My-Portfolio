import type { Metadata } from "next";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { Section } from "@/components/ui/section";
import { resumeConfig } from "@/lib/resume";

const resumeDescription =
  "Resume of Mohammad Shahil Khan, a software engineer and full-stack developer with work across web, Android, and AI/software evaluation.";

export const metadata: Metadata = {
  title: "Resume",
  description: resumeDescription,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume — Mohammad Shahil Khan",
    description: resumeDescription,
    url: "/resume",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Mohammad Shahil Khan",
    description: resumeDescription,
    images: ["/opengraph-image"],
  },
};

export default function ResumePage() {
  return (
    <main>
      <Section tone="page" spacing="detail">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Resume
            </p>

            <h1 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Engineering experience, selected projects, and technical capabilities.
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-ink-muted">
              A concise overview of my work across full-stack web development,
              Android applications, and software and AI evaluation.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
              Mohammad Shahil Khan
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
              Software Engineer &amp; Full-Stack Developer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              View the current resume online or download a PDF copy for a
              detailed overview of my experience, projects, education, and
              technical skills.
            </p>

            <dl className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              <div className="bg-surface p-5 sm:p-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  Primary Focus
                </dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-ink">
                  Software Engineering &amp; Full-Stack Development
                </dd>
              </div>

              <div className="bg-surface p-5 sm:p-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  Technical Range
                </dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-ink">
                  Android Development &amp; AI/API Integration
                </dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={resumeConfig.viewUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-40 flex-col justify-between rounded-md border border-border-strong bg-surface p-6 transition-colors duration-200 hover:border-ink hover:bg-surface-muted"
              >
                <div className="flex items-center justify-between">
                  <FileText
                    aria-hidden="true"
                    className="size-5 text-accent"
                    strokeWidth={1.8}
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-ink-subtle transition-colors duration-200 group-hover:text-ink"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="mt-8">
                  <p className="text-lg font-semibold tracking-[-0.025em] text-ink">
                    View Resume
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    Open the current PDF in a new tab.
                  </p>
                </div>
              </a>

              <a
                href={resumeConfig.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-40 flex-col justify-between rounded-md border border-border-strong bg-surface p-6 transition-colors duration-200 hover:border-ink hover:bg-surface-muted"
              >
                <div className="flex items-center justify-between">
                  <Download
                    aria-hidden="true"
                    className="size-5 text-accent"
                    strokeWidth={1.8}
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-ink-subtle transition-colors duration-200 group-hover:text-ink"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="mt-8">
                  <p className="text-lg font-semibold tracking-[-0.025em] text-ink">
                    Download PDF
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    Save a copy for offline review.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
