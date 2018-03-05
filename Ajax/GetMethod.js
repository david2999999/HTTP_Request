$("#btn").click(function () {
   $.get('https://api.github.com/users/david2999999')
       .done(function (data) {
           console.log(data);
           })
       .fail(function () {
               console.log("ERROR");
       });
});