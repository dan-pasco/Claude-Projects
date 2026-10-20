import PlaceholderPage from "@/components/PlaceholderPage";
import SongSection from "@/components/SongSection";
import { mockSongs } from "@/data/mockSongs";

export default function LibraryPage() {
  return (
    <PlaceholderPage
      title="My library"
      message="A full library view is coming soon. For now, here are all the sample songs."
    >
      <SongSection title="All songs" songs={mockSongs} emptyMessage="Your library is empty." />
    </PlaceholderPage>
  );
}
