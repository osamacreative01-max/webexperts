export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const ticker = [
  "Graphic designing",
  "Web Design & Development",
  "E-commerce Website",
  "Digital Marketing",
  "Search Engine Optimization",
  "Web Hosting",
];

export const services: [string, string][] = [
  ["Web design & development", "Custom, responsive sites"],
  ["Logo & graphic design", "Identity that sticks"],
  ["Ecommerce", "Stores that sell 24/7"],
  ["Social media marketing", "Content and campaigns"],
  ["Mobile apps", "iOS and Android"],
  ["SEO", "Rank higher on Google"],
  ["Web hosting", "Fast and secure"],
  ["Brand strategy", "One look, everywhere"],
];

export const serviceDetails = [
  {
    title: "Web design & development",
    text: "Fast, accessible and mobile-first websites built on modern stacks — from one-page sites to large custom platforms.",
    points: ["UI/UX design in Figma", "Next.js & WordPress builds", "Speed & Core Web Vitals", "Maintenance & support"],
    tone: "t1",
  },
  {
    title: "Logo & graphic design",
    text: "Logos, brand kits and print collateral that make your business recognisable everywhere it shows up.",
    points: ["Logo & brand identity", "Business cards & stationery", "Social media creatives", "Packaging & print"],
    tone: "t2",
  },
  {
    title: "E-commerce",
    text: "Online stores that are easy to manage and easy to buy from, with secure payments and clean checkout flows.",
    points: ["Shopify & WooCommerce", "Payment gateway setup", "Product & inventory setup", "Conversion-focused UX"],
    tone: "t3",
  },
  {
    title: "Digital marketing",
    text: "Paid and organic campaigns that put your brand in front of the right people and bring measurable leads.",
    points: ["Meta & Google Ads", "Content calendars", "Email marketing", "Monthly reporting"],
    tone: "t4",
  },
  {
    title: "Search engine optimization",
    text: "Technical and content SEO that helps your pages rank for the searches your customers actually make.",
    points: ["Technical audits", "On-page optimization", "Local SEO (Google Business)", "Link building"],
    tone: "t1",
  },
  {
    title: "Web hosting",
    text: "Secure, monitored hosting with daily backups so your site stays fast and online around the clock.",
    points: ["SSD cloud hosting", "Free SSL & backups", "99.9% uptime", "24/7 monitoring"],
    tone: "t2",
  },
];

export const stats: [string, string][] = [
  ["15+", "countries served"],
  ["24/7", "support, any time zone"],
  ["100%", "mobile-compatible builds"],
];

export const features = ["Timely Solutions", "Flexible Service Offering", "24/7 Support"];

export const clients = [
  "Gradience", "Heavenly Temptations", "Temeliora", "Spankights", "Maderistika", "Rex Ilara",
  "Rooted & Brown", "The VIS Group", "Tokyo Brew", "Different Escape", "Creative Condo", "The Good Bear",
];

export const tiles: [string, string][] = [
  ["Web design & development", "t1"], ["Logo & graphic design", "t2"], ["Ecommerce", "t2 wide2"], ["Social media marketing", "t2"],
  ["Mobile apps", "t2"], ["SEO", "t3"], ["Web hosting", "t3"], ["Brand strategy", "t4 wide2"],
];

export const projects = [
  { title: "Tokyo Brew", cat: "E-commerce", note: "Storefront, checkout & subscriptions", tone: "p1" },
  { title: "Rooted & Brown", cat: "Web design", note: "Marketing site with CMS", tone: "p2" },
  { title: "The VIS Group", cat: "Branding", note: "Identity, stationery & guidelines", tone: "p3" },
  { title: "Spankights", cat: "E-commerce", note: "Shopify build + product photography", tone: "p4" },
  { title: "Gradience", cat: "Marketing", note: "Lead-gen funnels & Google Ads", tone: "p2" },
  { title: "Maderistika", cat: "Branding", note: "Packaging & social kit", tone: "p3" },
  { title: "Temeliora", cat: "Web design", note: "SaaS product website", tone: "p1" },
  { title: "The Good Bear", cat: "Marketing", note: "SEO & content program", tone: "p4" },
  { title: "Creative Condo", cat: "Web design", note: "Portfolio & booking flow", tone: "p2" },
];

export const projectCats = ["All", "Web design", "E-commerce", "Branding", "Marketing"];

export const posts = [
  { title: "How long should a business website really take?", cat: "Web design", date: "12 Sep 2026", excerpt: "A realistic timeline for design, content, development and launch — and where projects usually lose weeks.", tone: "b1" },
  { title: "SEO in 2026: what still moves the needle", cat: "SEO", date: "28 Aug 2026", excerpt: "Technical health, helpful content and local signals — the three things that keep earning rankings.", tone: "b2" },
  { title: "Shopify vs WooCommerce for Pakistani stores", cat: "E-commerce", date: "09 Aug 2026", excerpt: "Cost, maintenance and payment gateways compared for small and mid-size online shops.", tone: "b3" },
  { title: "5 signs your website is costing you customers", cat: "Conversion", date: "21 Jul 2026", excerpt: "Slow pages, weak CTAs and confusing navigation quietly push buyers to your competitors.", tone: "b3" },
  { title: "Brand identity: more than just a logo", cat: "Branding", date: "02 Jul 2026", excerpt: "Colour, type, voice and layout rules that make a small brand look established.", tone: "b1" },
  { title: "Hosting explained: what you actually pay for", cat: "Hosting", date: "16 Jun 2026", excerpt: "SSL, backups, uptime and server location — the parts that matter when something breaks.", tone: "b2" },
];

export const process = [
  { n: "01", t: "Discovery call", d: "We learn your business, goals, audience and budget before anything is designed." },
  { n: "02", t: "Proposal & plan", d: "Scope, timeline and a fixed quote — no surprises halfway through the project." },
  { n: "03", t: "Design & build", d: "Wireframes to final UI, then development with regular preview links and revisions." },
  { n: "04", t: "Launch & support", d: "Testing, launch, training and ongoing maintenance whenever you need us." },
];

export const values = [
  { t: "Timely delivery", d: "Deadlines we commit to are deadlines we keep, with weekly progress updates." },
  { t: "Transparent pricing", d: "Fixed quotes up front — you always know what you are paying for." },
  { t: "Design that works", d: "Every layout decision serves a goal: clarity, trust or conversion." },
  { t: "Long-term support", d: "We stay after launch for updates, hosting, SEO and new features." },
];

export const contact = {
  phone1: "0317 298 8586",
  phone2: "0331 217 6504",
  phoneHref1: "tel:03172988586",
  phoneHref2: "tel:03312176504",
  whatsapp: "https://wa.me/923172988586",
  email: "info@webexperts.com.pk",
  address: "Karachi, Pakistan",
  hours: "Mon - Sat, 10am - 7pm (PKT)",
};
