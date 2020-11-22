var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;
var nasa_bg_img_array = ["mars.jpg", "nasa_1.jfif", "nasa_2.jpg", "nasa_3.jpg", "nasa_4.jpg", "nasa_5.jpg"];
var random_number = Math.floor(Math.random() * 6);
console.log(random_number);
var background_img = nasa_bg_img_array[random_number];
console.log("background_img = " + background_img);
var rover_img = "rover.png";
var background_imgTag, rover_imgTag;
var key_pressed;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_img;
}

function upload_background() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == "38") {
        up();
        console.log("Up key is pressed");
    }
    if(key_pressed == "40") {
        down();
        console.log("Down key is pressed");
    }
    if(key_pressed == "37") {
        left();
        console.log("Left key is pressed");
    }
    if(key_pressed == "39") {
        right();
        console.log("Right key is pressed");
    }
    
}

function up(){
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " , y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " , y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function right(){
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " , y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function left(){
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " , y = " + rover_y);
        upload_background();
        upload_rover();
    }
}