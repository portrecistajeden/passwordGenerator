import './App.css';
import Generator from './components/generator';
import Result from './components/result';

function App() {
  return (
    <div className="App">
        <h1 className='title'>Password generator</h1>
      <Generator/>

      <Result/>
    </div>
  );
}

export default App;
