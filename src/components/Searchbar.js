import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    //onInputChange(e) { onInputChange eller lign. er en standard måde at kalde dine functions, der håndterer eventhandlers, du vil derfor ofte se onInputChange, onInputClick og onInputSubmit eller et 'handle' foran istedet for 'on'
        //e.target.value;
    //}
    render() {
        return (
        <div className=' ui segment'>
            <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='field'>
                    <label>
                        Search on an author or a book
                    </label>
                <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }
}

// det er meget vigtigt at forstå hvornår du skal bruge this.onInputChange() og this.onInputChange. Hvis du tilføjer () så vil functionen blive kaldt lige så snart, at app'en render, mens hvis du ikke gør det, så er det først, ved onClick eller onchange eller onSubmit i dit input field, at der sker noget. Meget vigtig forskel og common error.
export default SearchBar;