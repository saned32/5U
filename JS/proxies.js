const rowsPerPage = 3; // عدد الصفوف في كل صفحة
const table = document.getElementById('proxy-table').getElementsByTagName('tbody')[0];
const rows = table.getElementsByTagName('tr');
const totalPages = Math.ceil(rows.length / rowsPerPage);
let currentPage = 1;

function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = (i >= start && i < end) ? '' : 'none';
    }

    document.querySelectorAll('.pagination .page-number button').forEach(btn => btn.classList.remove('active-page'));
    document.getElementById('page' + page).classList.add('active-page');
}

function setupPagination() {
    const pageNumbers = document.getElementById('page-numbers');
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.id = 'page' + i;
        btn.addEventListener('click', () => {
            currentPage = i;
            displayPage(currentPage);
        });
        if (i === currentPage) btn.classList.add('active-page');
        pageNumbers.appendChild(btn);
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
    }
});

// عند تحميل الصفحة
setupPagination();
displayPage(currentPage);