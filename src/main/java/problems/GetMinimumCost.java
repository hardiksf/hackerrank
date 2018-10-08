package problems;

import java.util.Arrays;

public class GetMinimumCost {

    static int getMinimumCost(int k, int[] c) {
        int cost = 0;
        int j = 0;
        int[] reversedArray = Arrays.stream(c).sorted().toArray();
        int counter = 0;
        for (int i = reversedArray.length - 1; i >= 0; i--) {
            cost = cost + (j + 1) * reversedArray[i];
            counter = counter + 1;
            if (counter % k == 0) {
                j = j + 1;
            }
        }
        return cost;

    }

    public static void main(String[] args) {
        int[] c = {1, 2, 7, 9, 100};
        System.out.println(getMinimumCost(2, c));
    }

}
