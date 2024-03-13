import React, { useState } from 'react';
import './Timer.css';

const Timer = (props) => {
    const [currentTime, setCurrentTime] = useState(0);

    function formatMilliseconds(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
      
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setCurrentTime(newValue);
    };
    
    return (
        <div className='wrapper'>
            <input 
                type='range'
                min={0}
                max={props.totaltime}
                value={currentTime}
                onChange={handleSliderChange}
            />
            <div className='time'>
                <span className='current'>{formatMilliseconds(currentTime)}</span>
                <span className='total'>{formatMilliseconds(props.totaltime)}</span>
            </div>
        </div>
    );
};

export default Timer;