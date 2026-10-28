import PlaceholderPage from "@/components/PlaceholderPage";
import { getArtistLabel, getSongById } from "@/lib/songs";

export default async function SongPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const song = getSongById(id);

  if (!song) {
    return <PlaceholderPage title="Song not found" message="We couldn't find that song." />;
  }

  return (
    <PlaceholderPage
      title={song.title}
      message={`${getArtistLabel(song)}${song.key ? ` · Key: ${song.key}` : ""}. Chords and lyrics are coming soon.`}
    />
  );
}
