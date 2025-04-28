// Variables
const player = "Jordan";
const teammate = "Chris";
const court = "Downtown Arena";
const move = "slam dunk";
const opponent = "Sharks";

// Build the story using template literals
const story = `${player} arrived at the ${court} ready to take on the ${opponent}. 
He met up with his teammate ${teammate} to warm up. 
In the final quarter, ${player} made a spectacular ${move} that brought the crowd to its feet and sealed the victory.`;

// Display the story on the page
document.getElementById("story").textContent = story;
