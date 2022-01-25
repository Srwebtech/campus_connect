import React from "react";
import { BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import Feed from "./Feed";
import Widget from "./Widget";
import Home from "./Home";
import Lib from "./Lib";
import Nav from "./Nav";
import Navg from "./Navg"
import Pyqs from "./Pyqs";
import Log from "./Log";
import TodoList from "./TodoList"
import "./App.css";

const  App = () => {
  return (

    <Router>
    <main>
    
      <Switch>
        <Route path ="/" component={Home}  exact />
        <Route path ="/Home" component={Home}   />
        <Route path ="/Feed" component={Feed} />
          
        <Route path ="/Nav" component={Nav} />
        <Route path ="/Navg" component={Navg} />
        <Route path ="/Widget" component={Widget}/>
        <Route path ="/Lib" component={Lib}/>
        <Route path ="/Pyqs" component={Pyqs}/>
        <Route path ="/TodoList" component={TodoList} />
        
        <Route  path='/Log' component={Log} />
      
        

      </Switch>
    </main>
    </Router>
    // BEM

    
);
  };

      
     


export default App;