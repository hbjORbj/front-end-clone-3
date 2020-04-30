var time = 500,
    images = [];
var i = 0,
    imageNumber = 1;
var tOut = null;

for (k = 1; k <= 10; k++) {
  images[k] = [];

  for (j = 0; j < 5; j++) {
    images[k][j] = "images/"+imageNumber+".jpg";
    imageNumber++;
  }
}

var changeImg1 = function changeImg1() {
  document.slide.src = images[1][i];

  if (i < images[1].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg1()", time);
};

var changeImg2 = function changeImg2() {
  document.slide.src = images[2][i];

  if (i < images[2].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg2()", time);
};

var changeImg3 = function changeImg3() {
  document.slide.src = images[3][i];

  if (i < images[3].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg3()", time);
};

var changeImg4 = function changeImg4() {
  document.slide.src = images[4][i];

  if (i < images[4].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg4()", time);
};

var changeImg5 = function changeImg5() {
  document.slide.src = images[5][i];

  if (i < images[5].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg5()", time);
};

var changeImg6 = function changeImg6() {
  document.slide.src = images[6][i];

  if (i < images[6].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg6()", time);
};

var changeImg7 = function changeImg7() {
  document.slide.src = images[7][i];

  if (i < images[7].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg7()", time);
};

var changeImg8 = function changeImg8() {
  document.slide.src = images[8][i];

  if (i < images[8].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg8()", time);
};

var changeImg9 = function changeImg9() {
  document.slide.src = images[9][i];

  if (i < images[9].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg9()", time);
};

var changeImg10 = function changeImg10() {
  document.slide.src = images[10][i];

  if (i < images[10].length - 1) {
    i++;
  } else {
    i = 0;
  }

  tOut = setTimeout("changeImg10()", time);
};

var changeStop = function changeStop() {
  clearTimeout(tOut);
  tOut = null;
  i = 0;
};

