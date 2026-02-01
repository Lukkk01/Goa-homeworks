const form = document.getElementById('form');
const day = document.getElementById('d');
const month = document.getElementById('m');
const year = document.getElementById('y');

const outY = document.getElementById('outY');
const outM = document.getElementById('outM');
const outD = document.getElementById('outD');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const d = parseInt(day.value);
    const m = parseInt(month.value);
    const y = parseInt(year.value);

    if (!d || !m || !y) {
        alert('please fill all the fields');
        return;
    }

    const today = new Date();
    const birth = new Date(y, m - 1, d);

    if (birth > today) {
        alert('invalid birth date');
        return;
    }

    if (birth.getDate() !== d || birth.getMonth() !== m - 1 || birth.getFullYear() !== y) {
        alert('invalid date!');
        return;
    }

    let years = today.getFullYear() - y;
    let months = today.getMonth() - (m - 1);
    let days = today.getDate() - d;

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += prevMonth.getDate();    
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    outY.textContent = years;
    outM.textContent = months;
    outD.textContent = days;
});