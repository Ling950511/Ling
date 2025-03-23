// ✅ Script de filtrage compatible TABLE & CARDS
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
