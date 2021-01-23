
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'; //might not be needed beacause we have only one page
// import { context } from './Wallpaper';
import './form.css';
import Button from "@material-ui/core/Button";
import User from './User';
import UsersList from './UsersList';
// import Container from '@material-ui/core/Container';


const Form = ({newUser}) => {
    // const {newUser} = useContext(context);
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(date, name, city);
        newUser(date, name, city);
        setDate('');
        setName('');
        setCity('');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                {/* <textarea/> */}
                {/* <textarea/>
                <textarea/> */}
                <input type="text" value={date} defaultValue={User.date?UsersList.date:date} onChange={(e) => setDate(e.target.value)} required />
                <input type="text" value={name} efaultValue={User.name?UsersList.name:name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={city} efaultValue={User.city?UsersList.city:city} onChange={(e) => setCity(e.target.value)} required />
            </form>
            <Button onClick={handleSubmit} className="button" variant="contained" color="secondary">save</Button>
        </div>
    )
}


export default Form;