import type { NextConfig } from "next";

// The site moved from babyowlpartner.com to owletpartners.com. Both domains are
// still attached to the same deployment, so the old host is redirected here
// rather than at the DNS level. Matching on `host` leaves owletpartners.com and
// *.vercel.app preview hosts untouched.
const LEGACY_HOSTS = ["babyowlpartner.com", "www.babyowlpartner.com"];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://owletpartners.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
