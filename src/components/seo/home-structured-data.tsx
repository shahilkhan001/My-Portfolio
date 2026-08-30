import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/site";

export function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profile.name,
        url: siteConfig.url,
        email: `mailto:${profile.email}`,
        jobTitle: profile.headline,
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: [
          "Software Engineering",
          "Full-Stack Web Development",
          "Android Development",
          "API Integration",
          "AI-Enabled Software",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
