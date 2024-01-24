let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

function clickButton() {
  points += pointsPerClick;
  updatePoints();
}

function updatePoints() {
  document.getElementById("points").innerText = points;
}

function buyUpgrade() {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick++;
    upgradeCost *= 2;
    updatePoints();
    updateUpgrade();
  } else {
    alert("Ei tarpeeksi pisteitä päivityksen ostamiseen!");
  }
}

function updateUpgrade() {
  document.getElementById("pointsPerClick").innerText = pointsPerClick;
  document.getElementById("upgradeCost").innerText = upgradeCost;
}
