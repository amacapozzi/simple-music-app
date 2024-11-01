import { create } from "zustand";

interface MusicData {
  isPlaying: boolean;
  songId: string;
}

type Params = {
  songData: MusicData[];
};

type Action = {
  setPlaying: (songId: string) => void;
  addSong: (song: MusicData) => void;
};

export const useAudioStore = create<Params & Action>((set) => ({
  songData: [],

  addSong: (song: MusicData) =>
    set((state) => ({
      songData: [...state.songData, song],
    })),

  setPlaying: (songId: string) =>
    set((state) => ({
      songData: state.songData.map((song) =>
        song.songId === songId
          ? { ...song, isPlaying: true }
          : { ...song, isPlaying: false }
      ),
    })),
}));
