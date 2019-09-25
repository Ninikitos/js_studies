let val;

const toDay = new Date();
let bDay = new Date('03-21-1990');
let bDay2 = new Date('March 10 1990');
let bDay3 = new Date('03/21/1990');

val = bDay;

val = toDay.getMonth();
val = toDay.getDate();
val = toDay.getDay();
val = toDay.getFullYear();
val = toDay.getHours();
val = toDay.getMilliseconds();

bDay.setMonth(4);


console.log(bDay);