import { contact, site } from "@/content/site";

/**
 * Organization schema for search engines. Placeholder contact values are
 * omitted so we never publish bracketed placeholders as structured data.
 */
export function StructuredData() {
  const isPlaceholder = (value: string) => value.trim().startsWith("[");

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    logo: new URL("/icon.svg", site.url).toString(),
    slogan: site.tagline,
    knowsAbout: [
      "Private equity",
      "Lower middle market acquisitions",
      "Business succession planning",
    ],
  };

  if (!isPlaceholder(contact.email)) {
    schema.contactPoint = {
      "@type": "ContactPoint",
      contactType: "Investment inquiries",
      email: contact.email,
      ...(isPlaceholder(contact.phone) ? {} : { telephone: contact.phone }),
    };
  }

  if (!isPlaceholder(contact.city)) {
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: contact.city,
      addressRegion: contact.region,
    };
  }

  return (
    <script
      type="application/ld+json"
      // Content is a static object built above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
