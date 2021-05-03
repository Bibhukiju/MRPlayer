import LibrarySong from "./LibrarySongs";

const Library = (props) => {
  return (
    <div className="library">
      <h1>Library</h1>
      {props.songs.map((song) => {
        return (
          <LibrarySong
            songs={props.songs}
            setCurrentSong={props.setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
          />
        );
      })}
    </div>
  );
};
export default Library;
