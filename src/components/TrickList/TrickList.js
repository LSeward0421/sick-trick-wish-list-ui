import React from "react";
import './TrickList.css'

const capWords = (string) => {
  return string.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  })
}

const TrickList = ({ tricks }) => {
  const renderedTricks = tricks.map((trick) => {
    return <div key={trick.id} className='trick'>
      <h3>{capWords(trick.name)}</h3>
      <p>Obstacle: {capWords(trick.obstacle)}</p>
      <p>Link to Tutorial:</p>
        <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">
          {trick.tutorial}
        </a>
    </div>
  })
  
  return (
    <div className= "tricks-container">
      {renderedTricks}
    </div>
  )
}

export default TrickList;