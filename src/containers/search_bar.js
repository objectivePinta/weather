import React, {Component} from 'react';
//container setup:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

 class SearchBar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {term:''};

        //This has a function onInputChange, bind it to SearchBar and replace the existent function with it
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term:event.target.value});
        console.log(event.target.value);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}/>
              <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
                  </span>
            </form>
        );
    }
}

//container setup:
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch); //make sure that action flows through middleware and reducers
}

//container setup:
export default connect(null,mapDispatchToProps)(SearchBar); //we're passing null because a function goes as a 2nd argument -> null was for state, which we don't need in this case

