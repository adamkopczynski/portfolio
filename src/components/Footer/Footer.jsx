import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="row justify-content-between">
        <div className="col-md-3" id="contact">
          <h2>Adam Kopczyński</h2>
          <p className="cyan">akadamkopczynski@gmail.com</p>
          <p>tel. 669624179</p>
        </div>
        <div className="col-md-2">
          <div className="social-media">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/adam.kopczynski.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media__item"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adamkopczynski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media__item"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adamkopczynski/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-media__item"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
