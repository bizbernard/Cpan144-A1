'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// STATE: `open` controls the menu on small screens. PROPS: `links` array.
export default function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="nav">
      <span className="brand">Study Desk</span>
      {/* EVENT: click toggles the menu */}
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'links open' : 'links'}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
            className={pathname === l.href ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
