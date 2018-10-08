package problems;

import java.util.Arrays;

public class MaxMin {
    static int maxMin(int k, int[] arr) {
        int[] sortedArray = Arrays.stream(arr).sorted().toArray();
        int result = Integer.MAX_VALUE;
        for (int i = 0; i < sortedArray.length - k + 1; i++) {
            int difference = sortedArray[i + k - 1] - sortedArray[i];
            if (difference < result) {
                result = difference;
            }
        }
        return result;

    }

    public static void main(String[] args) {
        int[] arr = {100, 200, 300, 350, 400, 401, 402};
        System.out.println(maxMin(3, arr));
    }

}
