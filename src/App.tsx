import './App.css';
import collection from './music-collection.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My music collection</p>
        {collection.map(i => {
          return <p>{i.artist}: {i.title}</p>
        })}
      </header>
    </div>
  );
}

export default App;
