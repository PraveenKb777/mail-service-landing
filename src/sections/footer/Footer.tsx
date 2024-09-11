import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import HeadingTypo from "../../components/headingTypo/headingTypo";

const Footer = () => {
  return (
    <footer id={"footer"} className={"features-main "}>
      <HeadingTypo label="Try Now?" />
      <div className={"hero-btn-section"}>
        <Button
          label="Request for a Sign Up"
          onClick={() =>
            window.open(
              "https://mail-request-worker.praveen-cendrol.workers.dev/"
            )
          }
        />
        <span style={{ width: 10 }} />
        <Button
          label="Already have a Account Sign In"
          disabled
          variant="plain"
        />
      </div>
      <div className={"footer-last"}>
        <Link to={"doc"}>Documentation</Link>
        <Link to={"faq"}>FAQs</Link>
        <a>Copyright</a>
      </div>
    </footer>
  );
};

export default Footer;
