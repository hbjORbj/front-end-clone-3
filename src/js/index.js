const time = 500,
  images = [];
var i1 = 0,
  i2 = 0,
  i3 = 0,
  i4 = 0,
  i5 = 0,
  i6 = 0,
  i7 = 0,
  i8 = 0,
  i9 = 0,
  i10 = 0;
imageNumber = 1;
var tOut = null;

for (k = 1; k <= 10; k++) {
  images[k] = [];
  for (j = 0; j < 5; j++) {
    images[k][j] = `images/${imageNumber}.jpg`;
    imageNumber++;
  }
}

const changeImg1 = () => {
  document.slide.src = images[1][i1];
  if (i1 < images[1].length - 1) {
    i1++;
  } else {
    i1 = 0;
  }
  tOut = setTimeout("changeImg1()", time);
};
const changeImg2 = () => {
  document.slide.src = images[2][i2];
  if (i2 < images[2].length - 1) {
    i2++;
  } else {
    i2 = 0;
  }
  tOut = setTimeout("changeImg2()", time);
};
const changeImg3 = () => {
  document.slide.src = images[3][i3];
  if (i3 < images[3].length - 1) {
    i3++;
  } else {
    i3 = 0;
  }
  tOut = setTimeout("changeImg3()", time);
};
const changeImg4 = () => {
  document.slide.src = images[4][i4];
  if (i4 < images[4].length - 1) {
    i4++;
  } else {
    i4 = 0;
  }
  tOut = setTimeout("changeImg4()", time);
};
const changeImg5 = () => {
  document.slide.src = images[5][i5];
  if (i5 < images[5].length - 1) {
    i5++;
  } else {
    i5 = 0;
  }
  tOut = setTimeout("changeImg5()", time);
};
const changeImg6 = () => {
  document.slide.src = images[6][i6];
  if (i6 < images[6].length - 1) {
    i6++;
  } else {
    i6 = 0;
  }
  tOut = setTimeout("changeImg6()", time);
};
const changeImg7 = () => {
  document.slide.src = images[7][i7];
  if (i7 < images[7].length - 1) {
    i7++;
  } else {
    i7 = 0;
  }
  tOut = setTimeout("changeImg7()", time);
};
const changeImg8 = () => {
  document.slide.src = images[8][i8];
  if (i8 < images[8].length - 1) {
    i8++;
  } else {
    i8 = 0;
  }
  tOut = setTimeout("changeImg8()", time);
};
const changeImg9 = () => {
  document.slide.src = images[9][i9];
  if (i9 < images[9].length - 1) {
    i9++;
  } else {
    i9 = 0;
  }
  tOut = setTimeout("changeImg9()", time);
};
const changeImg10 = () => {
  document.slide.src = images[10][i10];
  if (i10 < images[10].length - 1) {
    i10++;
  } else {
    i10 = 0;
  }
  tOut = setTimeout("changeImg10()", time);
};

const changeStop = () => {
  clearTimeout(tOut);
  tOut = null;
};
