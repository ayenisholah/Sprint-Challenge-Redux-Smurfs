import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.height} cm tall</p>
      <p>{props.smurf.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>DELETE</button>
    </div>
  );
};



export default Smurf;