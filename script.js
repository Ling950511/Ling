const yearFilter = document.getElementById('yearFilter');
const resultFilter = document.getElementById('resultFilter');
const table = document.getElementById('awardsTable');
const rows = table.querySelectorAll('tbody tr');

function filterTable() {
  const selectedYear = yearFilter.value;
  const selectedResult = resultFilter.value;

  rows.forEach(row => {
    const year = row.children[1].textContent;
    const result = row.children[4].textContent;
    const showYear = (selectedYear === "all" || year === selectedYear);
    const showResult = (selectedResult === "all" || result === selectedResult);

    row.style.display = (showYear && showResult) ? "" : "none";
  });
}

yearFilter.addEventListener('change', filterTable);
resultFilter.addEventListener('change', filterTable);


document.addEventListener('DOMContentLoaded', () => {
  const yearFilter = document.getElementById('yearFilter');
  const resultFilter = document.getElementById('resultFilter');
  const rows = document.querySelectorAll('.filterable');

  function filterAwards() {
    const year = yearFilter.value;
    const result = resultFilter.value;

    rows.forEach(row => {
      const rowYear = row.getAttribute('data-year');
      const rowResult = row.getAttribute('data-result');
      const matchYear = (year === 'all' || year === rowYear);
      const matchResult = (result === 'all' || result === rowResult);

      row.style.display = (matchYear && matchResult) ? '' : 'none';
    });
  }

  if (yearFilter && resultFilter) {
    yearFilter.addEventListener('change', filterAwards);
    resultFilter.addEventListener('change', filterAwards);
  }
});
