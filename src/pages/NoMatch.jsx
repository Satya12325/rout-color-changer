import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      {" "}
      <h3>Resource: Not found</h3>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default NoMatch;
