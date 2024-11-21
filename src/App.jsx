import Puzzle from "./components/Puzzle";
import Bear from "./assets/Bear.jpg";


function App() {


  return (
    <>
      <Puzzle tittle="Bear" price="9,99$" img={Bear}></Puzzle>
      <Puzzle></Puzzle>
      <Puzzle></Puzzle>
      <Puzzle></Puzzle>
    </>

  )
}

export default App
