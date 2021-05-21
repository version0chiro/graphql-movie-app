import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

class MovieInfo extends React.Component<any> {
  render() {
    const id = this.props.match.params.id;
    console.log("debug");
    return (
      <div className="movies-info">
        <Query query={query} variables={{ id }}>
          {({ loading, data }: { loading: any; data: any }): any => {
            if (loading) return <div>Loading..</div>;
            return (
              <div>
                <header
                  style={{
                    backgroundImage:
                      'url("https://image.tmdb.org/t/p/w500///' +
                      data.movieInfo.poster_path +
                      '")',
                  }}
                >
                  <h2 className="title">{data.movieInfo.title}</h2>
                </header>
                <article className="wrapper">
                  <p className="description">{data.movieInfo.overview}</p>
                  <div className="sidebar">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500///" +
                        data.movieInfo.poster_path
                      }
                      className="cover_image"
                      alt=""
                    />
                    <ul>
                      <li>
                        <strong>Genre:</strong> {data.movieInfo.genres}
                      </li>
                      <li>
                        <strong>Released:</strong>
                        {data.movieInfo.release_date}
                      </li>
                      <li>
                        <strong>Rated:</strong> {data.movieInfo.vote_average}
                      </li>
                      <li>
                        <strong>Runtime:</strong> {data.movieInfo.runtime}
                      </li>
                      <li>
                        <strong>Production Companies:</strong>{" "}
                        {data.movieInfo.production_companies}
                      </li>
                    </ul>

                    {/* reviews */}
                  </div>
                  {/* credits */}
                </article>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

const query = gql`
  query MovieInfo($id: String) {
    movieInfo(id: $id) {
      title
      overview
      poster_path
      genres
      release_date
      vote_average
      runtime
      production_companies
    }
  }
`;

export default graphql(query)(MovieInfo);
