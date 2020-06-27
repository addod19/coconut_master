import React from 'react';

import  slide1 from '../../Images/coconut.svg';
import  slide2 from '../../Images/coco6.jpg';
import  slide3 from '../../Images/coco9.png';
import  slide4 from '../../Images/coco1.jpg';
import  slide5 from '../../Images/coco5.jpg';

import  Coconut1 from '../../Images/coconut.svg';
import  Coconut2 from '../../Images/coco6.jpg';
import  Coconut3 from '../../Images/coco9.png';
import  Coconut4 from '../../Images/coco1.jpg';
import  Coconut5 from '../../Images/coco5.jpg';
import  Coconut6 from '../../Images/coco01.jpg';

import './Home.css';
import Slideshow from "./SlideShow";
import './Custom.css';

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4, slide5];

const Home = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 advert">
                <div className={s.container}>
                <div className={s.header}>Coconut Master</div>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
                <div className={s.footer}>Built with React - Daniel</div>
            </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut1} alt="" className="imgHeight"/>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut2} alt="" className="imgHeight"/>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut3} alt="" className="imgHeight"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut4} alt="" className="imgHeight"/>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut5} alt="" className="imgHeight"/>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src={Coconut6} alt="" className="imgHeight"/>
                </div>
            </div>
        </div>
    );
}
  
export default Home;