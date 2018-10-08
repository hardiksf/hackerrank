package problems;

import java.util.Arrays;

public class TwoArrays {
    static String twoArrays(int k, int[] A, int[] B) {

        int[] sortedA = Arrays.stream(A).sorted().toArray();
        int[] sortedB = Arrays.stream(B).sorted().toArray();
        String result = "YES";
        int length = sortedA.length;

        for (int i = 0; i < length; i++) {
            if (sortedA[i] + sortedB[length - 1 - i] < k) {
                result = "NO";
                break;
            }
        }
        return result;

    }
}
