import React, {useState} from "react";
import './createTrick.css'

const createTrick = ({ addTrick }) => {
  const [name, setName] = useState('');
  const [stance, setStance] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');


  return (
    <form className="create-trick" onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name of Trick'
        value={name}
        onChange={(event) => setName (event.target.value)}
      />
      <select value={stance} onChange={(event) => setStance(event.target.value)}>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <select value={obstacle} onChange={(event) => setObstacle(event.target.value)}>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="rail">Rail</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
      </select>
      <input
        type='text'
        placeholder="Link to Tutorial"
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      />
      <button type="submit">SEND IT</button>
    </form>
  );
};

export default createTrick;