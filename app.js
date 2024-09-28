// // console.log("Hello World!");



// // setTimeout(function () {
// //         console.log("console after one second")
// //     }, 1000)


// // setTimeout(hello, 2000)




// // var num = 0

// // var interval = setInterval(function () {
// //     num += 1
// //     console.log(num);

// // }, 1000)




// // function stopIntervals() {
// //     console.log("interval stopped")
// //     clearInterval(interval)
// //     num = 0
// // }





var sec = document.getElementById("seconds")
var minute = document.getElementById("minute")
var hours = document.getElementById("hours")

var seconds;


function start() {

    seconds = setInterval(function () {
        sec.innerHTML++;

    if (sec.innerHTML == 60) {
        sec.innerHTML = "00"; 
        minute.innerHTML++;
    }

    if (minute.innerHTML == 60) {
        minute.innerHTML = "00"
        hours.innerHTML++
    }

  }, 1000);   
}


function stop() {

    clearInterval(seconds);

}


function reset() {

    sec.innerHTML = "00"
    minute.innerHTML = "00"
    hours.innerHTML = "00"
    clearInterval(seconds)

}