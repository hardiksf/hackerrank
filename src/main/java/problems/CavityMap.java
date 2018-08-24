package problems;

import java.util.Arrays;

//Few test cases failed due to Runtime Error

public class CavityMap {
    static String[] cavityMap(String[] grid) {
        String[] result = new String[grid.length];

        for (int i = 0; i < grid.length - 1; i++) {
            StringBuilder stringBuilder = new StringBuilder();
            for (int j = 0; j < grid[i].length(); j++) {
                char c = grid[i].charAt(j);
                if (i != 0) {
                    if ((c > grid[i - 1].charAt(j)) && (c > grid[i].charAt(j - 1)) && (c > grid[i].charAt(j + 1)) && (c > grid[i + 1].charAt(j)))
                        c = 'X';
                }
                stringBuilder.append(c);
                // stringBuilder.append(grid[grid.length - 1]);
            }
            result[i] = stringBuilder.toString();
            System.out.println("stringBuilder: " + stringBuilder);
            // System.out.println(grid[i]);
        }
        result[result.length - 1] = grid[grid.length - 1];
        System.out.println("result array" + Arrays.toString(result));

        return result;
    }

    public static void main(String[] args) {
        String[] array = {"1112", "1912", "1892", "1234"};
        cavityMap(array);

    }

}
