import React, { useState } from "react";
import axios from "axios";

const Onefilm = (props) => {
  const [updatedTtitle, setupdatedTtitle] = useState("");
  const handleDelete = (id) => {
    axios
      .delete(`/api/films/delete/${id} `)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  const handleUpdate = (id, update) => {
    axios
      .put(`/api/films/update/${id}`, { title: update })
      .then((result) => {
        console.log("dataUpdated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <main className="grid">
        <article>
          <img className="film-img " src={props.film.image}></img>
          <div className="text">
            <h1 className="film-title">Title : {props.film.title}</h1>
            <p className="film"> Ranking {props.film.rank}</p>
            <p className="film"> Year :{props.film.year}</p>
            <p className="film"> Crew :{props.film.crew}</p>
            <p className="film"> imDbRating :{props.film.imDbRating}</p>
            {props.adminState && (
              <div className="btn-container">
                <button
                  value={props.film._id}
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="batouna"
                  onClick={(e) => {
                    console.log(e.target.value);
                    handleDelete(e.target.value);
                  }}
                >
                  Delete
                </button>
                <button
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="batouna"
                  value={props.film._id}
                  onClick={(e) => {
                    handleUpdate(e.target.value, updatedTtitle);
                  }}
                >
                  Edit
                </button>
                <input
                  type="text"
                  placeholder="edit Title"
                  onChange={(e) => {
                    setupdatedTtitle(e.target.value);
                    console.log(updatedTtitle);
                  }}
                ></input>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

{
  /* <div class="container">
  <main class="grid">
    <article>
      <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo">
      <div class="text">
        <h3>Seamlessly visualize quality</h3>
        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
        <a href="https://codepen.io/collection/XdWJOQ/" class="btn btn-primary btn-block">Here's why</a>
      </div>
    </article>
  </main>
</div> */
}

export default Onefilm;
