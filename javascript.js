document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the user input and convert to lowercase
    const userInput = document.getElementById('userInput').value.trim();

    // Define an array of correct words
    const correctWords = ["hiß bash", "Hiß bash", "Hiß Bash"];

    // Check if the input matches any of the correct words
    if (correctWords.includes(userInput)) {
        // Show the celebration gift
        document.getElementById('celebration').style.display = "block";
        
        // Change the title to "Happy Birthday!"
        document.getElementById('title').innerText = "Happy Birthday Pegah!";
    } else {
        alert("Incorrect! It is hiß bash!");
    }
});
