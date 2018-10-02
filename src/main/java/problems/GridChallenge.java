package problems;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class GridChallenge {
    static String gridChallenge(String[] grid) {
        String result = "YES";
        String[] sortedArray = new String[grid.length];

        for (int i = 0; i < grid.length; i++) {
            sortedArray[i] = Stream.of(grid[i].split("")).sorted().collect(Collectors.joining());
        }

        for (int i = 0; i < sortedArray.length; i++) {
            char smallestChar = 'a';
            for (int j = 0; j < sortedArray[0].length(); j++) {
                char currentChara = sortedArray[j].charAt(j);
                if (currentChara < smallestChar) {
                    result = "NO";
                    break;
                } else {
                    smallestChar = currentChara;
                }
            }
        }
        System.out.println(result);
        return result;
    }

    public static void main(String[] args) {
        String[] grid = {"1", "2", "zx", "fw"};
        gridChallenge(grid);
    }

}
