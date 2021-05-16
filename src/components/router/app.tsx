import React, { ReactElement} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../mainPage/mainPage';
import { AllPosts } from '../post/allPosts';
import { PostPage } from '../post/postPage';

export const App = ():ReactElement => {

    return (
        <Router>
            <Switch>
                <Route exact path="/posts/:id" component={ PostPage }></Route>
                <Route exact path="/posts" component={ AllPosts }></Route>
                <Route exact path="/" component={ MainPage }></Route>
            </Switch>
        </Router>
    )

}