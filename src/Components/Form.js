import React, { useEffect, useState } from 'react';
import './form.css';
import Button from "@material-ui/core/Button";

const Form = ({ insertUser, detailsUpdate, userInf }) => {
    const state = {
        saveMode: true,
        save: "Save",
        edit: "Update"

    }
    
    const [id, setId] = useState('')
    const [date, setDate] = useState('');
    const [userName, setName] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        document.id = '';
        document.date = '';
        document.userName = '';
        document.city = '';

    })

    const btnSubmit = (e) => {

        if (userInf !== '') {
            console.log('edit');
            // console.log(userInf.id, userInf.date, userInf.userName, userInf.city);
            // console.log(e);
            if(date !== ''){
                userInf.date = date;
            }
            if(userName !== ''){
                userInf.userName = userName;
            }
            if(city !== ''){
                userInf.city = city;
            }
            // console.log(userInf.id, userInf.date, userInf.userName, userInf.city);
            detailsUpdate(userInf, userInf.id);
            setId('');
            
           
        } else{
            console.log('create');
            e.preventDefault();
            insertUser(date, userName, city);
            userInf ='';

        }
    }

    return (
        <div className="form">
            <form>
                <input name="date" type="text" defaultValue={userInf ? userInf.date : date} onChange={(e) => setDate(e.target.value)}  />
                <input name="name" type="text" defaultValue={userInf ? userInf.userName : userName} onChange={(e) => setName(e.target.value)}  />
                <input name="city" type="text" defaultValue={userInf ? userInf.city : city} onChange={(e) => setCity(e.target.value)}  />
            </form>
            <Button onClick={btnSubmit} className="button" variant="contained" color="secondary">
                <p value={{state}}/>
            </Button>
        </div>
    )
}


export default Form;