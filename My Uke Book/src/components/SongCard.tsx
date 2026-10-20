import Link from "next/link";
import { Music } from "lucide-react";
import type { Song } from "@/data/mockSongs";

export default function SongCard({ song }: { song: Song }) {
  return (
    <Link
      href={`/songs/${song.id}`}
      className="flex items-center gap-3 rounded-2xl border border-sage-300 bg-white p-4 shadow-sm transition hover:border-forest-600 hover:shadow-md"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-forest-700">
        <Music aria-hidden className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-forest-900">{song.title}</span>
        <span className="block truncate text-sm text-ink/70">
          {song.artist ?? "Unknown artist"}
        </span>
      </span>
      {song.key && (
        <span className="shrink-0 rounded-full bg-forest-50 px-2.5 py-1 text-xs font-medium text-forest-700">
          Key: {song.key}
        </span>
      )}
    </Link>
  );
}
