import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/schedule", "Schedule"],
  ["/case-studies", "Case Studies"],
  ["/blog", "Blog"],
  ["/careers", "Careers"],
  ["/resources", "Resources"],
  ["/search", "Search"],
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-blue-700">
          CloudEdge
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="hover:text-blue-700">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
