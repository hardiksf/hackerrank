package problems;

import java.util.ArrayList;
import java.util.List;

public class Stones {
    static int[] stones(int n, int a, int b) {
        int sum = 0;
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            sum = a * ((n - 1) - i) + b * i;
            list.add(sum);
        }
        
        int[] result = new int[list.size()];

        return result;

    }

    public static void main(String[] args) {
        stones(4, 10, 100);
    }
}
