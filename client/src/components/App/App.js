import React, {useState, useEffect} from 'react';
import {AppWrapper} from "./App.styled";
import axios from "axios";

function App() {
    let [name, setName] = useState('');

    return (
        <AppWrapper>
            <div>
                שם מלא:
                <input type={'text'} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                אימייל:
                <input type={'text'} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                נייד:
                <input type={'text'} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input type={'submit'} value={'שלח'} onClick={() => onSubmit(name)} />
            </div>
        </AppWrapper>
    )
}

function onSubmit(name) {
    axios.post('submitLead', {})
        .then(res => {
            console.log(res.data);
            window.location.href = 'https://pua.ravpage.co.il/AnyTalk_Landing';
        })
        .catch(() => console.log('ERROR'));
}

export default App;
