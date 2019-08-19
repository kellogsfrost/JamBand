import React, {useState, useEffect} from 'react';
import './App.css';
import openNewAuthWindow from './openWindow';
import axios from 'axios';

// We had to defin this because TS needs to know 
// the shape of our user object
export interface IUser {
  _id?: string;
  spotifyId: number;
  playlist: string;
  song: string;
}

export interface IPlaylist {
  name: string
}

export interface ISong{
  track: String;
  artist: String;
}

// A functional component must be of type React.FC
const App: React.FC = () => {
  // useState can be used as a generic 
  const [user, setUser] = useState<IUser>({} as IUser)
  const [playlists, setPlaylist] = useState<IPlaylist[]>([])
  const [songs, setSong] = useState<ISong>({} as ISong)

  useEffect(() => {
    console.log('firing data fetch')
    if (Object.keys(user).length) {
      axios.get(`/api/${user.spotifyId}/playlists`)
      .then((res) => {
        setPlaylist(res.data)
      })
    }
  }, [user])

  useEffect(() => {
    console.log('Grabbing songs')
      axios.get(`/bpm/song`)
      .then((res) => {
        setSong(res.data)
      })
  }, [])
  
  function handleLogin(e: React.MouseEvent): void {
    e.preventDefault()
    var message: Promise<IUser> = openNewAuthWindow('/auth/spotify')
    message.then(res => {
      setUser(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  var userData = Object.keys(user).length === 0 ? <p>No user</p> : <p> {user.spotifyId}</p>
  var playlistData = playlists.map((playlist, id) => {
    return (
        <p> {playlist.name}</p>
    )
  }) 
  var songData = Object.keys(songs).length === 0 ? <p>No song</p> : <p> {songs.track}</p>
    
  
  return (
    <div className="App">
      <a onClick={handleLogin} href="/auth/spotify">Login to Spotify</a>
      {userData}
      {playlistData}
      {songData}
    </div>
  );
}

export default App;

