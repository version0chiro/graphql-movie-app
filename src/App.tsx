import { LoginContainer } from "./components/pages/login.container";
import { HashRouter, Switch, Route } from "react-router-dom";
import NewMovies from "./components/UI/NewMovies";
import MovieInfo from "./components/UI/MovieInfo";
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import './style/style.scss';

const client = new ApolloClient({
  uri: "https://calm-bayou-22920.herokuapp.com/graphql",
});

function App() {
  return (
    <div>
      <HashRouter>
        
        <ApolloProvider client={client}>
          <Switch>
            <Route exact={true} path="/" component={LoginContainer} />
            <Route exact path="/movies" component={NewMovies} />
            <Route exact path="/info/:id" component={MovieInfo} />
          </Switch>
        </ApolloProvider>
      </HashRouter>
    </div>
  );
}

export default App;
