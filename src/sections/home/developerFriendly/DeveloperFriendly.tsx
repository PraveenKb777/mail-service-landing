import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button";
import HeadingTypo from "../../../components/headingTypo/headingTypo";

function DeveloperFriendly() {
  const navigation = useNavigate();
  return (
    <section className={"features-main "}>
      <HeadingTypo label="Developer Friendly" />
      <div style={{ margin: 30 }} />
      <p>
        Our platform is designed with developers in mind. With comprehensive API
        documentation, and code snippets, integration is a breeze.
      </p>
      <div style={{ margin: 30 }} />
      <Button
        label="View API Docs"
        onClick={() => navigation({ pathname: "doc" })}
      />
    </section>
  );
}

export default DeveloperFriendly;
