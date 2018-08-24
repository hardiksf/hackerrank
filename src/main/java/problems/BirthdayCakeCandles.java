package problems;

import java.io.IOException;
import java.util.stream.IntStream;

public class BirthdayCakeCandles {
    // Complete the birthdayCakeCandles function below.
    static int birthdayCakeCandles(int[] ar) {
        int count = 0;
        int highestNumber = IntStream.of(ar).summaryStatistics().getMax();
        for (int i : ar) {
            if(i == highestNumber) {
                count = count + 1;
            }
        }
        return count;
    }

    public static void main(String[] args) throws IOException {

        int[] myArray = {3, 5, 5, 7};
        int result = birthdayCakeCandles(myArray);
        System.out.println(result);

    }
}
