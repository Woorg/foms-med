import svg4everybody from 'svg4everybody';
import header from '../../components/header/header';
import sectionNavToggle from '../../components/section-nav/section-nav';
import {slider, sliderMob, sliderVideo, sliderVideoMob} from '../../components/slider/slider';
import tabs from '../../components/tabs/tabs';

// import about from '../../components/about/about';

import Nav from '../../components/nav/nav';

import SearchForm from '../../components/search-form/search-form';


import {departments} from '../../components/departments/departments';

import {mapArea} from '../../components/map-area/map-area';

import footerNavToggle from '../../components/footer/footer';
import LazyLoad from 'vanilla-lazyload';

import {pageWidget} from '../../components/page-widget/page-widget';

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
        Nav
    */

    new Nav();

    /*
        Search form
    */

    new SearchForm();

    /*
        Section nav
    */

    // sectionNavToggle();


    /*
       Slider
    */

    const $sliderDesktop = document.querySelector('.slider_desktop');
    if ( $sliderDesktop ) {
        slider();
        sliderVideo();
    }

    const $sliderMob = document.querySelector('.slider_mob');
    if ( $sliderMob ) {
        sliderMob();
        sliderVideoMob();
    }

    /*
        Tabs
    */

    const $mapOrganizationsTabs = document.querySelector('.map-organizations');

    if ( $mapOrganizationsTabs) {
        tabs();
    }


    /*
        Departments
    */

    departments();

    /*
        Map area
    */

    mapArea();

    /*
        Footer nav toggle
    */

    footerNavToggle();

    /*
        Page widget
    */

    pageWidget([
        'index',
        'news'
    ]);


});
