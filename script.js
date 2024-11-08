const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Food', 'Rent', 'Entertainment', 'Utilities'],
    datasets: [{
      data: [50, 30, 10, 10],
      backgroundColor: ['#ff5733', '#33ff57', '#3357ff', '#ff33a6'],
    }]
  },
});

document.getElementById('add-transaction-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
  
    const transaction = { category, amount, type, description };
  
    // Save to localStorage or state
    addTransactionToList(transaction);
  });
  
  function addTransactionToList(transaction) {
    const table = document.getElementById('transaction-list').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `
      <td>${transaction.category}</td>
      <td>${transaction.description}</td>
      <td>$${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td><button onclick="deleteTransaction(this)">Delete</button></td>
    `;
  }
  