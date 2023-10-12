// Function to save the content of the <p> element to a .txt file
function saveResultToTxt() {
    // Get the content of the <p> element
    const resultText = document.getElementById('result').textContent;
    console.log("Result text:", resultText);

    // Create a Blob (Binary Large Object) with the text content
    const blob = new Blob([resultText], { type: 'text/plain' });

    // Create a temporary URL to the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element for downloading the .txt file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scanned_result.txt'; // Specify only the filename without the path

    // Programmatically trigger a click event on the link to initiate the download
    a.click();

    // Release the URL and remove the link element
    window.URL.revokeObjectURL(url);
}

// Example usage:
// Call this function when you want to save the content of the <p> element to a .txt file
// For example, you can add a button that triggers this function when clicked
