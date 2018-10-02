package problems;

import java.util.Arrays;

public class MaximumToys {
    static int maximumToys(int[] prices, int k) {
        int counter = 0;

        int[] sortedArray = Arrays.stream(prices).sorted().toArray();

        for (int i = 0; i < sortedArray.length;) {
            if (sortedArray[i] < k) {
                k = k - sortedArray[i];
                counter = counter + 1;
                i = i + 1;
            } else {
                break;
            }

        }
        return counter;

    }

    public static void main(String[] args) {
        int[] prices = {1, 12, 5, 111, 200, 1000, 10};
        System.out.println(maximumToys(prices, 50));
    }

}
