import React, {useState, useEffect} from 'react';
import './App.css';
import openNewAuthWindow from './openWindow';
import axios from 'axios';
import { number } from 'prop-types';
import SongList from './songList';
import FavoriteList from './favoriteList';
// import router from 'react-router';
//import { Router } from 'express';



// We had to defin this because TS needs to know 
// the shape of our user object
export interface IUser {
  _id: string;
  spotifyId: number;
  playlist: string;
  song: Array<string>;
}

export interface IPlaylist {
  _id: string;
  playlistId: string;
  name: string;
}

export interface ISong {
  _id: string;
  song_title: string;
  artist: string;
  tempo: number;
  
}

export interface IFavorite{
  _id: string;
  song_title: string;
  artist: string;
  tempo: number;
}
  

// A functional component must be of type React.FC
const App: React.FC = () => {
  // useState can be used as a generic 
  const [user, setUser] = useState<IUser>({} as IUser)
  const [playlists, setPlaylist] = useState<IPlaylist[]>([])
  const [favorites, setFavorite] = useState<IFavorite[]>([])
 
  useEffect(() => {
    console.log('firing data fetch')
    if (Object.keys(user).length) {
      axios.get(`/api/${user.spotifyId}/playlists`)
      .then((res) => {
        setPlaylist(res.data)
      })
    }
  }, [user])

  
  
  function handleLogin(e: React.MouseEvent): void {
    e.preventDefault()
    var message: Promise<IUser> = openNewAuthWindow('/auth/spotify')
    message.then(res => {
      setUser(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  var userData = Object.keys(user).length === 0 ? <p>No user</p> : <p>Welcome: {user.spotifyId}</p>
  // var playlistData = playlists.map((playlist, id) => {
  //   return (
  //       <p> {playlist.name}</p>
  //   )
  // }) 
  
    
  
  return (
    <div className="App">
      <a onClick={handleLogin} href="/auth/spotify">Login to Spotify</a>
      {userData}
      <SongList/>
      <FavoriteList/>
    </div>
  );
}

export default App;
