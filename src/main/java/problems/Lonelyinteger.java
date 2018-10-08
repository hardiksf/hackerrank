package problems;

import java.util.Arrays;

public class Lonelyinteger {
    static int lonelyinteger(int[] a) {
        int result = 0;
        int[] sortedArray = Arrays.stream(a).sorted().toArray();
        int length = sortedArray.length;

        if (length == 1) {
            result = sortedArray[0];
        }

        for (int i = 0; i < length - 1; i = i + 2) {
            if (sortedArray[i] != sortedArray[i + 1]) {
                result = sortedArray[i];
                break;
            }

        }

        if (length % 2 != 0 && result == 0) {
            result = sortedArray[length - 1];
        }

        return result;

    }

    public static void main(String[] args) {
        int[] a = {1, 1, 2};
        lonelyinteger(a);
    }
}
