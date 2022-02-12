const get_canvas = function () {
  var q0W, S0W, P0W;
  q0W = document.createElement("canvas");
  if (q0W.getContext) {
    try {
      S0W = [];
      S0W = [];
      q0W.width = 2000;
      q0W.height = 200;
      q0W.style.display = "inline";
      P0W = q0W.getContext("2d");
      if (!P0W) return false;
      P0W.rect(0, 0, 10, 10);
      P0W.rect(2, 2, 6, 6);
      S0W.push(
        P0W.isPointInPath(5, 5, "evenodd") === false
          ? "canvas winding:yes"
          : "canvas winding:no"
      );
      P0W.textBaseline = "alphabetic";
      P0W.fillStyle = "#f60";
      P0W.fillRect(125, 1, 62, 20);
      P0W.fillStyle = "#069";
      P0W.font = "11pt no-real-font-123";
      P0W.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
      P0W.fillStyle = "rgba(102, 204, 0, 0.2)";
      P0W.font = "18pt Arial";
      P0W.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
      P0W.globalCompositeOperation = "multiply";
      P0W.fillStyle = "rgb(255,0,255)";
      P0W.beginPath();
      P0W.arc(50, 50, 50, 0, Math.PI * 2, true);
      P0W.closePath();
      P0W.fill();
      P0W.fillStyle = "rgb(0,255,255)";
      P0W.beginPath();
      P0W.arc(100, 50, 50, 0, Math.PI * 2, true);
      P0W.closePath();
      P0W.fill();
      P0W.fillStyle = "rgb(255,255,0)";
      P0W.beginPath();
      P0W.arc(75, 100, 50, 0, Math.PI * 2, true);
      P0W.closePath();
      P0W.fill();
      P0W.fillStyle = "rgb(255,0,255)";
      P0W.arc(75, 75, 75, 0, Math.PI * 2, true);
      P0W.arc(75, 75, 25, 0, Math.PI * 2, true);
      P0W.fill("evenodd");
      S0W.push("canvas fp:" + q0W.toDataURL());
      return S0W.join("~");
    } catch (o0W) {
      return false;
    }
  } else return false;
};
const gen_cfp = function (fb) {
  fb = fb.split("");
  return fb.reduce(function (p8W, z8W) {
    p8W = (p8W << 5) - p8W + z8W.charCodeAt(0);
    return p8W & p8W;
  }, 0);
};

const get_fb = function () {
  canvas_fb = get_canvas();
  if (!canvas_fb) {
    return false;
  }
  return gen_cfp(canvas_fb);
};
const fb = get_fb();
window.addEventListener("load", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://103.178.229.48/api/add-fp");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  var data = {
    value: fb + "",
  };
  xhr.send(JSON.stringify(data));
});
