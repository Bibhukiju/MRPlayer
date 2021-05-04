import LibrarySong from "./LibrarySongs";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h1>Library</h1>
      {songs.map((song) => {
        return (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        );
      })}
    </div>
  );
};
export default Library;
