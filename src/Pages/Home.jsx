import Puzzle from "../components/Puzzle.css";
import Logo from "../assets/logo.png";
import Bear from "../assets/Bear.jpg";
import Cat from "../assets/Cat.jpg";
import Birds from "../assets/Birds.jpg";
import Corgi from "../assets/Corgi.jpg";
import Fish from "../assets/Fish.jpg";
import Dachsund from "../assets/Dachsund.jpg";
import "../components/main.css";
function Home() {

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
            <div className="item_container">
              <Puzzle tittle="Bear" price="9,99$" img={Bear} alt="puzzle bear picture"></Puzzle>
              <Puzzle tittle="Cat" price="19,99$" img={Cat} alt="puzzle cat picture"></Puzzle>
              <Puzzle tittle="Colibri birds" price="29,99$" img={Birds} alt="puzzle birds picture"></Puzzle>
              <Puzzle tittle="Corgi dog" price="9,99$" img={Corgi} alt="puzzle corgi picture"></Puzzle>
              <Puzzle tittle="Fish" price="9,99$" img={Fish} alt="puzzle fish picture"></Puzzle>
              <Puzzle tittle="Dachsund dog" price="9,99$" img={Dachsund} alt="puzzle Dachsund picture"></Puzzle>
            </div>
    
          </div>
        </>
    
      )
}

export default Home;