import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>
        Input the image
      </h1>
      <form>
        <input type="file" accept="image/*"/>
        <button type="submit">Upload</button>
      </form>
      
    </div>
  );
}

export default App;
