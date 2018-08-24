package problems;

import java.util.Arrays;
//THIS IS WRONG SOLUTION, JS HAS CORRECT ONE
public class PickingNumbers {
    static int pickingNumbers(int[] a) {
        int result = 0;
        int count = 0;
        int[] uniqueNumbers = Arrays.stream(a).distinct().toArray();
        for (int i = 0; i < uniqueNumbers.length; i++) {
            for (int j = i + 1; j < uniqueNumbers.length; j++) {
                for (int j2 = 0; j2 < a.length; j2++) {
                    if (a[j2] == uniqueNumbers[i] || a[j2] == uniqueNumbers[j]) {
                        count = count + 1;
                        System.out.println("count" + count);
                    }
                }
                if (count > result) {
                    result = count;
                }
                count = 0;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] myArray = {1, 2, 2, 3, 1, 2};
        System.out.println(pickingNumbers(myArray));
    }
}
