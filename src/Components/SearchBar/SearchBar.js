import React from "react";
import "./SearchBar.css";


export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    const termValue = e.target.value;
    this.setState({term: termValue});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange} />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}