import { IconType } from "react-icons";
import Card from "../../../components/card/card";
import { LuScan } from "react-icons/lu";
import { FaCheckCircle, FaPaintBrush, FaPlug } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import "./features.css";
import HeadingTypo from "../../../components/headingTypo/headingTypo";

export interface ICardItems {
  icon: IconType;
  head: string;
  desc?: string;
}

const features_items: ICardItems[] = [
  {
    head: "Reliable Delivery",
    icon: FaCheckCircle,
    desc: "Guaranteed high delivery rates for transactional and marketing emails.",
  },
  {
    head: "Easy Integration",
    icon: FaPlug,
    desc: "Simple API and SMTP support for seamless setup.",
  },
  {
    head: "Advanced Analytics",
    icon: GoGraph,
    desc: "Real-time reporting and detailed insights on email performance.",
  },
  {
    head: "Customizable Templates",
    icon: FaPaintBrush,
    desc: "Pre-built email templates and design tools to create professional emails.",
  },
  {
    head: "Scalability",
    icon: LuScan,
    desc: "Whether you're a startup or an enterprise, the platform grows with your needs.",
  },
];

const Features = () => {
  return (
    <section id={"features"} className="features-main">
      <HeadingTypo label="Features Overview" />
      <div style={{ margin: 30 }} />
      <div className={"cards-container"}>
        {features_items.map((e) => {
          return <Card Icon={e.icon} head={e.head} desc={e.desc} />;
        })}
      </div>
    </section>
  );
};

export default Features;
