// var unit_01 = {
//     id_num : 1,
//     vector : {x: 0, y: 10, l: 10},
//     xy : {x:350, y:350},
//     diameter : 100
// }

// var unit_02 = {
//     id_num : 2,
//     vector : {x: 0, y: 0, l: 0},
//     xy : {x:0, y:0},
//     diameter : 100
// }


var keyset = {};
keyset.r = {x: 2, y: 0};
keyset.l = {x: -2, y: 0};
keyset.u = {x: 0, y: 2};
keyset.d = {x: 0, y: -2};


// var units = document.getElementsByClassName("unit");


//-----------------units------------------------------


var unit = {};
unit.prototype = {id_num: 0, vector: 0, xy: 0, diameter: 0};
unit.prototype.id_num = 0;
unit.prototype.vector = {x: 0, y: 10, l: 10};
unit.prototype.xy = {x: 300, y: 300};
unit.prototype.diameter = 100;


//------------------ genarater---------------------------


var units = {t:1};

function genarator (apple) {
    if (apple == 1) {
        var num = units.length
        units.num = {}
    }
}




//---------------vector_sum-----------------------------

var head_vector = function (target, keyset_direction) {
    target.vector.x += keyset_direction.x;
    target.vector.y += keyset_direction.y;
    var radian = Math.atan2(target.vector.y, target.vector.x);
    target.vector.x = target.vector.l * Math.cos(radian);
    target.vector.y = target.vector.l * Math.sin(radian);
}



var follow_vector = function (follower, keyset_direction) {
    var n = follower.id_num;








    target.vector.x += keyset_direction.x;
    target.vector.y += keyset_direction.y;
    var radian = Math.atan2(target.vector.y, target.vector.x);
    target.vector.x = target.vector.l * Math.cos(radian);
    target.vector.y = target.vector.l * Math.sin(radian);
}




//------------------window_angle_key---------------------



// function key_control (event){

//     switch (event.keyCode) {
//         case 40:
//         vector_sum(defalut_vector, keyset.d);
//         walking(units[1]);
//         console.log("AD",defalut_vector);
//         break;
//         case 38:
//         vector_sum(defalut_vector, keyset.u);
//         walking(units[1]);
//         console.log("AU",defalut_vector);
//           break;
//         case 39:
//         vector_sum(defalut_vector, keyset.l);
//         walking(units[1]);
//         console.log("AL",defalut_vector);
//           break;
//         case 37:
//         vector_sum(defalut_vector, keyset.r);
//         walking(units[1]);
//         console.log("AR",defalut_vector);
//           break;
//         default:
//           return;
// }}


// window.addEventListener("keydown",key_control())




// ----------------test_button------------------------ 

// var button = document.getElementById("button");

// button.addEventListener("click", );


//----------- walking --------------------------------------

function walking (a) {
    defalut_xy.y = defalut_xy.y - defalut_vector.y;
    defalut_xy.x = defalut_xy.x - defalut_vector.x;
    a.style.top = defalut_xy.y + "px";
    a.style.left = defalut_xy.x + "px";
}


// id (number)
// count 
// if(count > id) {
//     + vector 
// }
// id object { x:, y:, vector_x: , vector_y:, id_num:, }