import { PlayIcon, Star } from "lucide-react";
import { Card } from "./ui/card";

interface SongProps {
  songImage: string;
  songName: string;
  songStars: number;
  calification: number;
}

export const SongCard: React.FC<SongProps> = ({
  songImage,
  songName,
  songStars,
  calification,
}) => {
  return (
    <Card className="flex items-center gap-3 p-3">
      <div className="relative h-16 w-16 flex-shrink-0">
        <img
          alt={`${songName}'s broadcast thumbnail`}
          className="rounded-md object-cover w-max h-full"
          src={songImage}
        />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="font-medium">{songName}</h3>
        <p className="text-sm text-muted-foreground">Some song description</p>
        <div className="flex items-center gap-0.5">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span className="ml-1 text-sm text-muted-foreground">
            {calification}
          </span>
        </div>
      </div>
      <button className="inline-flex itemns-center justify-center px-2 p-2 rounded-full bg-violet-700/20">
        <PlayIcon className="h-6 w-6  text-purple-500" />
      </button>
    </Card>
  );
};
