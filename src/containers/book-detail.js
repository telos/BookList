import React, { Component } from 'react';

import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList above
  return {
    book: state.activeBook
  };
}

// Promote BookList from a component to a container - it needs to know about this new dispatch
// method, selectBook, to make it available as a prop
export default connect(mapStateToProps)(BookDetail)
