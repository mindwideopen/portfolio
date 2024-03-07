import './App.css';
import {Header} from './layout/header/Header'
import Main from "./layout/main/Main";
import SectionAboutMe from "./layout/sectionAboutMe/SectionAboutMe";
import WhatIOffer from "./layout/whatioffer/WhatIOffer";
import Portfolio from "./layout/portfolio/Portfolio";
import Testimonials from "./layout/testimonials/Testimonials";

import BrandsIveWorked from "./layout/brandsIveWorked/BrandsIveWorked";
import {BlogPosts} from "./layout/blogPosts/BlogPosts";


function App() {
    return (
        <div>
            <Header/>
            <SectionAboutMe/>
            <WhatIOffer/>
            <Portfolio/>
            <BrandsIveWorked/>
            <Testimonials/>
            <BlogPosts/>

        </div>






    );
}

export default App;

