import { useDispatch, useSelector } from "react-redux";
import { setPage, resetPage } from './store/pages';

import HomePage from "./components/HomePage";
import ProjectList from "./components/ProjectList";

import titleCardRectangle from "./media/png-exports/title-card-rectangle.png";
import titleCardRectangleText from "./media/png-exports/title-card-rectangle-text.png";
import titleCardSquare from "./media/png-exports/title-card-square.png";
import titleCardSquareText from "./media/png-exports/title-card-square-text.png";

import plainWall from "./media/png-exports/plain-wall.png";
import overlay from "./media/png-exports/overlay.png";



function App() {
  const dispatch = useDispatch();

  const pageState = useSelector(state => state.pages);
  const nav = pageState.nav;

  console.log({ nav })

  const changePage = (page) => {
    dispatch(setPage(page));

    setTimeout(() => {
        dispatch(resetPage())
    }, 1000);
  };

  return (
    <div className="App">
      <div className="image-layer">
        <div className={`title-card-rectangle`}>
          <img src={titleCardRectangleText} alt="0" className="title-card-text" />
          <img src={titleCardRectangle} alt="0" className="core" />
          <div
            className="hit-box"
            onClick={() => changePage("home")}
          />
        </div>
      </div>
      <div className="image-layer">
        <div className={`project-card ${nav}`}>
          <img src={titleCardSquareText} alt="0" className="title-card-text" />
          <img src={titleCardSquare} alt="0" className="core" />
          <div
            className="hit-box"
            onClick={() => changePage("index")}
          />
        </div>
      </div>
      <HomePage />
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
