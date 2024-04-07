import HomePage from "./components/HomePage";
import ProjectList from "./components/ProjectList";

import plainWall from "./media/png-exports/plain-wall.png";
import overlay from "./media/png-exports/overlay.png";



function App() {

  return (
    <div className="App">
      {/* <HomePage /> */}
      <ProjectList />
      <div className={`black-layer`}>
        <img src={overlay} alt="0" className="background" />
      </div>
      <div className="background-container">
        <img src={plainWall} alt="0" className="background"/>
      </div>
    </div>
  );
}

export default App;
