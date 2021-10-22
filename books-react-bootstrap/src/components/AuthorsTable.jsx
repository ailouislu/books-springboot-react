import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/Table";
import auth from "../services/authService";

class AuthorsTable extends Component {
  columns = [
    {
      path: "fullName",
      label: "Full Name",
      content: author => <Link to={`/authors/${author.id}`}>{author.fullName}</Link>
    },
    { path: "type", label: "Genres" },
    { path: "books", label: "Books" },
    { path: "yearsActive", label: "Years Active" },
  ];

  deleteColumn = {
    key: "delete",
    content: author => (
      <button
        onClick={() => this.props.onDelete(author)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { authors, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={authors}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default AuthorsTable;
