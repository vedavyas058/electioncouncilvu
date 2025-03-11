 // script.js

// Modal Image Gallery (from template)
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}
function w3_close() {
  mySidebar.style.display = "none";
}

// Election functionality
let votes = {};
let candidates = ['A Vivek', 'B Harshit', 'C Priya', 'D Nithin'];

function startVoting(candidate) {
  let section = prompt("Enter your section (A-Z):");
  if (section) {
    section = section.toUpperCase();
  }
  let rollNumber = prompt("Enter your roll number (1-99):");

  if (!section || !section.match(/^[A-Z]$/) || !rollNumber || !rollNumber.match(/^[1-9][0-9]?$/)) {
    alert("Invalid section or roll number. Please try again.");
    return;
  }

  const studentId = `231FA04${section}${rollNumber.padStart(2, '0')}`;
  if (votes[studentId]) {
    alert("You have already voted!");
    return;
  }

  votes[studentId] = { candidate, section, rollNumber };
  alert(`Your vote for ${candidate} has been recorded under ID: ${studentId}`);
  document.getElementById("message").innerText = `You voted for ${candidate}. Thank you!`;
}

function viewResults() {
  let password = prompt("Enter admin password:");
  if (password === "vucse") {
    let results = {};
    candidates.forEach(candidate => results[candidate] = 0);

    for (let voter in votes) {
      results[votes[voter].candidate]++;
    }

    let resultMessage = "Election Results:\n";
    for (const candidate in results) {
      resultMessage += `${candidate}: ${results[candidate]} votes\n`;
    }
    alert(resultMessage);
  } else {
    alert("Access denied. Incorrect password.");
  }
}

// Navigation functions to toggle between sections
function showHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("electionsSection").style.display = "none";
  document.getElementById("admissions").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showElections() {
  document.getElementById("home").style.display = "none";
  document.getElementById("electionsSection").style.display = "block";
  document.getElementById("admissions").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showAdmissions() {
  document.getElementById("home").style.display = "none";
  document.getElementById("electionsSection").style.display = "none";
  document.getElementById("admissions").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

function showContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("electionsSection").style.display = "none";
  document.getElementById("admissions").style.display = "none";
  document.getElementById("contact").style.display = "block";
}

// Start on the Home section
showHome();

// Extra code from the pasted snippet about query parameters and data registration
const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');

if (data) {
  console.log('Data received:', data);
} else {
  console.log('No data received');
}

document.getElementById('dataForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const data = document.getElementById('dataInput').value;
  const link = `http://yourwebsite.com/register?data=${data}`;
  
  // Redirect to the link
  window.location.href = link;
});
