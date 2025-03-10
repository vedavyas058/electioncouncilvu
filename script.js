let votes = {};
let candidates = ['A Vivek', 'B Harshit', 'C Priya', 'D Nithin'];

// Function to show only one section at a time
function showSection(sectionId) {
  let sections = document.querySelectorAll(".content");
  sections.forEach(section => section.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

function startElection() {
  document.getElementById("voting").classList.remove("hidden");
}

function startVoting(candidate) {
  let section = prompt("Enter your section (A-Z):").toUpperCase();
  let rollNumber = prompt("Enter your roll number (1-99):");
  
  if (!section.match(/^[A-Z]$/) || !rollNumber.match(/^[1-9][0-9]?$/)) {
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
