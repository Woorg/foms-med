
export default function selectPicker() {

    $('.selectpicker').selectpicker({
        countSelectedText: function (numSelected, numTotal) {
            return (numSelected === 1) ? '{0} выбран ' : '{0} выбранно ';
        },
        selectedTextFormat: 'count',
        // width: 'auto',
        title: 'Выберите',
        showContent: true,
        dropupAuto: true,
        showTick: false,
        template: {
            caret: '<span class="caret"></span>'
        },
    });

}
