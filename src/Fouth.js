import img from "./img/second.jpeg";
// import { Button } from "react-bootstrap";

function Fourth() {
  return (
    <div className="fourth-container">
      <div className="block-four">
        <h2>FIND YOUR NEW HOME IN UYO</h2>
        <hr></hr>

        <div className="grid-2">
          <div className="grid-item">
            <img src={img} alt="img"></img>
          </div>

          <div className="grid-item another-grid">
            <div>
              <ul>
                <li>Lorem ipsum dolor amet ini</li>
                <li>Lorem ipsum dolor amet ini</li>
                <li>Lorem ipsum dolor amet ini</li>
                <li>Lorem ipsum dolor amet ini</li>
                <li>Lorem ipsum dolor amet ini</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
