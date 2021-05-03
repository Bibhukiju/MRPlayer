import { useState } from "react";
// import styles
import "./Styles/app.scss";

//adding components
import Player from "./components/Player";
import Songs from "./components/Song";

// import Utils
import data from "./utils";

function App() {
  // states
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Songs currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
