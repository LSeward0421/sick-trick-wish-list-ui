import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchAllTricks } from '../../apiCalls';

const App = () => {
   const [tricks, setTricks] = useState([]);

   useEffect(() => {
    const getTricks = async () => {
      const data = await fetchAllTricks();
      setTricks(data);
    }
    getTricks();
  }, []);

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }


export default App;