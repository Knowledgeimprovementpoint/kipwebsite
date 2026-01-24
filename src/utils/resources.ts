export type Resource = {
  name: string;
  description: string;
  href: string;
};

export const resources: Resource[] = [
  {
    name: "MDN Web Docs",
    description: "Authoritative reference for web platform APIs (HTML/CSS/JS).",
    href: "https://developer.mozilla.org/"
  },
  {
    name: "OWASP Top 10",
    description: "A standard awareness document for web application security risks.",
    href: "https://owasp.org/www-project-top-ten/"
  },
  {
    name: "Google Technical Writing",
    description: "Free courses to improve writing for engineering and business.",
    href: "https://developers.google.com/tech-writing"
  }
];

