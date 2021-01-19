import React, {Component} from 'react';
import img from '../Images/mobel.png';

class Truck extends Component{
    

    render(){
        return (
            <div>
                <img src={img} alt="mobel"/>
            </div>
        );
    }
}
export default Truck;