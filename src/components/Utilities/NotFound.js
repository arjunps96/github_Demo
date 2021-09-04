import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div className="centered">
      <p>Page not Found</p>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default NotFound;
