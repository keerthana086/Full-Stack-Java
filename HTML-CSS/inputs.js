function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerText = "Good_Afternoon";
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="/HTML-CSS/files/bulbon.jpeg";
}
function turn_off(){
    let light=document.getElementById("off");
    light.src="/HTML-CSS/files/bulb off.jpeg";
}
function Change_Colour()
{
    let colour = document.getElementsById("cap");
    colour.style.backgroundColour = "Black";
     let text1 = document.getElementsById("data");
    text1.style.color = "White";
     let text2 = document.getElementsById("greet");
    text2.style.backgroundColour = "greet";
}