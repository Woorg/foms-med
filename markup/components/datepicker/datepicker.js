import {Datepicker} from 'vanillajs-datepicker/js/main';
import ru from 'vanillajs-datepicker/js/i18n/locales/ru';

export default function datepicker() {
    Object.assign(Datepicker.locales, ru);
    let elem = document.querySelector('.form__field_datepicker input');
    let datepicker = new Datepicker(elem, {
        autohide: true,
        format: 'dd/mm/yyyy',
        language: 'ru',
        todayHighlight: true,
    });


}
