function calculateGrade() {
    // Variables and data types
    let marks = [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value),
        Number(document.getElementById("mark4").value),
        Number(document.getElementById("mark5").value)
    ];

    // Iteration: validate every subject mark
    for (let i = 0; i < marks.length; i++) {
        if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
            document.getElementById("result").innerHTML =
                "<span class='fail'>Please enter valid marks from 0 to 100 for all subjects.</span>";
            return;
        }
    }

    // Operators
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;
    let grade;

    // Selection statements
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Pass requires at least 40 in every subject
    let passed = true;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 40) {
            passed = false;
            break;
        }
    }

    let status = passed ? "PASS" : "FAIL";
    let statusClass = passed ? "pass" : "fail";

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <b>Total:</b> ${total} / 500<br>
        <b>Average:</b> ${average.toFixed(2)}<br>
        <b>Grade:</b> ${grade}<br>
        <b>Status:</b> <span class="${statusClass}">${status}</span>
    `;
}
