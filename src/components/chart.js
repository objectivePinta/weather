import React from 'react';
import {Sparklines,SparklinesLine} from 'react-sparklines';
import {SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';
import {Celsius,Kelvin,Fahrenheit} from '../containers/weather_list';

function average(data,um) {
    let result = 0;
    console.log("um:"+um);
    switch (um) {
        case 'C':result = _.round(_.sum(data) / data.length - 272.15); break;
        case 'K': result= _.round(_.sum(data) / data.length); break;
        case 'F': result = _.round(_.sum(data) / data.length - 457.87); break;
    }
    console.log("result:"+result);
    return result;
}

export default (props) => {
    return (
        <div>
            <Sparklines height={50} width={150} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data,props.um)} {props.um}</div>
        </div>
    );
}


