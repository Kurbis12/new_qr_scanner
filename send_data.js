// Replace 'your_dash_server_url' with the actual URL of your Dash app server
const dashServerUrl = 'your url/receive_scanned_data';

const scannedData = 'scanned_result';  // Replace with your actual scanned data

// Create JSON data to send
const jsonData = {
    scannedData: scannedData
};

// Send a POST request to the Dash app server with CORS headers
fetch(dashServerUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Add this header to enable CORS
    },
    body: JSON.stringify(jsonData),
})
.then(response => response.json())
.then(data => {
    // Handle the response from the server if needed
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
