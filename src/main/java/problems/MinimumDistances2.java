package problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MinimumDistances2 {
    static int minimumDistances(int[] a) {
        int difference = 0;
        int min = Integer.MAX_VALUE;
        int[] distinctNumbers = Arrays.stream(a).distinct().toArray();

        for (int i = 0; i < distinctNumbers.length; i++) {
            List<Integer> matches = new ArrayList<>();
            for (int j = 0; j < a.length; j++) {
                if (a[j] == distinctNumbers[i]) {
                    matches.add(j);
                }
            }

            for (int j = 0; j < matches.size() - 1; j++) {
                difference = Math.abs(matches.get(j) - matches.get(j + 1));
                if (difference != 0 && difference < min) {
                    min = difference;
                }
            }

        }
        if (min == Integer.MAX_VALUE) {
            min = -1;
        }
        System.out.println("min" + min);
        return min;
    }

    public static void main(String[] args) {
        // int[] a = {7, 1, 3, 4, 1, 7};
        int[] a = {1, 2, 3, 4, 5, 2, 1, 1};
        minimumDistances(a);
    }
}
