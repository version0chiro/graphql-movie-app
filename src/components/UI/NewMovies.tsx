import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

class NewMovies extends Component<any> {
  Movies() {
    return this.props.data.newMovies.map((movie: any) => {
      return (<div className="movies">

        <article key={movie.id} className="movie_list">
          <Link to={"/info/" + movie.id}>
            <img src={movie.poster_path} alt={movie.title} />
          </Link>
          <h1>{movie.title}</h1>
        </article>
      </div>
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
