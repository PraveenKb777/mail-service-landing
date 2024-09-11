import { FC } from "preact/compat";
import { IconType } from "react-icons";
import "./card.css";
const Card: FC<{ head: string; Icon: IconType; desc?: string }> = ({
  Icon,
  head,
  desc,
}) => {
  return (
    <div className="card-main">
      <Icon size={52} color="#32bc9b" />
      <h6 className={"card-head"}>{head}</h6>
      {desc && <p className={"card-desc"}>{desc}</p>}
    </div>
  );
};

export default Card;
