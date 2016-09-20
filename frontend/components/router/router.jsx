import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from '../App';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
