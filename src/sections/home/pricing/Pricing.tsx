import { FaRupeeSign } from "react-icons/fa";
import Card from "../../../components/card/card";
import HeadingTypo from "../../../components/headingTypo/headingTypo";
import "./pricing.css";

function Pricing() {
  return (
    <section id={"pricing"} className={"features-main "}>
      <HeadingTypo label="Pricing Plans" />
      <div style={{ margin: 30 }} />
      <div
        className={"cards-container"}
        style={{ gridTemplateColumns: "repeat(1, minmax(300px, 1fr))" }}
      >
        <Card
          Icon={FaRupeeSign}
          head={"Free"}
          desc={
            "As it is in Development phase it is free to use grab your api key now."
          }
        />
      </div>
    </section>
  );
}

export default Pricing;
