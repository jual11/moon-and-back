import React from 'react';
import '../css/Search.css';

class Search extends React.Component {
    state= {
        term: '147713712'
    }

    OnFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div>
                <form className='form' onSubmit={this.OnFormSubmit}>
                    <label className='label'>Sisesta eseme id:</label>
                    <input
                        value={this.state.term}
                        onChange={(e) => this.setState({term:e.target.value})}
                        className="input"
                    />
                    <button className='button' type='submit'>Otsi</button>
                </form>
            </div>
        );
    }
}

export default Search;