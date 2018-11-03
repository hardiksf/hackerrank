package problems;

public class TaumBday {
    static long taumBday(int b, int w, int bc, int wc, int z) {
        long result = 0;
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
        result =  b * bc + w * wc;
        return  result;

    }
}
