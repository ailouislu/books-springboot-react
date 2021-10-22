import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import AuthorsTable from "./AuthorsTable";
import SearchBox from "./SearchBox";
import { getAuthors, deleteAuthor } from "../services/authorService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";


class Authors extends Component {
  state = {
    authors: [],
    genres: "",
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getGenres()
                      .then((response) =>response.data);
    const genres = [{ id: "", name: "All Genres" }, ...data];

    const { data: authors } = await getAuthors()
                            .then((response) =>response.data);
    this.setState({ authors, genres });
  }

  handleDelete = async author => {
    const originalAuthors = this.state.authors;
    const authors = originalAuthors.filter(b => b.id !== author.id);
    this.setState({ authors });

    try {
      await deleteAuthor(author.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This author has already been deleted.");

      this.setState({ authors: originalAuthors });
    }
  };

  handleLike = author => {
    const authors = [...this.state.authors];
    const index = authors.indexOf(author);
    authors[index] = { ...authors[index] };
    authors[index].liked = !authors[index].liked;
    this.setState({ authors });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      authors: allAuthors
    } = this.state;

    let filtered = allAuthors;
    if (searchQuery)
      filtered = allAuthors.filter(m =>
        m.fullName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre.name !== "All Genres")
      filtered = allAuthors.filter(m => m.type === selectedGenre.name);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const authors = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: authors };
  };

  render() {
    const { length: count } = this.state.authors;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    if (count === 0) return <p>There are no authors in the database.</p>;

    const { totalCount, data: authors } = this.getPagedData();

    return (
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item active>Authors</Breadcrumb.Item>
        </Breadcrumb>
      <div className="row">
        <div className="col-sm-4">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        
        <div className="col-sm-8">
          {user && (
            <Link
              to="/authors/new"
              className="btn btn-primary"
            >
              New Author
            </Link>
          )}
          <p>Showing {totalCount} authors in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <AuthorsTable
            authors={authors}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Authors;
