package problems;

import java.util.Scanner;
import java.util.stream.IntStream;

public class MiniMaxSum {
    static void miniMaxSum(int[] arr) {
        long sum = IntStream.of(arr).sum();
        long min = sum - IntStream.of(arr).summaryStatistics().getMax();
        long max = sum - IntStream.of(arr).summaryStatistics().getMin();
        System.out.println(min + " " + max);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[] arr = new int[5];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < 5; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        miniMaxSum(arr);

        scanner.close();
    }
}
