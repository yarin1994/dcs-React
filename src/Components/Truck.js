import React, {Component} from 'react';
import img from '../Images/mobel.png';
import './truck.css';

class Truck extends Component{
    

    render(){
        return (
            <div>
                <img src={img} alt="mobel" className="truck"/>
            </div>
        );
    }
}
export default Truck;