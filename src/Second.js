import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import background from "./img/first.jpeg";

function Second() {
  return (
    <div
      className="form_container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="inner_form">
        <h5 className="form_header">REGISTER YOUR INTEREST</h5>

        <Form>
          <p>
            <em>
              <span class="asteric">*&nbsp;</span>
              All fields are compulsory
            </em>
          </p>

          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Title</option>
            <option value="MR">MR</option>
            <option value="MS">MS</option>
            <option value="MRS">MRS</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Second;