$("#btn").click(function () {
   $.getJSON("http://random.cat/meow")
       .done(function (data) {
           $("#catImg").attr("src", data.file);
       })
       .fail(function () {
           console.log("FAILED");
       })
});