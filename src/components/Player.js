import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { playAudio } from "../utils";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
}) => {
  //useEffect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);
  //Event handler
  const playSongHandler = async () => {
    if (isPlaying) {
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const draghandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 1) {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === -1) {
      if (currentIndex - (1 % songs.length) === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            min={0}
            max={songInfo.duration ? getTime(songInfo.duration) : "0:00"}
            value={songInfo.currentTime}
            onChange={draghandler}
            type="range"
          ></input>
           <div className="animate-track"></div>
        </div>
       
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler(-1)}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => {
            skipTrackHandler(1);
          }}
        />
      </div>
    </div>
  );
};
export default Player;
