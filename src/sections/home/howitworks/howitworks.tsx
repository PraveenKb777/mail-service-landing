import { MdOutlineKey } from "react-icons/md";
import { ICardItems } from "../features/Features";
import "./howitworks.css";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GrDashboard } from "react-icons/gr";
import Card from "../../../components/card/card";
import HeadingTypo from "../../../components/headingTypo/headingTypo";

const features_items: ICardItems[] = [
  {
    head: "API Keys",
    icon: MdOutlineKey,
    desc: "Generate and manage API keys for seamless integration.",
  },
  {
    head: "SMTP",
    icon: SiAmazonsimpleemailservice,
    desc: "Set up SMTP for reliable email sending.",
  },
  {
    head: "Dashboard Tools",
    icon: GrDashboard,
    desc: "Use our intuitive dashboard to manage your email campaigns.",
  },
];

const HowitWorks = () => {
  return (
    <section id={"howitworks"} className={"features-main "}>
      <HeadingTypo label="How It Works" />
      <div style={{ margin: 30 }} />
      <div className={"cards-container"}>
        {features_items.map((e) => {
          return <Card Icon={e.icon} head={e.head} desc={e.desc} />;
        })}
      </div>
    </section>
  );
};

export default HowitWorks;
