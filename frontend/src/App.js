import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SignIn from "./3_Pages/1_Authentification/1_2_SignIn";
import Validation from "./3_Pages/1_Authentification/1_3_Validation";
import Congratulations from "./3_Pages/1_Authentification/1_4_Congratulations";
import Clients from "./3_Pages/2_Coach/2_2_Clients";
import Routes from "./3_Pages/2_Coach/2_3_Routes/2_3_1_RoutesOverview";
import AthleteOverview from "./3_Pages/2_Coach/2_4_AthleteOverview";
import Results from "./3_Pages/2_Coach/2_5_Results";
import Sessions from "./3_Pages/2_Coach/2_6_Sessions";
import RoutesDetail from "./3_Pages/2_Coach/2_3_Routes/2_3_3_RoutesDetail";
import PasswordReset from "./3_Pages/1_Authentification/1_1_PasswordReset";
import {withUserAccess} from "./1_HOC";
import Coaches from "./3_Pages/3_Admin/3_1_Coaches";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/password/reset" component={PasswordReset}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/password/validate" component={Validation}/>
            <Route exact path="/congrats" component={Congratulations}/>
            <Route exact path="/coach/clients" component={withUserAccess(Clients)}/>
            <Route exact path="/coach/routes" component={withUserAccess(Routes)}/>
            <Route exact path="/coach/routes/:index" component={RoutesDetail}/>
            <Route exact path="/coach/athlete/:index" component={AthleteOverview}/>
            <Route exact path="/coach/results/:index" component={Results}/>
            <Route exact path="/coach/sessions" component={withUserAccess(Sessions)}/>
            <Route exact path="/admin" component={withUserAccess(Coaches)}/>
        </Switch>
    </Router>
  );
}

export default App;
