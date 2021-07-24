import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;