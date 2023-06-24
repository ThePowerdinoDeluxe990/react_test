
import './App.css'

function App() {
  let audio:HTMLAudioElement = new Audio("sounds/sound.mp3")
  const Alerta =()=>{
    audio.play()
    alert("Hola pablo")
  }
  return(
    <article style= {{display:'flex', alignItems: 'center'}}>
      <header>
        <img alt= "Hola pablo" src="https://avatars.cloudflare.steamstatic.com/570a7985f2af11ac113d888174e68689a061caa8_full.jpg"></img>
        <div>
          <strong>Hola Pablo</strong>
          <div>
          <span>@Ricardo</span>
          </div>
          <p className="nombre">Ricardo te amo</p>
          
          <div className="but">
          <button onClick={Alerta} >
          Seguir
        </button>
        </div>
        </div>
      </header>
      <aside>
        
      </aside>
    </article>
  )

  
}

export default App
