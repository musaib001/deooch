import type { NextConfig } from "next";

// Tawk.to live-chat origins that the CSP must allow.
const TAWK = "https://embed.tawk.to https://*.tawk.to";

// Dev needs 'unsafe-eval' for React Fast Refresh / debugging; production stays strict.
const evalSrc = process.env.NODE_ENV === "production" ? "" : " 'unsafe-eval'";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // ponytail: CSP sized for a static marketing site + Tawk.to chat; add more origins here if you add embeds
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${evalSrc} ${TAWK}`,
      `style-src 'self' 'unsafe-inline' ${TAWK}`,
      `img-src 'self' data: https: ${TAWK}`,
      `font-src 'self' data: ${TAWK}`,
      `connect-src 'self' ${TAWK} wss://*.tawk.to`,
      `frame-src 'self' ${TAWK}`,
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
