$(document).ready(function(){
    $("#stockForm").on("submit", function(event){
        event.preventDefault();
        
        var formData = new FormData(this); // Directly use 'this' to get all form data

        $.ajax({
            url: "insert.php",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                alert(response);
                $("#stockForm")[0].reset();
            },
            error: function() {
                alert("Error while adding item. Check server logs.");
            }
        });
    });
});
