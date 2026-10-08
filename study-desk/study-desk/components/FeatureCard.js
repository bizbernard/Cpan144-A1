import Link from 'next/link';

// Presentational component: everything comes in through props
export default function FeatureCard({ title, text, href }) {
  return (
    <Link href={href} className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </Link>
  );
}
