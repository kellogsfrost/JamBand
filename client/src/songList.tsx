import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { response } from 'express';
import router from 'react-router';


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
    
  
  const SongList: React.FC = () => {
    // useState can be used as a generic 
    const [bpm, setBpm] = useState<any>(112)
    const [songs, setSong] = useState<ISong[]>([])
    const [favorites, setFavorite] = useState<IFavorite[]>([])

    // set isbn search parameters
  function handleBpmChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBpm(e.target.value)
  }

    function handleBpmSubmit(e: React.FormEvent) {
         e.preventDefault()
          axios.get(`/bpm/song/${bpm}`)
          .then((res) => {
            console.log('hit this part')
            console.log(res.data)
            setSong(res.data)
          })
      }

    function saveSong(song: any){
        axios.post(`/song`, {
            song_title: song.song_title,
            tempo: song.tempo
        }).then( () => {
            axios.get(`/song`).then( (response) =>{
                setFavorite(response.data)
                console.log('saved')
            })
        })
    }
    
    
      var songData = songs.map((song, id) => {
        return(
         <div className="SongData">
          <p>Song Title: {song.song_title} Tempo: {song.tempo}</p>
          <button className="save" onClick={()=> saveSong(song)}>Save Song</button>
          </div>
      )})
     
    
      
      return (
        <div className="bpm">
            <form onSubmit={handleBpmSubmit}>
            <input type="text" name="bpm" placeholder="Search by Tempo" value={bpm} onChange={handleBpmChange}></input>
            <input type='submit' value='Search' className="btn btn-warning" />
            </form>
            <div className="songList">
            <h1 className="Songs">Songs with tempo:{bpm}</h1>
                {songData}
            </div>
        </div>
      );
    }

    
    export default SongList;
    

