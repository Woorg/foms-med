import {Datepicker} from 'vanillajs-datepicker/js/main';
import ru from 'vanillajs-datepicker/js/i18n/locales/ru';

export default function datepicker() {
    let $dates = document.querySelectorAll('.form__datepicker');

    Object.assign(Datepicker.locales, ru);

    for (let i = 0; i < $dates.length; i++) {
        let $date = $dates[i];

        new Datepicker($date, {
            autohide: false,
            format: 'dd/mm/yyyy',
            language: 'ru',
            todayHighlight: true,
            orientation: 'right',
            nextArrow: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C0 8.05887 8.05887 0 18 0H22C31.9411 0 40 8.05887 40 18V22C40 31.9411 31.9411 40 22 40H18C8.05887 40 0 31.9411 0 22V18Z" fill="#1672EC" fill-opacity="0.1"/><path d="M16 14.3432L17.4142 12.929L24.4853 20L17.4142 27.0711L16 25.6569L21.6569 20L16 14.3432Z" fill="#1672EC"/></svg>',
            prevArrow: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C0 8.05887 8.05887 0 18 0H22C31.9411 0 40 8.05887 40 18V22C40 31.9411 31.9411 40 22 40H18C8.05887 40 0 31.9411 0 22V18Z" fill="#1672EC" fill-opacity="0.1"/><path d="M24.4852 14.3432L23.071 12.929L16 20L23.0711 27.0711L24.4853 25.6569L18.8284 20L24.4852 14.3432Z" fill="#1672EC"/></svg>',
        });
    }
}
