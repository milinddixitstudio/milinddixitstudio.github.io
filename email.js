(function(){

emailjs.init("ZGZNv447PhVYVCyDE")

})()

document.getElementById("contact-form")
.addEventListener("submit",function(e){

e.preventDefault()

emailjs.sendForm(
"service_a4b3zu3",
"template_ioithmv",
this
)

.then(function(){

alert("Message sent successfully!")

})

})


