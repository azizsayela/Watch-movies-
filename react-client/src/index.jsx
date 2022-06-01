import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Allfilms from "./components/Allfilms.jsx";
import axios from "axios";
import Login from "./components/Login.jsx";
import Signup from "./components/CreateAccount.jsx";
import Create from "./components/CreateFilm.jsx";
import Search from "./components/Search.jsx";
import SearchedFilm from "./components/ResultOfSearch.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "Allfilms",
      allfilms: [],
      admin: false,
      user: false,
    };

    this.changeView = this.changeView.bind(this);
    this.setAdminView = this.setAdminView.bind(this);
    this.userView = this.userView.bind(this);
    this.filterStateOnSearch = this.filterStateOnSearch.bind(this);
  }

  componentDidMount() {
    axios.get("/api/films").then((result) => {
      result.data.splice(50);

      this.setState({ allfilms: result.data });
      console.log(this.state.allfilms);
    });
  }

  filterStateOnSearch(query) {
    let filtered = this.state.allfilms.filter((e) => {
      return e.title === query;
    });
    console.log(filtered);
    this.setState({ allfilms: filtered });
    this.setState({ view: "result-search" });
    console.log(this.state.view);
  }

  setAdminView() {
    this.setState({ admin: true });
    this.setState({ view: "Allfilms" });
  }

  userView() {
    this.setState({ user: true });
    this.setState({ view: "Allfilms" });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === "Allfilms") {
      return (
        <Allfilms Films={this.state.allfilms} adminState={this.state.admin} />
      );
    } else if (view === "login") {
      return (
        <Login setAdminView={this.setAdminView} setUserView={this.userView} />
      );
    } else if (view === "create-account") {
      return <Signup></Signup>;
    } else if (view === "create-film") {
      return <Create />;
    } else if (view === "result-search") {
      return <SearchedFilm film={this.state.allfilms}></SearchedFilm>;
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span
            className="logo"
            onClick={() => {
              this.changeView("Allfilms");
            }}
          >
            Watch-Movies
          </span>
          {this.state.user && (
            <div className="search">
              <Search filter={this.filterStateOnSearch}></Search>
            </div>
          )}
          {this.state.user && (
            <span
              className={
                this.state.view === "feed" ? "nav-selected" : "nav-unselected"
              }
            >
              See My films list
            </span>
          )}
          <span
            className="nav-unselected"
            onClick={() => {
              this.changeView("create-account");
            }}
          >
            Create Account{" "}
          </span>
          <span
            className="nav-unselected"
            onClick={() => {
              this.changeView("login");
              console.log(this.state.view);
            }}
          >
            Sign-in
          </span>
          {this.state.admin && (
            <span
              className="nav-unselected"
              onClick={() => {
                this.changeView("create-film");
              }}
            >
              Add new Film
            </span>
          )}
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("blogmodo"));
