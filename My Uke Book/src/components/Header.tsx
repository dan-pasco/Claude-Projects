import Link from "next/link";
import { Library, Music, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-forest-800 text-cream">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 rounded-md text-xl font-bold">
          <Music aria-hidden className="h-6 w-6 text-sage-300" />
          my Uke Book
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/library"
            className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium hover:bg-forest-700"
          >
            <Library aria-hidden className="h-4 w-4" />
            My library
          </Link>
          <Link
            href="/add-song"
            data-filled
            className="flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-forest-800 hover:bg-cream-dark"
          >
            <Plus aria-hidden className="h-4 w-4" />
            Add a song
          </Link>
        </nav>
      </div>
    </header>
  );
}
