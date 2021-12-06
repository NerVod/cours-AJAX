const $input = $("input[name='articleNumber']"); 


$input.on("change", function() {
    const valuer = $input.val();
    console.log("changement de valeur" , value);
    
    const url = `https://jsonplaceholder.typicode.com/posts/${value}`

    $.ajax({
        url : url,
        method:"GET",

        success: function(data){
            const $p = $("<p></p>")
            $div.html(`
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            `);
        }
    })
})


