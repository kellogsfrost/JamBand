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

  const FavoriteList: React.FC = () => {
    const [favorites, setFavorite] = useState<IFavorite[]>([])
    const [songs, setSong] = useState<ISong[]>([])

    // set isbn search parameters
 
    useEffect(() => {
        axios.get(`/song`)
        .then((res) => {
          setFavorite(res.data)
        })
      })

    function deleteSong(favorites: any){
      axios.delete(`/song/${favorites._id}`, {
        }).then( () => {
            axios.get(`/song`).then( (response) =>{
                setFavorite(response.data)
                console.log('deleted')
            })
        })
    }
      
    
      var favoriteData = favorites.map((favorite, id) => {
        return(
         <div>
          <p>Song Title: {favorite.song_title} Tempo: {favorite.tempo}</p>
          <button className="delete" onClick={()=> deleteSong(favorite)}>Delete Song</button>
          </div>
      )})
     
    
      
      return (
        <div className="App">
          {favoriteData}
        </div>
      );
    }

    
    export default FavoriteList;