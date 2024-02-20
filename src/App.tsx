import './App.css';
import {Header} from './layout/header/Header'
import Main from "./layout/main/Main";
import SectionAboutMe from "./layout/sectionAboutMe/SectionAboutMe";
import WhatIOffer from "./layout/whatioffer/WhatIOffer";
import Portfolio from "./layout/portfolio/Portfolio";
import Testimonials from "./layout/testimonials/Testimonials";

import BrandsIveWorked from "./layout/brandsIveWorked/BrandsIveWorked";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <SectionAboutMe/>
            <WhatIOffer/>
            <Portfolio/>
            <BrandsIveWorked/>
            <Testimonials/>
        </div>






    );
}

export default App;

