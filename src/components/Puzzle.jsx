
import "../components/Puzzle.css";

function Puzzle(props) {
    return (<>
        <div className="container">
            <img src={props.img} alt={props.altText} className="picture" />
            <h2 className="tittle">{props.tittle} jingsaw puzzle</h2>
            <h3 className="price">{props.price}</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium repellendus placeat esse deleniti a quisquam voluptatem minima sit. Obcaecati necessitatibus ipsa quo! Dolorum eligendi dolorem repellat possimus neque quia.</p>
        </div>
    </>)

}

export default Puzzle;