import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <p>
        IF YOU WANT ANY PRODUCTS, WHICH WE DON'T HAVE AT THIS TIME.
        <br />
        YOU CAN REQUEST US TO BRING THAT PRODUCT BY MAILING US.
        <br />
        TO REQUEST ANY PRODUCTS
      </p>
      <a className="mailBtn" href="mailto:techway.mail@gmail.com">
        <Button>Contact: techway.mail@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
