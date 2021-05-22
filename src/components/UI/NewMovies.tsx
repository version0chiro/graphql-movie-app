import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class NewMovies extends Component<any> {
  Movies() {
    return this.props.data.newMovies.map((movie: any) => {
      return (
        <Box border={1}>
          <div className="movies">
            <article key={movie.id} className="movie_list">
              <Link to={"/info/" + movie.id}>
                <Card className="Cardroot">
                  <CardContent>
                    <Typography
                      className="title"
                      color="textSecondary"
                      gutterBottom
                    >
                      Movie number {movie.id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                    <Typography className="pos" color="textSecondary">
                      some detail about the movie
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                {/* <img src={movie.poster_path} alt={movie.title} /> */}
              </Link>
              {/* <h1>{movie.title}</h1> */}
            </article>
          </div>
        </Box>
      );
    });
  }
  render() {
    if (this.props.data.loading) return <div>Loading...</div>;
    return this.Movies();
  }
}

const query = gql`
  {
    newMovies {
      id
      poster_path
      title
    }
  }
`;

export default graphql(query)(NewMovies);
