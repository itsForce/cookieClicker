var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};



if (clicks > 10) {
	document.getElementsByID("cookie1")[0].src = "http://www.advocate-online.net/wp-content/uploads/2019/11/the-shining_-1024x575.jpg";
}

