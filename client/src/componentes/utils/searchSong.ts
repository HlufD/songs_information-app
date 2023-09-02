import { Song } from "../../types/SongType";

export function searchSong(songs: Song[], searchTerm: string) {
  const filterdSong = songs.filter((song)=>{    
    return song.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.album.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  })
    
  return filterdSong;
}
