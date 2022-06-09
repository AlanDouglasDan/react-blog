import { Form, Button } from "react-bootstrap";

function Seventh() {
  return (
    <div className="seventh_container">
      <div className="inner_form">
        <h5 className="form_header">BOOK AN APPOINTMENT</h5>

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

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>NAME</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control type="EMAIL" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>PHONE</Form.Label>
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>

          <Button variant="success" type="submit">
            BOOK NOW
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Seventh;
