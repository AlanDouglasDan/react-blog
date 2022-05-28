import img from "./img/second.jpeg";
import { Button } from "react-bootstrap";

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
              {/* <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup> */}
              <Button type="button">ENQUIRE NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
