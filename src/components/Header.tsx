import { Card } from "@/components/ui/card";
import { PlayCircle, Star } from "lucide-react";

export default function Component() {
  return (
    <div className="w-full max-w-md my-6">
      <h2 className="mb-4 text-xl font-semibold text-purple-600">
        Recent broadcasts
      </h2>
      <Card className="group relative overflow-hidden rounded-xl">
        <div className="relative aspect-[4/3] w-full">
          <img
            alt="Broadcast thumbnail"
            className="object-cover"
            src="https://media.senscritique.com/media/000004795056/source_big/let_it_be.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-10 left-3 right-3 flex items-center justify-between">
            <h3 className="font-semibold text-white ">VIKASHINI</h3>
            <PlayCircle className="h-10 w-10 text-white opacity-80 transition-opacity group-hover:opacity-100" />
          </div>

          <div className="absolute bottom-7 left-3 flex items-center gap-0.5 mt-2">
            {Array.from([1, 2, 3, 4, 5]).map((i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-1 text-sm text-white">5</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
