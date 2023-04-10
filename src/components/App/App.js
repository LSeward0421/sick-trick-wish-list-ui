import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchAllTricks } from '../../apiCalls';
import TrickList from '../TrickList/TrickList';
import CreateTrick from '../CreateTrick/CreateTrick';

const App = () => {
   const [tricks, setTricks] = useState([]);

   useEffect(() => {
    const getTricks = async () => {
      const data = await fetchAllTricks();
      setTricks(data);
    }
    getTricks();
  }, []);

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick]);
  }

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <CreateTrick addTrick={addTrick} />
        <TrickList tricks={tricks} />
      </div>
    );
  }


export default App;