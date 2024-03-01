function generateFlashcard() {
    var flashcardContainer = document.getElementById("flashcard-container");
    
    // Create textarea element
    var textarea = document.createElement("textarea");
    textarea.placeholder = "Enter flashcard content...";
    
    // Append textarea to flashcard container
    flashcardContainer.innerHTML = ''; // Clear previous content
    flashcardContainer.appendChild(textarea);
    
    // Add event listener to textarea for Enter key press
    textarea.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default behavior of Enter key (submitting the form)
            
            var content = textarea.value.trim();
            
            if (content !== "") {
                createFlashcard(content);
                textarea.value = ""; // Clear textarea after creating flashcard
            } else {
                alert("Please enter flashcard content!");
            }
        }
    });
}

function createFlashcard(content) {
    var flashcardContainer = document.getElementById("flashcard-container");
    
    // Create flashcard element
    var flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");
    flashcard.textContent = content;
    
    // Append flashcard to container
    flashcardContainer.appendChild(flashcard);
}

function downloadFlashcards() {
    var flashcards = document.querySelectorAll(".flashcard");
    
    // Create a new canvas to draw flashcards
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    
    // Set canvas dimensions
    var canvasWidth = 400; // Adjust width as needed
    var canvasHeight = 600; // Adjust height as needed
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    var yOffset = 0;
    
    // Draw each flashcard onto the canvas
    flashcards.forEach(function(flashcard) {
        context.fillStyle = "#5D3D68"; // Set background color
        context.fillRect(10, yOffset + 10, canvasWidth - 20, 80); // Adjust height as needed
        
        context.font = "16px 'Roboto', sans-serif"; // Set font style
        context.fillStyle = "#ffffff"; // Set text color
        context.fillText(flashcard.textContent, 20, yOffset + 40); // Adjust position and font size as needed
        
        yOffset += 100; // Adjust spacing between flashcards as needed
    });
    
    // Convert canvas to PNG data URL
    var dataURL = canvas.toDataURL("image/png");
    
    // Create a download link
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "flashcards.png";
    
    // Click the link to trigger download
    link.click();
}

// Add event listener to "Download Flashcards as PNG" button
var printButton = document.getElementById("print-button");
printButton.addEventListener("click", downloadFlashcards);
function hideGenerateButton() {
    var generateButton = document.getElementById("generate-button");
    generateButton.style.display = "none";
}

var generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", hideGenerateButton);
