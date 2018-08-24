package problems;

import java.util.Arrays;

public class EqualizeArray {
    static int equalizeArray(int[] arr) {
        int maxOccurance = 0;
        int[] uniqueNumbers = Arrays.stream(arr).distinct().toArray();
        for (int i = 0; i < uniqueNumbers.length; i++) {
            int count = 0;
            for (int j = 0; j < arr.length; j++) {

                if (uniqueNumbers[i] == arr[j]) {
                    count = count + 1;
                }
                if (count > maxOccurance) {
                    maxOccurance = count;
                }
            }

        }
        return arr.length - maxOccurance;
    }

    public static void main(String[] args) {
        int[] myArraya = {3, 3, 2, 1, 3};
        System.out.println(equalizeArray(myArraya));
    }
}
