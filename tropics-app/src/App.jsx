import { useState } from 'react';

const tropicData = {
  cancer: {
    name: 'Tropic of Cancer',
    description:
      'The Tropic of Cancer is the circle marking the latitude 23.5 degrees north of the equator. It is the northernmost point where the sun can be directly overhead.'
  },
  capricorn: {
    name: 'Tropic of Capricorn',
    description:
      'The Tropic of Capricorn is the circle marking the latitude 23.5 degrees south of the equator. It is the southernmost point where the sun can be directly overhead.'
  }
};

function App() {
  const [tropic, setTropic] = useState('cancer');

  const info = tropicData[tropic];

  return (
    <div className="container">
      <h1>Tropics Teaching App</h1>
      <div className="buttons">
        <button onClick={() => setTropic('cancer')}>Tropic of Cancer</button>
        <button onClick={() => setTropic('capricorn')}>Tropic of Capricorn</button>
      </div>
      <section className="info">
        <h2>{info.name}</h2>
        <p>{info.description}</p>
      </section>
    </div>
  );
}

export default App;
