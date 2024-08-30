import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import css from './App.css';

export default class App extends React.Component {
    render(){
        return <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes> 
        </div>
    }
};

