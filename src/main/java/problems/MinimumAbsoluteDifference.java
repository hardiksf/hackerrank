package problems;

import java.util.Arrays;

public class MinimumAbsoluteDifference {
    static int minimumAbsoluteDifference(int[] arr) {

        int[] sortedArray = Arrays.stream(arr).sorted().toArray();
        int result = Integer.MAX_VALUE;
        for (int i = 0; i < sortedArray.length - 1; i++) {
            int difference = Math.abs(sortedArray[i] - sortedArray[i + 1]);
            if (difference < result) {
                result = difference;
            }
        }

        return result;
    }
}
