package problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BetweenTwoSets {

    static boolean allFactorsOfNumber(int[] a, int number) {
        for (int i : a) {
            return number % i == 0;
        }
        return false;
    }

    static int getTotalX(int[] a, int[] b) {
        int maxInA = Arrays.stream(a).max().getAsInt();
        int minInB = Arrays.stream(b).min().getAsInt();
        int count = 0;
        int theNumber = maxInA;
        List<Integer> theNumberList = new ArrayList<>();

        for (int i = theNumber; i <= minInB;) {
            if (allFactorsOfNumber(a, theNumber)) {
                theNumberList.add(theNumber);
            }
            theNumber = theNumber + maxInA;
            i = theNumber;
        }
        System.out.println(theNumberList);

        for (int eachNumber : theNumberList) {
            if (allFactorsOfNumber(b, eachNumber)) {
                count = count + 1;
            }
        }

        return count;

    }

    public static void main(String[] args) {
//        int[] a = {3, 4};
//        int[] b = {24, 28};
        
        int[] a = {2, 4};
        int[] b = {16, 32, 96};

        System.out.println(getTotalX(a, b));
    }

}
