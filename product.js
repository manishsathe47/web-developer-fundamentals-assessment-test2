const tableBody = document.querySelector('#orderslist tbody');
    let data = [];

    // Fetch data from API and update table
    const updateTable = () => {
      tableBody.innerHTML = '';
      data.forEach(product => {
        if (document.querySelector('#hide-expired').checked && new Date(product.expiryDate) < new Date()) {
          return;
        }
        if (document.querySelector('#hide-low-stock').checked && product.stockCount < 100) {
          return;
        }
        const row = tableBody.insertRow();
        row.innerHTML = `<tr class="tablerows">
          <td class="gray">${product.id}</td>
          <td class="black">${product.medicineName}</td>
          <td class="gray">${product.medicineBrand}</td>
          <td class="black">${product.expiryDate}</td>
          <td class="gray">${product.unitPrice}</td>
          <td class="gray">${product.stock}</td>
          </tr>`;
      });
    };

    // Fetch data from API and update table on page load
    fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
      .then(response => response.json())
      .then(products => {
        data = products;
        updateTable();
      })
      .catch(error => console.error(error));

    // Update table when checkboxes are clicked
    document.querySelector('#hide-expired').addEventListener('click', updateTable);
    document.querySelector('#hide-low-stock').addEventListener('click', updateTable);
