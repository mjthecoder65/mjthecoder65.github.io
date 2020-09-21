const button = document.getElementById('submit');
button.click = event => {
    console.log("Send button was clicked");
    console.log(event);
}