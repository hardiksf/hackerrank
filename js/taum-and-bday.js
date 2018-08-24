//two test cases failed in both solutions

function taumBday(b, w, bc, wc, z) {
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


function taumBday(b, w, bc, wc, z) {

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

for (let i = 0, l = children.length; i < l; i++) {

}