import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Song } from "@/data/mockSongs";
import SongCard from "./SongCard";

interface SongSectionProps {
  title: string;
  songs: Song[];
  emptyMessage: string;
  viewAllHref?: string;
}

export default function SongSection({ title, songs, emptyMessage, viewAllHref }: SongSectionProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-forest-900">{title}</h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-1 rounded-md text-sm font-medium text-forest-700 hover:underline"
          >
            View all <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        )}
      </div>
      {songs.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sage-300 bg-white/60 p-6 text-center text-ink/70">
          {emptyMessage}
        </p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {songs.map((song) => (
            <li key={song.id}>
              <SongCard song={song} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
