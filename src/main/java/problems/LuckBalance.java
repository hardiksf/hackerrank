package problems;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LuckBalance {
    static int luckBalance(int k, int[][] contests) {

        int maxLuck = 0;
        int totalImportantContests = 0;
        List<Integer> listOfLuckFactorInImportantContests = new ArrayList<>();

        for (int row = 0; row < contests.length; row++) {
            System.out.println(contests[row][0]);
            maxLuck = maxLuck + contests[row][0];
            totalImportantContests = totalImportantContests + contests[row][1];

            if (contests[row][1] == 1) {
                listOfLuckFactorInImportantContests.add(contests[row][0]);
            }

        }

        Collections.sort(listOfLuckFactorInImportantContests);

        int numberOfContentsToWin = 0;
        if (k < totalImportantContests) {
            numberOfContentsToWin = totalImportantContests - k;
        }
        System.out.println("total max luck: " + maxLuck);
        while (numberOfContentsToWin > 0) {

            maxLuck = maxLuck - 2 * listOfLuckFactorInImportantContests.get(0);
            listOfLuckFactorInImportantContests.remove(0);
            numberOfContentsToWin = numberOfContentsToWin - 1;
        }

        System.out.println("max luck: " + maxLuck);
        System.out.println("importantContests:" + totalImportantContests);
        return maxLuck;

    }

    public static void main(String[] args) {
        int[][] contests = {{5, 1}, {2, 1}, {1, 1}, {8, 1}, {10, 0}, {5, 0}};
        luckBalance(3, contests);
    }
}
