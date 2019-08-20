import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';



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
    const [bpm, setBpm] = useState<number>(112)
    const [songs, setSong] = useState<ISong[]>([])
    const [favorites, setFavorite] = useState<IFavorite[]>([])

    useEffect(() => {
        console.log('firing data fetch')
          axios.get(`/bpm/song/${bpm}`)
          .then((res) => {
            console.log('hit this part')
            console.log(res.data)
            setSong(res.data)
          })
      }, [bpm])
    
    
      var songData = songs.map((song, id) => {
        return(
         <div>
          <p>Song Title: {song.song_title} Tempo: {song.tempo}</p>
          </div>
      )})
     
    
      
      return (
        <div className="App">
            <form>
            <input type="text" name="bpm" placeholder="Search by Tempo" ></input>
            <input type='submit' value='Search' className="btn btn-warning" />
            </form>
          {songData}
        </div>
      );
    }

    
    export default SongList;
    

