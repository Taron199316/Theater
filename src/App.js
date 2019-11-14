import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/Theater'
import Film from './pages/Film'
import Deletfilm from './pages/Deletfilm'
import Editfilm from './pages/EditFilm'



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/theater"  component={About} />
                    <Route path="/edit/:filmId"  component={Editfilm} />
                    <Route path="/film"  component={Film} />
                    <Route path="/edit"  component={Editfilm} />
                    <Route path="/del"  component={Deletfilm} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;