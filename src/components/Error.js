import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>
        {err.status}: {err.statusText}
      </h1>
      <h3>Oops! Something went wrong!!</h3>
      <h3>Please try again later.</h3>
    </div>
  );
};

export default Error;
