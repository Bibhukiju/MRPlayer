import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Into The past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "CYGN’s",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16061",
      id: uuidv4(),
      active: true,
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Into The past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      artist: "CYGN’s",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15223",
      id: uuidv4(),
      active: false,
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Into The past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "CYGN’s",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16061",
      id: uuidv4(),
      active: false,
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Into The past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      artist: "CYGN’s",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15223",
      id: uuidv4(),
      active: false,
      color: ["#205950", "#2ab3bf"],
    },
  ];
}

export default chillHop;
