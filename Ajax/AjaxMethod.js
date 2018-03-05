$("#btn").click(function () {
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: 'json'
    }).done(function (data) {
            $('p').text(data[0]);
    }).fail(function () {
        alert("Something Went Wrong");
    });
});