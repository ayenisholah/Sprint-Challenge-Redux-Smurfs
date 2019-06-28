import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/actionCreators';

const SmurfForm = (props) => {
  const onAddSmurf = (event) => {
    const nameInput = event.target['name'];
    const ageInput = event.target['age'];
    const heightInput = event.target['height']
    event.preventDefault();

    const newSmurf = {
      name: nameInput.value,
      age: ageInput.value,
      height: heightInput.value
    };

    nameInput.value
      && ageInput.value
      && heightInput.value
      && props.addSmurf(newSmurf);

    nameInput.value = '';
    ageInput.value = '';
    heightInput.value = '';
  }

  return (
    <div className='form-container'>
      <form onSubmit={onAddSmurf} className='smurf-form'>
        <input name="name" placeholder="Name" />
        <input name="age" placeholder="Age" />
        <input name="height" placeholder="Height" />
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);