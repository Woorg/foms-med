export function validateElements() {

    window.addEventListener('load', function () {


        let form = document.querySelector('.form_need_validate');

        form.addEventListener('submit', function (event) {

            if (form.checkValidity() === false) {

                event.preventDefault();
                event.stopPropagation();

            }

            form.classList.add('was-validated');


        }, false);


    }, false);




}
