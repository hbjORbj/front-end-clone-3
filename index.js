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

var images1 = [],
  images2 = [],
  images3 = [],
  images4 = [],
  images5 = [],
  images6 = [],
  images7 = [],
  images8 = [],
  images9 = [],
  images10 = [];

var time = 1000;
var tOut1 = null,
  tOut2 = null,
  tOut3 = null,
  tOut4 = null,
  tOut5 = null,
  tOut6 = null,
  tOut7 = null,
  tOut8 = null,
  tOut9 = null,
  tOut10 = null;

images1[0] = "dist/css/images/1.jpg";
images1[1] = "dist/css/images/2.jpg";
images1[2] = "dist/css/images/3.jpg";

images2[0] = "dist/css/images/4.jpg";
images2[1] = "dist/css/images/5.jpg";
images2[2] = "dist/css/images/6.jpg";

images3[0] = "dist/css/images/7.jpg";
images3[1] = "dist/css/images/8.jpg";

images4[0] = "dist/css/images/9.jpg";
images4[1] = "dist/css/images/10.jpg";

images5[0] = "dist/css/images/11.jpg";
images5[1] = "dist/css/images/12.jpg";

images6[0] = "dist/css/images/13.jpg";
images6[1] = "dist/css/images/14.jpg";

images7[0] = "dist/css/images/15.jpg";
images7[1] = "dist/css/images/16.jpg";

images8[0] = "dist/css/images/17.jpg";
images8[1] = "dist/css/images/18.jpg";
images8[2] = "dist/css/images/19.jpg";

images9[0] = "dist/css/images/20.jpg";
images9[1] = "dist/css/images/21.jpg";
images9[2] = "dist/css/images/22.jpg";

images10[0] = "dist/css/images/23.jpg";
images10[1] = "dist/css/images/24.jpg";
images10[2] = "dist/css/images/25.jpg";

function changeImg1() {
  document.slide.src = images1[i1];
  if (i1 < images1.length - 1) {
    i1++;
  } else {
    i1 = 0;
  }
  tOut1 = setTimeout("changeImg1()", time);
}
function changeImg2() {
  document.slide.src = images2[i2];
  if (i2 < images2.length - 1) {
    i2++;
  } else {
    i2 = 0;
  }
  tOut2 = setTimeout("changeImg2()", time);
}
function changeImg3() {
  document.slide.src = images3[i3];
  if (i3 < images3.length - 1) {
    i3++;
  } else {
    i3 = 0;
  }
  tOut3 = setTimeout("changeImg3()", time);
}
function changeImg4() {
  document.slide.src = images4[i4];
  if (i4 < images4.length - 1) {
    i4++;
  } else {
    i4 = 0;
  }
  tOut4 = setTimeout("changeImg4()", time);
}
function changeImg5() {
  document.slide.src = images5[i5];
  if (i5 < images5.length - 1) {
    i5++;
  } else {
    i5 = 0;
  }
  tOut5 = setTimeout("changeImg5()", time);
}
function changeImg6() {
  document.slide.src = images6[i6];
  if (i6 < images6.length - 1) {
    i6++;
  } else {
    i6 = 0;
  }
  tOut6 = setTimeout("changeImg6()", time);
}
function changeImg7() {
  document.slide.src = images7[i7];
  if (i7 < images7.length - 1) {
    i7++;
  } else {
    i7 = 0;
  }
  tOut7 = setTimeout("changeImg7()", time);
}
function changeImg8() {
  document.slide.src = images8[i8];
  if (i8 < images8.length - 1) {
    i8++;
  } else {
    i8 = 0;
  }
  tOut8 = setTimeout("changeImg8()", time);
}
function changeImg9() {
  document.slide.src = images9[i9];
  if (i9 < images9.length - 1) {
    i9++;
  } else {
    i9 = 0;
  }
  tOut9 = setTimeout("changeImg9()", time);
}
function changeImg10() {
  document.slide.src = images10[i10];
  if (i10 < images10.length - 1) {
    i10++;
  } else {
    i10 = 0;
  }
  tOut10 = setTimeout("changeImg10()", time);
}

function changeStop1() {
  clearTimeout(tOut1);
  i1 = 0;
  tOut1 = null;
}
function changeStop2() {
  clearTimeout(tOut2);
  i2 = 0;
  tOut2 = null;
}
function changeStop3() {
  clearTimeout(tOut3);
  i3 = 0;
  tOut3 = null;
}
function changeStop4() {
  clearTimeout(tOut4);
  i4 = 0;
  tOut4 = null;
}
function changeStop5() {
  clearTimeout(tOut5);
  i5 = 0;
  tOut5 = null;
}
function changeStop6() {
  clearTimeout(tOut6);
  i6 = 0;
  tOut6 = null;
}
function changeStop7() {
  clearTimeout(tOut7);
  i7 = 0;
  tOut7 = null;
}
function changeStop8() {
  clearTimeout(tOut8);
  i8 = 0;
  tOut8 = null;
}
function changeStop9() {
  clearTimeout(tOut9);
  i9 = 0;
  tOut9 = null;
}
function changeStop10() {
  clearTimeout(tOut10);
  i10 = 0;
  tOut10 = null;
}
