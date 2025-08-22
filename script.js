const clubs = [
  {
    name: "SIM2 Max",
    image: "https://via.placeholder.com/300x150?text=SIM2+Max",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Forgiveness and distance",
    cost: "$450",
  },
  {
    name: "Stealth",
    image: "https://via.placeholder.com/300x150?text=Stealth",
    handicap: "Low to mid handicappers",
    swing: "Fast swing speeds",
    improve: "Ball speed and workability",
    cost: "$500",
  },
  {
    name: "Stealth HD",
    image: "https://via.placeholder.com/300x150?text=Stealth+HD",
    handicap: "High handicappers",
    swing: "Moderate swing speeds",
    improve: "Draw bias and forgiveness",
    cost: "$500",
  },
  {
    name: "Qi",
    image: "https://via.placeholder.com/300x150?text=Qi",
    handicap: "Mid handicappers",
    swing: "Moderate to fast swing speeds",
    improve: "Stability and speed",
    cost: "$450",
  },
  {
    name: "Qi HL",
    image: "https://via.placeholder.com/300x150?text=Qi+HL",
    handicap: "High handicappers",
    swing: "Slower swing speeds",
    improve: "Higher launch and carry",
    cost: "$450",
  },
  {
    name: "P790",
    image: "https://via.placeholder.com/300x150?text=P790",
    handicap: "Low to mid handicappers",
    swing: "Moderate to fast swing speeds",
    improve: "Distance and forgiveness",
    cost: "$1400",
  },
  {
    name: "P770",
    image: "https://via.placeholder.com/300x150?text=P770",
    handicap: "Low handicappers",
    swing: "Fast swing speeds",
    improve: "Control and feel",
    cost: "$1500",
  },
  {
    name: "P7CB",
    image: "https://via.placeholder.com/300x150?text=P7CB",
    handicap: "Low handicappers",
    swing: "Fast swing speeds",
    improve: "Shot shaping",
    cost: "$1700",
  },
  {
    name: "P7MB",
    image: "https://via.placeholder.com/300x150?text=P7MB",
    handicap: "Scratch players",
    swing: "Very fast swing speeds",
    improve: "Precision and feedback",
    cost: "$1800",
  },
  {
    name: "P7TW",
    image: "https://via.placeholder.com/300x150?text=P7TW",
    handicap: "Scratch players",
    swing: "Very fast swing speeds",
    improve: "Tour-level control",
    cost: "$2000",
  },
  {
    name: "SIM MAX",
    image: "https://via.placeholder.com/300x150?text=SIM+MAX",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Forgiveness",
    cost: "$400",
  },
  {
    name: "SIM",
    image: "https://via.placeholder.com/300x150?text=SIM",
    handicap: "Low handicappers",
    swing: "Fast swing speeds",
    improve: "Aerodynamics and speed",
    cost: "$450",
  },
  {
    name: "Milled Grind (MG)",
    image: "https://via.placeholder.com/300x150?text=MG+Wedge",
    handicap: "All handicaps",
    swing: "Any swing speed",
    improve: "Spin and control",
    cost: "$180",
  },
  {
    name: "Hi-Toe",
    image: "https://via.placeholder.com/300x150?text=Hi-Toe",
    handicap: "Mid to high handicappers",
    swing: "Any swing speed",
    improve: "Versatility around greens",
    cost: "$190",
  },
  {
    name: "P-Series",
    image: "https://via.placeholder.com/300x150?text=P-Series+Putter",
    handicap: "All handicaps",
    swing: "Any swing speed",
    improve: "Alignment and feel",
    cost: "$250",
  },
  {
    name: "Spider",
    image: "https://via.placeholder.com/300x150?text=Spider+Putter",
    handicap: "All handicaps",
    swing: "Any swing speed",
    improve: "Stability through stroke",
    cost: "$300",
  },
  {
    name: "TP Collection",
    image: "https://via.placeholder.com/300x150?text=TP+Collection",
    handicap: "All handicaps",
    swing: "Any swing speed",
    improve: "Classic feel",
    cost: "$250",
  },
  {
    name: "Rossa & Ghost Putters",
    image: "https://via.placeholder.com/300x150?text=Rossa+%26+Ghost",
    handicap: "All handicaps",
    swing: "Any swing speed",
    improve: "Alignment aids",
    cost: "$200",
  },
  {
    name: "R11",
    image: "https://via.placeholder.com/300x150?text=R11",
    handicap: "Mid handicappers",
    swing: "Moderate swing speeds",
    improve: "Adjustability",
    cost: "$350",
  },
  {
    name: "M6",
    image: "https://via.placeholder.com/300x150?text=M6",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Straight distance",
    cost: "$300",
  },
  {
    name: "M5",
    image: "https://via.placeholder.com/300x150?text=M5",
    handicap: "Low to mid handicappers",
    swing: "Fast swing speeds",
    improve: "Tunability",
    cost: "$350",
  },
  {
    name: "M4",
    image: "https://via.placeholder.com/300x150?text=M4",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Forgiveness",
    cost: "$250",
  },
  {
    name: "M3",
    image: "https://via.placeholder.com/300x150?text=M3",
    handicap: "Low to mid handicappers",
    swing: "Fast swing speeds",
    improve: "Adjustability",
    cost: "$300",
  },
  {
    name: "M2",
    image: "https://via.placeholder.com/300x150?text=M2",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Forgiveness and launch",
    cost: "$200",
  },
  {
    name: "M1",
    image: "https://via.placeholder.com/300x150?text=M1",
    handicap: "Low to mid handicappers",
    swing: "Fast swing speeds",
    improve: "Custom fit adjustability",
    cost: "$250",
  },
  {
    name: "AeroBurner",
    image: "https://via.placeholder.com/300x150?text=AeroBurner",
    handicap: "High handicappers",
    swing: "Moderate swing speeds",
    improve: "Lightweight speed",
    cost: "$200",
  },
  {
    name: "R15",
    image: "https://via.placeholder.com/300x150?text=R15",
    handicap: "Low to mid handicappers",
    swing: "Fast swing speeds",
    improve: "Movable weight adjustability",
    cost: "$250",
  },
  {
    name: "RSi",
    image: "https://via.placeholder.com/300x150?text=RSi",
    handicap: "Mid to high handicappers",
    swing: "Moderate swing speeds",
    improve: "Face slot forgiveness",
    cost: "$800",
  },
];

const container = document.getElementById("club-list");
clubs.forEach((club) => {
  const card = document.createElement("div");
  card.className = "club-card";
  card.innerHTML = `
    <img src="${club.image}" alt="${club.name}">
    <h2>${club.name}</h2>
    <p><strong>Handicap:</strong> ${club.handicap}</p>
    <p><strong>Swing speed:</strong> ${club.swing}</p>
    <p><strong>Helps improve:</strong> ${club.improve}</p>
    <p><strong>Estimated cost:</strong> ${club.cost}</p>
    <p><strong>Shaft stiffness:</strong> <span class="shaft-setting"></span></p>
  `;
  container.appendChild(card);
});

const shaftSelect = document.getElementById("stiffness");
const shaftDisplay = document.getElementById("stiffness-display");
function updateShaft() {
  shaftDisplay.textContent = shaftSelect.value;
  document
    .querySelectorAll(".shaft-setting")
    .forEach((span) => (span.textContent = shaftSelect.value));
}
shaftSelect.addEventListener("change", updateShaft);
updateShaft();
