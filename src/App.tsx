import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

export default App;
