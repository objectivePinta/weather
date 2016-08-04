import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export const Kelvin='K';
export const Celsius='C';
export const Fahrenheit='F';

class WeatherList extends Component {

    constructor(props) {
        super(props);
        this.state = {um: Kelvin};
        this.changeUM = this.changeUM.bind(this);
        this.renderWeather = this.renderWeather.bind(this);
    }

    changeUM(event) {
        this.setState({um:event.target.value});
        console.log("state:"+this.state.um);
    }


    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
        console.log(temps);
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} um={this.state.um} color="orange"/></td>
                <td><Chart data={pressures} um={this.state.um} color="red"/></td>
                <td><Chart data={humidity} um={this.state.um} color="black"/></td>
            </tr>
        );


    }

    render() {
        return (
            <div>
                <div>
                    <form onChange={this.changeUM}>
                    <label className="radio-inline"><input  type="radio" value={Kelvin} name="optradio"/>Kelvin</label>
                    <label className="radio-inline"><input  type="radio" value={Celsius} name="optradio"/>Celsius</label>
                    <label className="radio-inline"><input type="radio" value={Fahrenheit} name="optradio"/>Fahrenheit</label>
                    </form>
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather}; //weather was assigned in combineReducers({weather:WeatherReducer
}

export default connect(mapStateToProps)(WeatherList);