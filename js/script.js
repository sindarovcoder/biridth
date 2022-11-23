function ret() {
  let val = document.querySelector("input").value;
  document.getElementById("num").innerHTML = val;
  let time = new Date(val).getFullYear();
  let timr = new Date(val).getMonth() + 1;
  let tiwe = new Date(val).getDate();
  let tran = `${timr}-${tiwe}-${time}`;
  let perm = new Date();
  let now = new Date(tran);
  let month = Math.floor((perm - now) / 1000 / 60 / 60 / 24);
  document.getElementById("yil").innerHTML = Math.floor(
    (perm - now) / 1000 / 60 / 60 / 24 / 365.25
  );
  document.getElementById("oy").innerHTML = Math.floor(month / 30.4375);
  document.getElementById("kun").innerHTML = Math.floor(
    (perm - now) / 1000 / 60 / 60 / 24
  );
  document.getElementById("soat").innerHTML = Math.floor(
    (perm - now) / 1000 / 60 / 60
  );
  document.getElementById("minut").innerHTML = Math.floor(
    (perm - now) / 1000 / 60
  );
  document.getElementById("sekund").innerHTML = Math.floor((perm - now) / 1000);
  document.getElementById("milsek").innerHTML = Math.floor(perm - now);
}
