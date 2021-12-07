export function mapArea() {

    $('.maparea').mouseover(function () {

        let id = $(this).attr('data-id');

        let arr = id.split('_');

        id = arr[1];

        $('.reg_' + id).fadeIn(0);

        let alt = $(this).attr('alt');

        // console.log(alt);

        // photoRegion(id);

    }).mouseout(function () {

        let id = $(this).attr('data-id');

        let arr = id.split('_');

        id = arr[1];

        $('.reg_' + id).fadeOut(0);

    });
}
