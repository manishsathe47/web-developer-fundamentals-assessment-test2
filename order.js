fetch ("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders").then((data)=>{
    // console.log(data);
    return data.json();//converted
}).then((objectData)=>{
    console.log(objectData[0].id);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr class="tablerows">
        <td class="gray">${values.id}</td>
        <td class="black">${values.customerName}</td>
        <td class="black">${values.orderDate}<br><span class="gray">${values.orderTime}</span></td>
        <td class="gray">${values.amount}</td>
        <td class="black">${values.orderStatus}</td>
        </tr> `;
    })
    document.getElementById("orderslist").innerHTML=tableData;
})

const statusCheckboxes = document.getElementsByName('status');

		for (let i = 0; i < statusCheckboxes.length; i++) {
			statusCheckboxes[i].addEventListener('change', function() {
				const statusValue = this.value;
				const rows = document.getElementsByTagName('tr');
				for (let j = 1; j < rows.length; j++) {
					const cells = rows[j].getElementsByTagName('td');
					const statusCell = cells[4];
					if (statusCell.innerHTML === statusValue) {
						rows[j].style.display = this.checked ? '' : 'none';
					}
				}
			});
		}