import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Tech-Quick</h3>
        <ul className="footer-socials">
          <li>
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/joshgable">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2023 Tech-Quick. designed by
          <span> Josh Gable</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
