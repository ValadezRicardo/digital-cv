import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Competencies from './components/Competencies';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Profile />
            <Competencies />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
};

export default App;
