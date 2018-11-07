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
    let counter = 0;

    for (let j = 0; j < columns; j++) {
        if (j !== 0) {
            result = result + ` `;
        }
        for (let index = j; index < stringWithoutSpaces.length; index = index + columns) {
            result = result + stringWithoutSpaces.charAt(index);
            counter = counter + 1;
        }
    }
    console.log(result);
}
const s = "feed thed og";
//fto ehg ee dd
encryption(s);