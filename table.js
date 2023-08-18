$(document).ready(function() {
    // Define the API URL for fetching weather data
    const apiUrl = 'https://indiaweather.000webhostapp.com/table.php';

    // Attach a click event listener to the state buttons
    $('.btn').click(function() {
        const capital = $(this).data('capital');
        console.log(capital)
        // Send AJAX request to fetch weather data
        $.ajax({
            type: 'POST',
            url: apiUrl,
            data: { modifiedCapital: capital },
            success: function(response) {
                // Parse the JSON response
                const responseData = JSON.parse(response);

                let count = 0;
                let tableRows = '';
                responseData.data.forEach(entry => {
                    count++;
                    tableRows += `
                        <tr>
                            <td>${count}</td>
                            <td>${entry.temp}</td>
                            <td>${entry.humidity}</td>
                            <td>${entry.visibility}</td>
                            <td>${entry.deg}</td>
                            <td>${entry.speed}</td>
                            <td>${entry.main}</td>
                            <td>${entry.date}</td>
                            <td>${entry.time}</td>
                        </tr>`;
                });

                // Insert the table rows into the table body
                const tableBody = $('#dataTable tbody');
                tableBody.html(tableRows);

                // Create and append the export button
                const exportButton = $('<button>').addClass('btn').attr('id', 'exportButton').text('Export');
                $('#exportButtonContainer').html(exportButton);

                // Attach a click event listener to the export button
                $('#exportButton').click(function () {
                    document.getElementById("exportButton").addEventListener("click", function () {
                        // Get the table element
                        const table = document.getElementById("dataTable");
                    
                        // Create an array to hold the CSV data
                        const csvData = [];
                    
                        // Iterate through table rows
                        const rows = table.querySelectorAll("tr");
                        rows.forEach(function (row) {
                            const rowData = [];
                            row.querySelectorAll("th, td").forEach(function (cell) {
                                rowData.push('"' + cell.innerText.replace(/"/g, '""') + '"'); // Escape double quotes
                            });
                            csvData.push(rowData.join(","));
                        });
                    
                        // Create a Blob with the CSV data
                        const csvBlob = new Blob([csvData.join("\n")], { type: "text/csv" });
                    
                        // Create a download link and trigger the download
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(csvBlob);
                        link.download = "table_data.csv";
                        link.click();
                    });
                });
            },
            error: function(error) {
                console.log('AJAX error:', error);
            }
        });
    });
});
