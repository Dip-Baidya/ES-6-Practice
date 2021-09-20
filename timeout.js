function doSomething(){
    console.log(3333);
}
console.log(2222);
//setTimeout(doSomething, 6000); eivabe o likha jai


// eivabe o likha jai
// setTimeout(function() {
//     console.log( 'lazy and waiting');
// }, 4000);

// // eivabe o likha jai
// setTimeout(() => {
//     console.log( 'see  you later');

// }, 6000);


setInterval(function() {
    console.log('Run every time after 1 sec bcz interval time 1000 mili sec');

}, 1000);
console.log(4444);
console.log(5555);
console.log(6666);