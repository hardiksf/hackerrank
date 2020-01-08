/*
 * two test cases failed in both solutions
 * because javascript rounds number longer than 16 digits. So result with longer than 16 digits is being rounded. 
 * using library like big decimal should solve this issue.
 */

function taumBday1(b, w, bc, wc, z) {
    if (bc > wc) {
        if (bc - wc > z) {
            bc = wc + z;
        }
    }
    if (wc > bc) {
        if (wc - bc > z) {
            wc = bc + z;
        }
    }
    return b * bc + w * wc;
}

const b = 742407782;
const w = 90529439;
const bc = 847666641;
const wc = 8651519;
const z = 821801924;

console.log(taumBday1(b, w, bc, wc, z));

function taumBday2(b, w, bc, wc, z) {

    if (bc === wc) {
        return b * bc + w * wc;
    } else if (Math.abs(bc - wc) < z) {
        return b * bc + w * wc;
    } else if (bc + z <= wc) {
        return (b * bc) + ((w * (bc + z)));
    } else {
        return (b * (wc + z)) + (w * wc);
    }
}