import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-header">
            <h1>MORENT</h1>
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="footer-links">
            <div className="links-wrapper">
              <h2>About</h2>
              <ul>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Bussiness Relation</li>
              </ul>
            </div>
            <div className="links-wrapper">
              <h2>Community</h2>
              <ul>
                <li>Events</li>
                <li>Blog</li>
                <li>Product</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            <div className="links-wrapper">
              <h2>Socials</h2>
              <ul>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2021 Morent. All rights reserved</p>
          </div>
          <div className="legal-nav">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
