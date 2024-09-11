import { useRouteError, Link } from "react-router-dom";
import ErrorImg from "../assets/images/ErrorImg.png"

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="ErrPage">
      <img className="ErrorImg" src={ErrorImg} alt="Error Image"></img>
      <div className=" font-semibold text-xl my-0 mb-0 ">
        <h1>Oops! Restaurant not found...🫤</h1>
        <h2>{err.data}</h2>
      </div>
      <button className="Err-btn">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
