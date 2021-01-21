// import Container from '@material-ui/core/Container';
// import { Grid, Paper } from '@material-ui/core';
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'; //might not be needed beacause we have only one page
import './form.css';
import Button from "@material-ui/core/Button";
// import Container from '@material-ui/core/Container';

class Form extends Component {
    
    render() {

        return (
            <div className="form">
                <form>
                    <textarea/>
                    <textarea/>
                    <textarea/>
                </form>
                <Button className="button" variant="contained" color="secondary">save</Button>
            </div>
        )
    }
}

export default Form;