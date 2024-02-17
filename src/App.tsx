import './App.css';
import {Header} from './layout/header/Header'
import Main from "./layout/main/Main";
import SectionAboutMe from "./layout/sectionAboutMe/SectionAboutMe";
import WhatIOffer from "./layout/whatioffer/WhatIOffer";
import Portfolio from "./layout/portfolio/Portfolio";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <SectionAboutMe/>
            <WhatIOffer/>
            <Portfolio/>

        </div>
    );
}

export default App;

