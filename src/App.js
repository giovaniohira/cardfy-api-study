import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './assets/components/Card';
import Search from './assets/components/Search';
import Footer from './assets/components/Footer';

function App() {
  const [trackInfo, setTrackInfo] = useState(null);
  const [url, setUrl] = useState('');

  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const { data } = await axios.post(
          'https://accounts.spotify.com/api/token',
          null,
          {
            headers: {
              Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`
            },
            params: {
              grant_type: 'client_credentials'
            }
          }
        );
        localStorage.setItem('spotifyToken', data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const fetchTrackInfo = async () => {
    try {
      const trackId = url.split('/').pop().split('?')[0];
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('spotifyToken')}`
        }
      });
      const data = await response.json();
      setTrackInfo(data);
      localStorage.setItem('savedTrackInfo', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching track info:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTrackInfo();
  };

  return (
    <div className="App">
      <Search url={url} setUrl={setUrl} onclick={handleSubmit} />
      {trackInfo && <Card 
        songname={trackInfo.name} 
        authorname={trackInfo.artists.map(artist => artist.name).join(', ')}
        artwork={trackInfo.album.images[0].url} 
        totaltime={trackInfo.duration_ms}
      />}
      <Footer />
    </div>
  );
}

export default App;
