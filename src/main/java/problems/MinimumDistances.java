package problems;

import java.util.Arrays;

public class MinimumDistances {
    static int minimumDistances(int[] a) {
        int firstPosition = -1;
        int secondPosition = -1;
        int difference = 0;
        int min = Integer.MAX_VALUE;
        int[] distinctNumbers = Arrays.stream(a).distinct().toArray();

        for (int i = 0; i < distinctNumbers.length; i++) {
            for (int j = 0; j < a.length; j++) {
                if (a[j] == distinctNumbers[i] && firstPosition != i) {
                    firstPosition = j;
                }
                if (a[j] == distinctNumbers[i] && firstPosition == i) {
                    secondPosition = j;
                }
            }
            System.out.println("i: " + distinctNumbers[i]);
            System.out.println("firstPosition: " + firstPosition);
            System.out.println("secondPosition:" + secondPosition);

            difference = Math.abs(firstPosition - secondPosition);
            if (difference != 0 && difference < min) {
                min = difference;
            }
        }
        if (min == Integer.MAX_VALUE) {
            min = -1;
        }
        System.out.println("min" + min);
        return min;
    }

    public static void main(String[] args) {
        int[] a = {7, 1, 3, 4, 1, 7};
        minimumDistances(a);
    }
}
