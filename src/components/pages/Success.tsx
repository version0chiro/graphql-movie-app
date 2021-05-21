import { Info } from "@material-ui/icons";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Switch, Route } from "react-router-dom";
import NewMovies from "../UI//NewMovies";
import MovieInfo from "../UI/MovieInfo";

const client = new ApolloClient();

const Success = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/movies" component={NewMovies} />
          <Route exact path="info/:id" component={MovieInfo} />
        </Switch>
      </ApolloProvider>
    </HashRouter>
  );
};

export default Success;
