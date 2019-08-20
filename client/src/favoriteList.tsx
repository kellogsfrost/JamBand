import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';




export interface IFavorite{
  _id: string;
  song_title: string;
  artist: string;
  tempo: number;
}

  const FavoriteList: React.FC = () => {
    const [favorites, setFavorite] = useState<IFavorite[]>([])

    // set isbn search parameters
 
    useEffect(() => {
        axios.get(`/song`)
        .then((res) => {
          setFavorite(res.data)
        })
      })
    
      
    
      var favoriteData = favorites.map((favorite, id) => {
        return(
         <div>
          <p>Song Title: {favorite.song_title} Tempo: {favorite.tempo}</p>
          </div>
      )})
     
    
      
      return (
        <div className="App">
          {favoriteData}
        </div>
      );
    }

    
    export default FavoriteList;