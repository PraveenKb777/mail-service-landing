import { FC } from "preact/compat";

const HeadingTypo: FC<{ label: string }> = ({ label }) => {
  return <h3 style={{ fontSize: 30 }}>{label}</h3>;
};

export default HeadingTypo;
