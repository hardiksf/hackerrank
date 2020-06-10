/*
 * two test cases failed in both solutions
 * because javascript rounds number longer than 16 digits. So result with longer than 16 digits is being rounded. 
 * using library like big decimal should solve this issue.
 */

function taumBday(b, w, bc, wc, z) {
    return b * Math.min(bc, wc + z) + w * Math.min(wc, bc + z);
}
