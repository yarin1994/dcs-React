import React, {Component} from 'react';
import img from '../Images/Scene.png';

class Wallpaper extends Component{
    

    render(){
        return (
            <div>
                <img src={img} alt="scene" style={{width: 1285, height: 800}}/>
            </div>
        );
    }
}
export default Wallpaper;