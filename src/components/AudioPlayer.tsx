"use client";
import { useState, useEffect, useRef } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useAudioStore } from "@/hooks/useAudio";

interface AudioPlayerProps {
  songId: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ songId }) => {
  const songData = useAudioStore((state) => state.songData);
  const setPlaying = useAudioStore((state) => state.setPlaying);
  const addSong = useAudioStore((state) => state.addSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!songData.some((song) => song.songId === songId)) {
      addSong({ songId, isPlaying: false });
    }
  }, [songId, songData, addSong]);

  const playMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      setPlaying(songId);
    } else {
      setPlaying(songId);
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const currentSong = songData.find((song) => song.songId === songId);
    setIsPlaying(currentSong?.isPlaying || false);
  }, [songData, songId]);

  useEffect(() => {
    const handlePause = () => setIsPlaying(false);
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", handlePause);
      audio.addEventListener("pause", handlePause);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", handlePause);
        audio.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  return (
    <div>
      <button
        onClick={playMusic}
        className="inline-flex items-center justify-center px-2 p-2 rounded-full bg-violet-700/20"
      >
        {isPlaying ? (
          <PauseIcon className="h-6 w-6 text-purple-500" />
        ) : (
          <PlayIcon className="h-6 w-6 text-purple-500" />
        )}
      </button>
      <audio ref={audioRef} src={`music.mp3`} />
    </div>
  );
};
