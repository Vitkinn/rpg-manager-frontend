function MascaraSalario(element) {
    if (element.value != '') {
        element.value = 'R$' + element.value + ',00'
    }
}
//---------------------Validação------------------------
// (function () {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })()
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function prepareFrame(name) {

  document.getElementById("iframe").src="../"+name+"/"+name+".html"

}
window.addEventListener("load", () =>{

  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("trasitionend",  () =>{
    document.body.removeChild("loader");
  })
})
