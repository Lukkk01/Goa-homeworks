let exScore = prompt("enter your exem score (0-100):");
let actScore = prompt("enter your activvite score (0-100):");

    exScore = Number(exScore);
    actScore = Number(actScore);
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
        if (totalScore >= 90 && totalScore <= 100) {
                grade = "A";
            } else if (totalScore >= 80 && totalScore < 90) {
                grade = "B";
            } else if (totalScore >= 70 && totalScore < 80) {
                grade = "C";
            } else if (totalScore >= 50 && totalScore < 70) {
                grade = "D";
            } else if (totalScore >= 30 && totalScore < 50) {
                grade = "E";
            } else {
                grade = "F";
            }