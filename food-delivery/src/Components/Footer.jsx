import React from "react";

function Footer() {
  return (
    <div className="bg-dark text-white">
      <footer className="footer-07">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This Website is made by <strong>Shivam</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
