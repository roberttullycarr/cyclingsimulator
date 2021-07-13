import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SignUp from "./3_Pages/1_Authentification/1_1_SignUp";
import SignIn from "./3_Pages/1_Authentification/1_2_SignIn";
import Validation from "./3_Pages/1_Authentification/1_3_Validation";
import Congratulations from "./3_Pages/1_Authentification/1_4_Congratulations";
import Overview from "./3_Pages/2_Coach/2_1_Overview";
import Clients from "./3_Pages/2_Coach/2_2_Clients";
import Routes from "./3_Pages/2_Coach/2_3_Routes/2_3_1_RoutesOverview";
import AthleteOverview from "./3_Pages/2_Coach/2_4_AthleteOverview";
import Results from "./3_Pages/2_Coach/2_5_Results";
import Sessions from "./3_Pages/2_Coach/2_6_Sessions";
import RoutesDetail from "./3_Pages/2_Coach/2_3_Routes/2_3_3_RoutesDetail";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/validate" component={Validation}/>
            <Route exact path="/congrats" component={Congratulations}/>
            <Route exact path="/coach/overview" component={Overview}/>
            <Route exact path="/coach/clients" component={Clients}/>
            <Route exact path="/coach/routes" component={Routes}/>
            <Route exact path="/coach/routes/:index" component={RoutesDetail}/>
            <Route exact path="/coach/athlete/:index" component={AthleteOverview}/>
            <Route exact path="/coach/results/:index" component={Results}/>
            <Route exact path="/coach/sessions" component={Sessions}/>
        </Switch>
    </Router>
  );
}

export default App;
