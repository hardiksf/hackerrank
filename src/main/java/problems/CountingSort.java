package problems;

import java.util.Arrays;

public class CountingSort {
    static int[] countingSort(int[] arr) {
        return Arrays.stream(arr).sorted().toArray();
    }
}
