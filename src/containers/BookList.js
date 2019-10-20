import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {
    renderList = () => {
        return this.props.books.map((book)=> {
            return <li 
            key={book.title}
            onClick={()=>this.props.selectBook(book)} 
            className="list-group-item"
            >
            {book.title}
            </li>
        })
    }
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books
    }
}
const mapDispatchToProps = {
        selectBook,
}
export default connect(mapStateToProps, {selectBook})(BookList);