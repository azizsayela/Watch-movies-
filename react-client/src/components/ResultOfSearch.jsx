import React from "react";

const SearchedFilm = (props) => {
  return (
    <div className="container">
      <main className="grid">
        <article>
          <img className="film-img " src={props.film[0].image}></img>
          <div className="text">
            <h1 className="film-title">Title : {props.film[0].title}</h1>
            <p className="film"> Ranking {props.film[0].rank}</p>
            <p className="film"> Year :{props.film[0].year}</p>
            <p className="film"> Crew :{props.film[0].crew}</p>
            <p className="film"> imDbRating :{props.film[0].imDbRating}</p>
            {props.adminState && (
              <div className="btn-container">
                <button
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="batouna"
                >
                  Delete
                </button>
                <button
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="batouna"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default SearchedFilm;
