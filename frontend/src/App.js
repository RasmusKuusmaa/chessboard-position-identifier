import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react'

function App() {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0])
  }
  return (
    <div>
      <h1>
        Input board image
      </h1>
      <form >
        <input type="file" accept="image/*" onChange={handleImageChange}/>
        <button type="submit">Upload</button>
      </form>
      
    </div>
  );
}

export default App;
