import React, { useState } from 'react'

// Webpack will load the audio files
import click1 from './click1.wav';
import click2 from './click2.wav';
import { number } from 'prop-types';


const Metronome: React.FC = () => {
    
      const [bpm, setBpm] = useState([]);
      const [playing, setPlaying] = useState<boolean | null>(null);
      const [count, setCount] = useState(4)
    

    // Create Audio objects with the files Webpack loaded,
    // and we'll play them later.
    const click1 = new Audio(click1);
    const click2 = new Audio(click2);
  

  function playClick() {
    const [ count, bpm ] = useState();

    // The first beat will have a different sound than the others
    if(Number(count) % Number(bpm) === 0) {
      click2.play();
    } else {
      click1.play();
    }

    // Keep track of which beat we're on
    useState(){(
      count: (Number(setCount) + 1) % Number(setBpm)

    }
    } 
    
    function startStop() {
        if(playing) {
            // Stop the timer
            clearInterval(timer);
            useState({
                playing: false
            });
        } else {
            // Start a timer with the current BPM
            timer = setInterval(playClick, (60 / state.bpm) * 1000);
            useState({
                count: 0,
                playing: true
                // Play a click "immediately" (auseState finishes)
            }, playClick);
        }
    }
    
    function handleBpmChange(e: React.MouseEvent):void {
        e.preventDefault()
        const bpm = event.target.value;
        
        if(playing) {
            // Stop the old timer and start a new one
            clearInterval(timer);
            timer = setInterval(playClick, (60 / bpm) * 1000);
            
            // Set the new BPM, and reset the beat counter
            useState({
                count: 0,
                bpm
            });
        } else {
            // Otherwise just update the BPM
            useState({ bpm });
        }
        
    }
    
    
    // const [playing, bpm ] = setState();

    return (
        <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={handleBpmChange} />
        </div>
        <button onClick={startStop}>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
}





export default Metronome;


// const Metronome: React.FC = () => {
    
//       const [bpm, setBpm] = useState([])
//       const [playing, setPlaying] = useState<boolean | null>(null);
  
//       return (
//         <div className="metronome">
//           <div className="bpm-slider">
//             <div>{bpm} BPM</div>
//             <input type="range" min="60" max="240" value={bpm} />
//           </div>
//           <button>{playing ? 'Stop' : 'Start'}</button>
//         </div>
//       );
//     }
  
  
  
  
  
//   export default Metronome;




