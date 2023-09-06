import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
