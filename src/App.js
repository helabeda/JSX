import './App.css';
import imageInSrc from "./imageInSrc.jpg";
import "./style.css"
function App() {
  return (
    <div className="App">
    <div style={{ border: "solid 1px red", maxWidth: "100vw" }}>
      <h1 className="title red">
        Hela ABEDA
      </h1>
      <br />
      <img width={300} height={240} src= {imageInSrc} alt="imageInSrc"/>
      <br />
       <img width={300} height={240}  src="/imageInPublic.jpg" alt="imageInPublic"/>
    </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
