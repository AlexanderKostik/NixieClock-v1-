function displaytime() {
  let digitPicture = ["./img/0.png", "./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png", "./img/5.png", "./img/6.png", "./img/7.png", "./img/8.png", "./img/9.png"];

  const tensOfHours = document.getElementById('tensOfHours');
  const unitOfHours = document.getElementById('unitOfHours');
  const tensOfMinuts = document.getElementById('tensOfMinuts');
  const unitOfMinuts = document.getElementById('unitOfMinuts');
  const tensOfSeconds = document.getElementById('tensOfSeconds');
  const unitOfSeconds = document.getElementById('unitOfSeconds');

  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  //---
  (hour < 10) ? tensOfHours.setAttribute('src', digitPicture[0]) : tensOfHours.setAttribute('src', digitPicture[Math.floor(hour / 10)]);
  unitOfHours.setAttribute('src', digitPicture[hour % 10]);

  (min < 10) ? tensOfMinuts.setAttribute('src', digitPicture[0]) : tensOfMinuts.setAttribute('src', digitPicture[Math.floor(min / 10)]);
  unitOfMinuts.setAttribute('src', digitPicture[min % 10]);

  (sec < 10) ? tensOfSeconds.setAttribute('src', digitPicture[0]) : tensOfSeconds.setAttribute('src', digitPicture[Math.floor(sec / 10)]);
  unitOfSeconds.setAttribute('src', digitPicture[sec % 10]);


  window.setTimeout(displaytime, 1000);

}

displaytime();