package problems;

import java.util.Arrays;

public class MarcsCakewalk {
    static long marcsCakewalk(int[] calorie) {
        long result = 0;
        int[] sortedArray = Arrays.stream(calorie).sorted().toArray();
        for (int i = 0; i < sortedArray.length; i++) {
            result = (long) (result + (Math.pow(2, i) * sortedArray[sortedArray.length - 1 - i]));
        }
        return result;
    }
}
