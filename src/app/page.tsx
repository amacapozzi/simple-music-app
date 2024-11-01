import { BottomNavbar } from "@/components/BottomNav";
import Header from "@/components/Header";
import { SongCard } from "@/components/SongCard";

const songsData = [
  {
    id: "A",
    songImage:
      "https://media.senscritique.com/media/000004795056/source_big/let_it_be.jpg",
    songName: "Let It Be",
    songStars: 5,
    calification: 8.5,
  },
  {
    id: "AB",
    songImage:
      "https://th.bing.com/th/id/OIP.R6pKAIcyAC1UfBeM74OSoAHaFj?rs=1&pid=ImgDetMain",
    songName: "Honestiy",
    songStars: 5,
    calification: 8.5,
  },
  {
    id: "ABC",
    songImage:
      "https://th.bing.com/th/id/OIP.42IIQVGqaUvKD4YAY2jbGAHaHa?rs=1&pid=ImgDetMain",
    songName: "Hey jude",
    songStars: 5,
    calification: 8.5,
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className="text-xl font-semibold text-purple-600">
        Broadcasts you may like
      </h2>
      <div className="grid grid-cols-1 gap-5 my-4">
        {songsData.map((song) => (
          <SongCard
            id={song.id}
            key={song.songName}
            songImage={song.songImage}
            songStars={song.songStars}
            songName={song.songName}
            calification={song.calification}
          />
        ))}
      </div>
      <footer className="py-5">
        <BottomNavbar />
      </footer>
    </main>
  );
}
