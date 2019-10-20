import React from 'react';
import SearchBar from './components/Searchbar';
import Books from './worker/api/Books';
import BookList from './components/BooksList';

class App extends React.Component {
    state={ books:[]};
    
    onSearchSubmit = async (term) => {
        const response = await Books.get('resources/works?', {
            params: {search: term, start: 0, max: 5, expandLevel: 1}
        })
                this.setState({books: response.data.work})
                console.log(response.data.work)
                
        };
        render() {
            return (
                <div>
                    <div className='ui container' style={{marginTop: '20px'}}>
                    <SearchBar  onSubmit={this.onSearchSubmit}/>
                    </div>
                    <div className="ui segment">
                    <BookList
                    books={this.state.books}/>
                    </div>
                </div>
                );
            }
        }
        // næste opgave: kom ind i et array og træk informationen ud, så den kommer op på skærmen.
        export default App;