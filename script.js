const endDate = document.getElementById("end-date");
const input = document.querySelectorAll("input");

const endDt = "11 February 2025 11:43 PM";
endDate.innerHTML = endDt;

function clock() {
  const end = new Date(endDt);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  input[0].value = Math.floor(diff / (24 * 3600));
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff % 60);
}

setInterval(clock, 1000);
