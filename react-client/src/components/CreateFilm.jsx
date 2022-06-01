import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Create = (props) => {
  const [title, settitle] = useState("");
  const [rank, setrank] = useState("");
  const [image, setimageUrl] = useState("");
  const [year, setyear] = useState("");
  const [crew, setcrew] = useState("");
  const [imDbRating, setimDbRating] = useState("");

  const createPost = (title, imDbRating, imageUrl, year, rank, crew) => {
    axios
      .post("/api/films/create", {
        title: title,
        imDbRating: imDbRating,
        imageUrl: imageUrl,
        rank: rank,
        year: year,
        crew: crew,
      })
      .then((data) => {
        console.log("succeful post");
      });
  };

  return (
    // <div class="create">
    //   <div class="create-editor">
    //     <h2>AUTHOR</h2>
    //     <form>
    //       <input
    //         class="create-input"
    //         type="text"
    //         placeholder="Post Title"
    //         onChange={(e) => {
    //           settitle(e.target.value);
    //           console.log(title);
    //         }}
    //       ></input>
    //       <input
    //         class="create-input"
    //         type="text"
    //         placeholder="Author"
    //         onChange={(e) => {
    //           setauthor(e.target.value);
    //           console.log(author);
    //         }}
    //       ></input>
    //       <input
    //         class="create-input"
    //         type="text"
    //         placeholder="Image URL"
    //         onChange={(e) => {
    //           setimageUrl(e.target.value);
    //           console.log(imageUrl);
    //         }}
    //       ></input>
    //       <textarea
    //         class="create-body-textarea"
    //         placeholder="Post Body"
    //         onChange={(e) => {
    //           setbody(e.target.value);
    //           console.log(body);
    //         }}
    //       ></textarea>
    //       <button
    //         class="create-submit-button"
    //         type="submit "
    //         onClick={(e) => {
    //           e.preventDefault();
    //           createPost(title, author, imageUrl, body);
    //         }}
    //       >
    //         Save post
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="containerr">
      <section className="order" id="order">
        <div className="row">
          <form action="">
            <h1 className="heading">Add a film to the watch-movies </h1>
            <div className="inputBox">
              <input
                name="name"
                type="text"
                placeholder="Add the title..."
                onChange={(e) => {
                  settitle(e.target.value);
                  console.log(title);
                }}
              />
              <input
                name="photo"
                type="src"
                placeholder="YOU CAN UPLOAD YOUR PHOTO "
                onChange={(e) => {
                  setimageUrl(e.target.value);
                  console.log(image);
                }}
              />
              <input
                name="imdb"
                type="src"
                placeholder="IMDB rating..."
                onChange={(e) => {
                  setimDbRating(e.target.value);
                  console.log(imDbRating);
                }}
              />
              <input
                name="number"
                type="text"
                placeholder="Add the Year..."
                onChange={(e) => {
                  setyear(e.target.value);
                  console.log(year);
                }}
              />
              <input
                name="rank"
                type="src"
                placeholder="Add the Rank..."
                onChange={(e) => {
                  setrank(e.target.value);
                  console.log(rank);
                }}
              />
              <input
                name="crew"
                type="src"
                placeholder="Add the Crew..."
                onChange={(e) => {
                  setcrew(e.target.value);
                  console.log(crew);
                }}
              />
            </div>
            <input
              type="submit"
              value="Add Film"
              className="bota"
              onClick={(e) => {
                createPost(title, imDbRating, image, year, rank, crew);
                e.preventDefault;
              }}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Create;
