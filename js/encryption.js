function encryption(s) {
    //remove all spaces
    const stringWithoutSpaces = s.replace(/ /g, ``);

    const length = stringWithoutSpaces.length;
    let rows = Math.floor(Math.sqrt(length));
    const columns = Math.ceil(Math.sqrt(length));

    if (rows * columns < length) {
        rows = columns
    }

    let result = ``;
    for (let index = 0; index < rows; index = index + columns) {
        if (index % rows === 0) {
            result = result + stringWithoutSpaces.charAt(index) + ` `;
        } else {
            result = result + stringWithoutSpaces.charAt(index);
        }
    }

    console.log(result);
}
const s = "haveaniceday";
encryption(s);