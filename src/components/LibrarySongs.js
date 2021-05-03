const LibrarySong = (props) => {
  const songSelectSongHandler = async () => {
    const selectedSong = props.song
    await props.setCurrentSong(selectedSong);
  };
  return (
    <div className="library-song" onClick={songSelectSongHandler}>
      <img src={props.song.cover} alt={props.song.name}></img>
      <div className="song-description">
        <h3>{props.song.name}</h3>
        <h4>{props.song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
