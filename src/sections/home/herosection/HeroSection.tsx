import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button";
import Canvas from "../../../components/canvas/canvas";
import "./herosection.css";
function HeroSection() {
  const navigation = useNavigate();
  return (
    <section
      id={"hero-section"}
      className={"hero-section"}
      style={{
        position: "relative",
        borderBottom: "1px solid #eee",
      }}
    >
      <Canvas parentId="hero-section" />
      <div className={"hero-content"}>
        <h1 className={"hero-heading"}>Simplify Your Email Delivery</h1>
        <p className={"hero-sub-head"}>
          A powerful email delivery platform designed for developers and
          businesses.
        </p>
        <div className={"hero-btn-section"}>
          <Button
            label="Get Started"
            onClick={() => navigation({ pathname: "doc" })}
          />
          <span style={{ width: 10 }} />
          <Button
            label="Request to Dash"
            variant="plain"
            onClick={() => {
              window.open(
                "https://mail-request-worker.praveen-cendrol.workers.dev/"
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
