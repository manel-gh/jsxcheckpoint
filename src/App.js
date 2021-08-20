import A from './A.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
    <div style={{border:'solid(1px)black',maxWidth:'100vw'}}>

<h1 className="titleRed">Your name here</h1>

<img src={A.jpg} className="image" alt="first" />

<img src="/B.jpg" alt='second' />

</div>

<video src="myVideo.mp4" type="video/mp4" />
  
    </div>
  );
}

export default App;
