import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react'

function App() {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }
  const[message, setmessage] = useState("");
  const handleSubmit =  async (e) => {
    e.preventDefault();

    if (!image) {
      setmessage("please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
  
    try {
      const response = await fetch("http://localhost:8080/backend/upload.php", {
        method: 'POST',
        body: formData,
      });
      const res = await response.json();
      setmessage(res.message || res.error);
     
    } catch (error) {
      setmessage("Failed to connect")
   
    }
 
  }

  
  return (
    <div>
      <h1>
        Input board image
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange}/>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      
    </div>
  );
}

export default App;
