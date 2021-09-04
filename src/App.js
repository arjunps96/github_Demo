import "./App.css";
import Layout from "./components/layout/Layout";

import Requests from "./pages/Requests";
import ServicesPage from "./pages/ServicesPage";
import Payments from "./pages/Payments";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/requests" exact component={Requests} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/payments" exact component={Payments} />
        <Redirect to="/requests" />
      </Switch>
    </Layout>
  );
}
export default App;
