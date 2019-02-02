import React, {Component} from 'react';

import {connect} from 'react-redux';

import {fetchWeather} from "../actions/index";
import {bindActionCreators} from 'redux';

//Container component (Smart component)
class SearchBar extends Component {

    //this is needed because of the input
    constructor(props) {
        super(props);
        this.state = {term: ''};

        //Whenever you use this.functionName on react, you should bind the method here to "this", otherwise it wont know the correct context
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
        console.log(this.state.term);
    }

    onFormSubmit(e) {

        e.preventDefault(); //prevent default submitting action of browser

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
        //we need to go and fetch weather data

    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="form-control"
                    type="search"
                    placeholder="Search for a city"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

/* Redux functions =========================================== */

//Anything returned from this function will end up as props on our container
function mapDispatchToProps(dispatch) {

    //Whenever selectBook is called, the result should be passed to all of our reducers

    return bindActionCreators({fetchWeather}, dispatch);
}

// Promote bookList from a componet to a container, it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(null, mapDispatchToProps)(SearchBar);