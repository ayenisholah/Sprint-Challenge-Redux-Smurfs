import React from 'react';
import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';

function SmurfView(props) {
  return (
    <div>
      <Smurfs />
      <SmurfForm />
    </div>
  );
}

export default SmurfView;