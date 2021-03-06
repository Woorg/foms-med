import svg4everybody from 'svg4everybody';
import header from '../../components/header/header';
import sectionNavToggle from '../../components/section-nav/section-nav';
import {slider, sliderMob, sliderVideo, sliderVideoMob} from '../../components/slider/slider';
// import tabs from '../../components/tabs/tabs';

// import about from '../../components/about/about';

import Nav from '../../components/nav/nav';

import SearchForm from '../../components/search-form/search-form';


import {departments} from '../../components/departments/departments';

import {mapArea} from '../../components/map-area/map-area';

import footerNavToggle from '../../components/footer/footer';
import LazyLoad from 'vanilla-lazyload';

import {pageWidget} from '../../components/page-widget/page-widget';

import datepicker from '../../components/datepicker/datepicker';

import select from '../../components/select/select';


import {validateElements} from '../../components/elements/elements';


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

    // const $mapOrganizationsTabs = document.querySelector('.map-organizations');

    // if ( $mapOrganizationsTabs) {
    //     tabs();
    // }

    /*
        Departments
    */

    departments();

    /*
        Map area
    */

    mapArea();

    /*
        Datepicker
    */

    const $datepickerField = document.querySelector('.form__datepicker');
    if ( $datepickerField ) {
        datepicker();
    }

    //     Object.assign(Datepicker.locales, ru);

    //     const elem = document.querySelector('.input[name="date"]');

    //     const datepicker = new Datepicker(elem, {
    //         autohide: false,
    //         format: 'dd/mm/yyyy',
    //         language: 'ru',
    //         todayHighlight: true,
    //     });
    // }

    /*
        Selectpicker
    */

    const $selectpickerField = document.querySelector('.selectpicker');

    if ( $selectpickerField ) {
        select();
    }


    /*
        map region picker
    */






    /*
        Footer nav toggle
    */

    footerNavToggle();

    /*
        Validate elements
    */

    const $formNeedValidate = document.querySelector('.form_need_validate');

    if ( $formNeedValidate ) {
        validateElements();
    }

    /*
        Page widget
    */

    pageWidget([
        'index',
        'news',
        'article',
        'documents',
        'about',
        'policy-check',
        'policy-check-1',
        'policy-valid',
        'policy-invalid',
        'question',
        'contacts',
        'management',
        '404',
        'universal'

    ]);


});
