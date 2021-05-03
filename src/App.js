import React, {useState, useRef} from 'react';
import './style/style.scss';
// import components
import Song from './component/Song';
import Player from './component/Player';
import Library from './component/Library';
import Nav from './component/Nav';

import data from './data';



function App() {
  // ref
  const audioRef = useRef(null);
  // states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler =(e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate %age
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage:animation,});
};
const songEndHandler = async ()=> {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if(isPlaying) audioRef.current.play();

}

  return (
    <div className={`App ${libraryStatus ? 'library-active': '' }`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player
        setSongs={setSongs}
        songs={songs}
        setCurrentSong={setCurrentSong} 
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
