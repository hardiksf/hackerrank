package problems;

import java.util.Arrays;

public class Pairs {
    static int pairs(int k, int[] arr) {

        int counter = 0;
        int[] sortedArray = Arrays.stream(arr).sorted().toArray();
        for (int i = 0; i < sortedArray.length; i++) {
            if (Arrays.binarySearch(sortedArray, sortedArray[i] + k) >= 0)
                counter++;
        }
        return counter;
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 4, 2};
        int k = 2;
        pairs(k, arr);
    }
}
