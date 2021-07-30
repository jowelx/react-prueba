// import { Redirect } from "react-router-dom";
import PublicRoutes from "./routes/public.routes";

const App = () => {
  return (
    <div>
      <PublicRoutes />
      {/* <Redirect path="/**" to="/" /> */}
    </div>
  );
};

export default App;
