$("#btn").click(function () {
    var data = {name: "Daeqwe", city: "Broknl"};
    $.post("www.helloworld.com", data)
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("FAILED!");
        })
});