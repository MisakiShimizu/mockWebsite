import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/navigation/Header';
import './styles/sass/style.css';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
