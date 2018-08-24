package problems;

import java.util.Arrays;

public class BreakingBestAndWorstRecords {
    static int[] breakingRecords(int[] scores) {
        int currentMax = scores[0];
        int maxCounter = 0;
        int currentMin = scores[0];
        int minCounter = 0;
        int[] result = new int[2];
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] > currentMax) {
                currentMax = scores[i];
                maxCounter = maxCounter + 1;
            }
            if (scores[i] < currentMin) {
                currentMin = scores[i];
                minCounter = minCounter + 1;
            }
        }
        result[0] = maxCounter;
        result[1] = minCounter;
        return result;

    }
    
    public static void main(String[] args) {
        int[] array = {10, 5, 20, 20, 4, 5, 2, 25, 1};
        System.out.println(Arrays.toString((breakingRecords(array))));
    }

}
