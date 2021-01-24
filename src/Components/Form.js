import React, {  useState } from 'react';
import './form.css';
import Button from "@material-ui/core/Button";

const Form = ({ insertUser, detailsUpdate, userInf, setUser}) => {

    // useEffect((userInf, date, userName, city) => {
    //     window.addEventListener("")
    //     return () => {
    //         <div className="form">
    //             <form>
    //                 <input name="date" type="text" defaultValue={userInf ? userInf.date : date} onChange={(e) => setDate(e.target.value)} />
    //                 <input name="name" type="text" defaultValue={userInf ? userInf.userName : userName} onChange={(e) => setName(e.target.value)} />
    //                 <input name="city" type="text" defaultValue={userInf ? userInf.city : city} onChange={(e) => setCity(e.target.value)} />
    //             </form>
    //         </div>
    //     }

    // }, [userInf.date, userInf.name, userInf.city, userInf]);

    const [date, setDate] = useState('');
    const [userName, setName] = useState('');
    const [city, setCity] = useState('');

    const btnSubmit = (e) => {

        if (userInf !== '') {
            console.log('edit');
            if (date !== '') {
                userInf.date = date;
            }
            if (userName !== '') {
                userInf.userName = userName;
            }
            if (city !== '') {
                userInf.city = city;
            }
            detailsUpdate(userInf, userInf.id);

        } else {
            console.log('create');
            // e.preventDefault();
            insertUser(date, userName, city);
        }
        // setUser({id:"", date:"", userName:"", city:""});
    }

    return (

        <div className="form">
            <form>
                <input name="date" type="text" defaultValue={userInf ? userInf.date : date} onChange={(e) => setDate(e.target.value)} />
                <input name="name" type="text" defaultValue={userInf ? userInf.userName : userName} onChange={(e) => setName(e.target.value)} />
                <input name="city" type="text" defaultValue={userInf ? userInf.city : city}onChange={(e) => setCity(e.target.value)} />
            </form>
            <Button onClick={btnSubmit} className="button" variant="contained" color="secondary">{userInf.id ? "Update" : "Save"}
            </Button>
        </div>
    )
}

export default Form;