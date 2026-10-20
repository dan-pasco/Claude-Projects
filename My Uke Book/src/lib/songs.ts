import { mockSongs, type Song } from "@/data/mockSongs";

const LIST_SIZE = 5;

export function getSongById(id: string): Song | undefined {
  return mockSongs.find((song) => song.id === id);
}

export function getRecentlyAdded(songs: Song[] = mockSongs, limit = LIST_SIZE): Song[] {
  return [...songs]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

export function getRecentlyViewed(songs: Song[] = mockSongs, limit = LIST_SIZE): Song[] {
  return songs
    .filter((song) => song.lastViewedAt)
    .sort((a, b) => b.lastViewedAt!.localeCompare(a.lastViewedAt!))
    .slice(0, limit);
}

export function searchSongs(query: string, songs: Song[] = mockSongs): Song[] {
  const q = query.trim().toLowerCase();
  if (!q) return songs;
  return songs.filter(
    (song) =>
      song.title.toLowerCase().includes(q) ||
      (song.artist?.toLowerCase().includes(q) ?? false),
  );
}
