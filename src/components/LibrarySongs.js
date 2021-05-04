const LibrarySong = ({ songs, setCurrentSong, audioRef, song, isPlaying }) => {
  const songSelectHandler = async () => {
    const selectedSong = song;
    await setCurrentSong(selectedSong);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
