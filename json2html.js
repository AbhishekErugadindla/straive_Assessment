// json2html.js
export default function json2html(data) {
    // Begin the HTML table with the required data-user attribute
    let html = `<table data-user="abhishekerugadindla@gmail.com">
                    <thead>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                    </thead>
                    <tbody>`;
    
    // Loop through the array to create table rows
    data.forEach(item => {
        html += `<tr>
                    <td>${item.Name}</td>
                    <td>${item.Age}</td>
                    <td>${item.Gender || ""}</td>
                 </tr>`;
    });
    
    // End the table
    html += `</tbody></table>`;
    
    return html;
}
