import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <ClassCounter />
      <FunctionalCounter />
    </div>
  );
}

export default App;
