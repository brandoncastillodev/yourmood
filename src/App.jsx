import { useState } from "react";
import "./styles/app.css";
import { discos } from "./utils/canciones";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [eng, setEng] = useState(true);
  const [respuesta , setRespuesta] = useState("");
  const [album, setAlbum] = useState({ name: "", link: "" });
  const options = {
    playerVars: {
      autoplay: 1,
      mute: 1
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let random;
    const DISCOSXMOOD = discos;

    random = Math.floor(Math.random() * DISCOSXMOOD[respuesta].length);
    setAlbum(DISCOSXMOOD[respuesta][random]);
  }
  
  const onReady = (event) =>{
    event.target.playVideo()
  }

  return (
    <div className="all">
      <Analytics />
      <h1>
        <u>Your Mood</u>
      </h1>
      <div className="consigna">
        {eng ? <p> How you're feeling today? </p>:
        <p>¿Cómo se encuentra hoy? </p>}
        {eng ? 
          <ol>
            <li>happy</li>
            <li>sad</li>
            <li>angry</li>
            <li>scared</li>
            <li>anxious</li>
            <li>bored</li>
            <li>euphoric</li>
            <li>calm</li>
            <li>confused</li>
            <li>thoughtful</li>
          </ol>
          :<ol>
            <li>feliz</li>
            <li>triste</li>
            <li>enojado</li>
            <li>miedoso</li>
            <li>ansioso</li>
            <li>aburrido</li>
            <li>eufórico</li>
            <li>calmado</li>
            <li>confundido</li>
            <li>reflexivo</li>
          </ol>}
      </div>
      <form onSubmit={handleSubmit}>
        {eng ?
        <label htmlFor="form">Enter an option:</label>:
         <label htmlFor="form">Ingrese una opción:</label>}
        <input
          type="number"
          id="form"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          required
          min={1}
          max={10}
        ></input>
       {eng? <button>Send</button>:<button>Enviar</button>}
      </form>
      {album.link && (
        <div className="video">
          {/* <YouTube videoId={album.link} options={options} onReady={onReady}/> */}
          <iframe
            src={`https://www.youtube.com/embed/${album.link}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="frame"
          ></iframe>
        </div>
      )}
      <div className="space-black"></div>
      <footer>
        {/* <button onClick={()=>{setEng(!eng)}}>{eng ? "Español" : "English"}</button> */}
        {eng? 
        <p>Made with ❤️ by Brandon 🏰</p>:
        <p>Hecho con ❤️ por Brandon 🏰</p>}

      </footer>      
    </div>
  );
}

export default App;
