import notfound from "../../static/images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        src={notfound}
        alt="404 Page Not Found"
        style={{ width: "100vw", height: "90vh" }}
      />
    </div>
  );
};

export default NotFound;
