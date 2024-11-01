"use client";
import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { AudioPlayer } from "./AudioPlayer";

interface SongProps {
  songImage: string;
  id: string;
  songName: string;
  songStars: number;
  calification: number;
}

export const SongCard: React.FC<SongProps> = ({
  songImage,
  songName,
  id,
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
          {Array.from({ length: songStars }).map((i, star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-1 text-sm text-muted-foreground">
            {calification}
          </span>
        </div>
      </div>
      <AudioPlayer songId={id} />
    </Card>
  );
};
