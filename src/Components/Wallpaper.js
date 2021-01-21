import React, {Component} from 'react';
import img from '../Images/Scene.png';
import './wallPaper.css';

class Wallpaper extends Component{
    

    render(){
        return (
            <div>
                <img src={img} alt="scene" className="wallpaper"/>
            </div>
        );
    }
}
export default Wallpaper;