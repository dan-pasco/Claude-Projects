import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

export default function PlaceholderPage({ title, message, children }: PlaceholderPageProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-forest-900">{title}</h1>
      <p className="max-w-prose text-ink/70">{message}</p>
      {children}
      <Link href="/" className="inline-block rounded-md font-medium text-forest-700 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
