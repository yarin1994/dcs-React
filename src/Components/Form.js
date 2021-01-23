import React, { useState } from 'react';
import './form.css';
import Button from "@material-ui/core/Button";

const Form = ({ insertUser, detailsUpdate, userInf, btnInf }) => {

    let save = "Save";
    let Update = "Update";

    let btn = save;

    // const [id, setId] = useState('')
    // const [btn, setBtn] = useState('');
    const [date, setDate] = useState('');
    const [userName, setName] = useState('');
    const [city, setCity] = useState('');

  

    if (userInf !== '')
        btn = Update;
    

    const btnSubmit = (e) => {

        if (userInf !== '') {
            console.log('edit');
            // console.log(userInf.id, userInf.date, userInf.userName, userInf.city);
            // console.log(e);
            if (date !== '') {
                userInf.date = date;
            }
            if (userName !== '') {
                userInf.userName = userName;
            }
            if (city !== '') {
                userInf.city = city;
            }
            // console.log(userInf.id, userInf.date, userInf.userName, userInf.city);
            detailsUpdate(userInf, userInf.id);


        } else {
            console.log('create');
            e.preventDefault();
            insertUser(date, userName, city);
            userInf = '';

        }
    }

    return (

        <div className="form">
            <form>
                <input name="date" type="text" defaultValue={userInf ? userInf.date : date} onChange={(e) => setDate(e.target.value)} />
                <input name="name" type="text" defaultValue={userInf ? userInf.userName : userName} onChange={(e) => setName(e.target.value)} />
                <input name="city" type="text" defaultValue={userInf ? userInf.city : city} onChange={(e) => setCity(e.target.value)} />
            </form>
            <Button onClick={btnSubmit} className="button" variant="contained" color="secondary">{btn}
            </Button>
        </div>
    )
}


export default Form;