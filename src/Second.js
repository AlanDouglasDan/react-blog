import { Form, Button } from "react-bootstrap";
import background from "./img/first.jpeg";

function Second() {
  return (
    <div>
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
              ENQUIRE NOW
            </Button>
          </Form>
        </div>
      </div>

      <div className="form-container-2">
        <div
          className="full-bg-img"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="colorful-banner">
          <p>Invest in Land & Property in Uyo from NGN 2,000,000 (USD 4,700)</p>
        </div>
        <p className="mb-5 extra-font">
          Whether you are searching for an investment opportunity, a residential
          property to call your home or trying to rent an apartment in Uyo, V.A
          properties connects you to investments, lands & apartments in Akwa
          Ibom State with comfortable payment plans. Please fill out the form
          below and indicate your interest
        </p>
        <div className="inner_form mb-5">
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

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Interested In</option>
              <option value="Investing">Investing</option>
              <option value="Buying">Buying</option>
              <option value="Renting">Renting</option>
            </Form.Select>

            <Button className="form_button" variant="success" type="submit">
              ENQUIRE NOW
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Second;
