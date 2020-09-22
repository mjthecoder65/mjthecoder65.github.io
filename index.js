
 const button = document.getElementById('submit');
 button.addEventListener('click', submit)
 function submit(event){
     const name = document.getElementById('name');
     window.console.log(name.value);
 }