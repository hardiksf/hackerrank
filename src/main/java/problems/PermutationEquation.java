package problems;

import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class PermutationEquation {

    static int[] permutationEquation(int[] p) {
        int min = IntStream.of(p).summaryStatistics().getMin();
        int[] result = new int[p.length];

        for (int i = min; i <= p.length; i++) {
            int initialPosition = getPosition(p, i);
            int finalPosition = getPosition(p, initialPosition);
            result[i - 1] = finalPosition;
        }
        return result;
    }

    private static int getPosition(int[] p, int i) {
        int position;
        position = Arrays.stream(p).boxed().collect(Collectors.toList()).indexOf(i) + 1;
        return position;
    }

    public static void main(String[] args) {
        int[] myArray = {2, 3, 1};
        permutationEquation(myArray);
    }
}
