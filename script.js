function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_5rw9t0s", "template_6hrg15b", params).then(function (res){
        alert("Success! " +res.status);
    })
}