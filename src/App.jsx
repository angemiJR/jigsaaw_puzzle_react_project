import Puzzle from "./components/Puzzle";
import Logo from "./assets/logo.png";
import Bear from "./assets/Bear.jpg";
import "./main.css";


function App() {


  return (
    <>
      <div className="main">
        <nav>
          <img src={Logo} alt="Logo picture" />
          <div>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <Puzzle tittle="Bear" price="9,99$" img={Bear} alt="puzzle bear picture"></Puzzle>
          <Puzzle></Puzzle>
          <Puzzle></Puzzle>
          <Puzzle></Puzzle>
        </div>

      </div>
    </>

  )
}

export default App
