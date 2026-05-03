export default function SideLeft() {
  const links = [
    { href: 'https://github.com', icon: '⌘' },
    { href: 'https://linkedin.com', icon: '⌘' },
    { href: 'https://twitter.com', icon: '✕' },
  ];

  return (
    <div className="side-element side-left">
      <div className="side-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="side-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.href}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
