import { useState, useEffect } from "react"
// import reactLogo from "./assets/react.svg"
// import Home from "./components/Home"
 import IFrameComponent from "./components/IFrameComponent"
import "./styles/main.scss"

function App() {
  const [count, setCount] = useState(0)
  const welcomeTxt: string = "Welcome Home"


  return (
    <div className='App'>
      <div className="logo-container">
        {/* <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a> */}
        <a href='https://www.billetweb.fr/files/page/thumb/adhesion-crazy-druids-2024.jpg' target='_blank'>
          <img src='https://www.billetweb.fr/files/page/thumb/adhesion-crazy-druids-2024.jpg' className='logo CrazyDruids' alt='CrazyDruids logo' />
        </a>
      </div>
{/* 
      <Home text={welcomeTxt} /> */}

      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}

      <br></br>

      {/* <div className="iframe-container" id="iframeContainer">
        <iframe src="https://www.flitch.me/iframe.php?n=1641230780" className="custom-iframe" id="iframe"></iframe>
      </div> */}

      <IFrameComponent />
    </div>
  )
}

export default App
