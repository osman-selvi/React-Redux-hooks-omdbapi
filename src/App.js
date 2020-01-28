import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Search from './components/Search';

// pages
import Home from './views/Home';
import Films from './views/Films';


function App() {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <Search />
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/movies" component={Films} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
