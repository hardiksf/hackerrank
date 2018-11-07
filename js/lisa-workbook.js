// Lisa's workbook
function workbook(n, k, arr) {
    let totalSpecialProblems = 0;
    let pageNumber = 1;

    for (let i = 0; i < n; i++) {
        const totalPagesOfThisChapter = Math.ceil(arr[i] / k);
        let numberOfProblemsOnLastPageHere = arr[i] % k;

        //when total problems is factor or k, there are k problems in last page
        if (numberOfProblemsOnLastPageHere === 0) {
            numberOfProblemsOnLastPageHere = k;
        }

        let firstProblemNumberOnThisPage = 1;
        let lastProblemNUmberOnThisPage = 0;
        for (let j = 0; j < totalPagesOfThisChapter; j++) {
            if (j < totalPagesOfThisChapter - 1) {
                lastProblemNUmberOnThisPage = (j + 1) * k;
            } else {
                lastProblemNUmberOnThisPage = lastProblemNUmberOnThisPage + numberOfProblemsOnLastPageHere;
            }
            if (totalPagesOfThisChapter > 0) {
                if (j > 0) {
                    firstProblemNumberOnThisPage = j * k + 1;
                }
            }

            //calculate special problems here
            if (firstProblemNumberOnThisPage <= pageNumber && lastProblemNUmberOnThisPage >= pageNumber) {
                totalSpecialProblems++;
            }

            pageNumber = pageNumber + 1;
        }

    }
    return totalSpecialProblems;
}
const n = 5;
const k = 3;
const arr = [4, 2, 6, 1, 10];
console.log(workbook(n, k, arr));