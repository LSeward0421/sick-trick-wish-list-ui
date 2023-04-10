import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchAllTricks } from '../../apiCalls';
import TrickList from '../TrickList/TrickList';
import createTrick from '../CreateTrick/createTrick';

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
        <TrickList tricks={tricks} />
      </div>
    );
  }


export default App;