import React, {Component, Fragment} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddDish from "./AddDish";
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from "./Menu";
import ItemPage from "./ItemPage";
import Basket from "./Basket";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <Header />

                    <Switch>
                        <Route exact   path='/'   component={Menu}/>
                        <Route path='/add' component={AddDish}/>
                        <Route path='/catalog/:id' component={ItemPage}/>
                        <Route path='/basket' component={Basket}/>
                    </Switch>
                </Fragment>
            </MuiThemeProvider>

        );
    }
}




export default (App);
