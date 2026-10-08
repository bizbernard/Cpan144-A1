import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Study Desk', description: 'CPAN 144 Assignment 1' };

// Root layout: the Navbar is shown on every page, page content goes in <main>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar
          links={[
            { href: '/', label: 'Home' },
            { href: '/counter', label: 'Sessions' },
            { href: '/tasks', label: 'Tasks' },
          ]}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
