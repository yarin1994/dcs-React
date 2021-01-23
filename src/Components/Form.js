
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'; //might not be needed beacause we have only one page
// import { context } from './Wallpaper';
import './form.css';
import Button from "@material-ui/core/Button";
// import User from './User';
// import UsersList from './UsersList';
// import Container from '@material-ui/core/Container';


const Form = ({insertUser, users}) => {
    // const {newUser} = useContext(context);
    const [date, setDate] = useState('');
    const [userName, setName] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(date, userName, city);
        insertUser(date, userName, city);
        setDate('');
        setName('');
        setCity('');
    }

    return (
        <div className="form">
            <form>
                {/* <textarea/> */}
                {/* <textarea/>
                <textarea/> */}
                <input type="text"  onChange={(e) => setDate(e.target.value)} required />
                <input type="text"  onChange={(e) => setName(e.target.value)} required />
                <input type="text"  onChange={(e) => setCity(e.target.value)} required />
            </form>
            <Button onClick={handleSubmit} className="button" variant="contained" color="secondary">save</Button>
        </div>
    )
}


export default Form;