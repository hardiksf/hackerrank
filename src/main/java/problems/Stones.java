package problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Stones {
    static int[] stones(int n, int a, int b) {
        int sum = 0;
        List<Integer> list = new ArrayList<>();
        int i = 0;
        if (a == b) {
            sum = a * (n - 1);
            list.add(sum);
        } else {
            for (i = 0; i < n; i++) {
                sum = a * ((n - 1) - i) + b * i;
                System.out.println(sum);
                list.add(sum);
            }
        }
        int[] result = list.stream().mapToInt(element -> element).toArray();

        // Sorting for the cases when a > b
        Arrays.sort(result);
        System.out.println(Arrays.toString(result));
        return result;
    }

    public static void main(String[] args) {
        System.out.println(stones(3, 1, 1));
    }
}
