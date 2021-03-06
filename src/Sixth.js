import img2 from "./img/second.jpeg";

function Sixth() {
  return (
    <div className="fifth_container" id="why-va">
      <h2>WHY CHOOSE US</h2>
      <hr className="mb-5"></hr>

      <div className="fifth-grid mb-5">
        <div className="fifth-grid-item">
          <div>
            <p>
              We connect you to exquisite properties and lands at prime
              locations for either commercial, residential or leisure purposes.
            </p>
          </div>
        </div>

        <div className="fifth-grid-item">
          <div>
            <p>
              We get to know you on a personal level and help you make us
              understand your preferences, which in turn allows us give you a
              solid recommendation when choosing a home or landed property.
            </p>
          </div>
        </div>

        <div className="fifth-grid-item">
          <div>
            <p>
              We also offer you the opportunity of working very closely with an
              architect in crafting a building plan of your dream, uniquely
              designed to suit your personality.
            </p>
          </div>
        </div>

        <div className="fifth-grid-item">
          <div>
            <p>
              We connect you to property deals with flexible payment plans
              offering financial comfortability and peace of mind.
            </p>
          </div>
        </div>

        <div className="fifth-grid-item">
          <div>
            <p>
              Upon your request, we keep you updated with new & available
              property listings, real estate investment opportunities and
              discounted land sales in Uyo, Akwa-Ibom State.
            </p>
          </div>
        </div>
      </div>

      <div className="fourth-container">
        <div className="block-four">
          <h2>FEATRUED PROPERTY</h2>
          <hr></hr>

          <div className="grid-2">
            <div className="grid-item">
              <img src={img2} alt="img"></img>
            </div>

            <div className="grid-item another-grid">
              <div className="align-left">
                <h5><b>2000 FASHION SHOW DRIVE - 4711</b></h5>
                <hr className="full-hr"></hr>
                <h5 className="mb-5">LAS VEGAS, NV 89109</h5>
                <h5>1 BED | 1 BATH | 910 SQ.FT. OFFERED AT: $486,000</h5>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="grid-item">
              <img src={img2} alt="img"></img>
            </div>

            <div className="grid-item another-grid">
              <div className="align-left">
                <h5><b>2000 FASHION SHOW DRIVE - 4711</b></h5>
                <hr className="full-hr"></hr>
                <h5 className="mb-5">LAS VEGAS, NV 89109</h5>
                <h5>1 BED | 1 BATH | 910 SQ.FT. OFFERED AT: $486,000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sixth-container">
        <div className="sixth-gridd">
          <div className="sixth-grid-item">
            <img src={img} alt=""></img>
          </div>
          <div className="sixth-grid-item">
            <div>
              V.A. Properties and homes is fast becoming a leading brand at the
              forefront of the Nigerian real estate market since 2020,
              delivering residential, commercial and leisure properties in Lagos
              and its environs and having expanded to Akwa-Ibom likewise
              providing investment opportunities.
            </div>
            <div>
              We also are in partnerships with over 30 real estate investment &
              development firms across Nigeria.
            </div>
          </div>
        </div>
      </div> */}
      <div className="bold-container">
        <b>
          "Buy, rent or lease a home in Uyo through V.A and enjoy the
          satisfaction you deserve."
        </b>
      </div>
    </div>
  );
}

export default Sixth;
