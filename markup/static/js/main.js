import svg4everybody from 'svg4everybody';
import header from '../../components/header/header';
import sectionNavToggle from '../../components/section-nav/section-nav';
import {slider} from '../../components/slider/slider';
import {sliderVideo} from '../../components/slider/slider';

import about from '../../components/about/about';

import Nav from '../../components/nav/nav';

import tabs from '../../components/tabs/tabs';
import {departments} from '../../components/departments/departments';

import LazyLoad from 'vanilla-lazyload';


document.addEventListener('DOMContentLoaded', function (event) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #2948ff',
        'color: #fff',
        'line-height: 1.56',
        'font-size: 16px',
    ].join('');

    console.log('%c Developed by igor gorlov https://igorlov.ru', styles);


    /*
        Lazyload images
    */

    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        threshold: 0,
        // load_delay: 300,
        use_native: true
    });

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    /*
        Header video
     */

    // header();



    /*
        Nav
    */

    // new Nav();


    sectionNavToggle();


    slider('.slider');

    sliderVideo();


    /*
        Tabs
    */

    tabs();


    /*
        Departments
    */

    departments();


});
