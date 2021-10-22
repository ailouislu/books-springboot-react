import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      type: "",
      price: "",
      author: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    author: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    price: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  async populateGenres() {
    const { data: type } = await getGenres();
    this.setState({ type });
  }

  async populateMovie() {
    try {
      const bookId = this.props.match.params.id;
      if (bookId === "new") return;

      const { data: book } = await getMovie(bookId);
      this.setState({ data: this.mapToViewModel(book) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(book) {
    return {
      id: book.id,
      title: book.title,
      genre: book.type,
      author: book.author,
      price: book.price
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("type", "Genre", this.state.genres)}
          {this.renderInput("author", "Author", "number")}
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
