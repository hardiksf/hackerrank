package problems;

import java.util.HashSet;
import java.util.Set;

public class SockMerchant {
    static int sockMerchant(int n, int[] ar) {
        // Map<Integer, Integer> map = new HashMap<>();
        // for (int i : ar) {
        // if (map.containsKey(i)) {
        // map.put(i, map.get(i) + 1);
        // } else {
        // map.put(i, 1);
        // }
        // }
        //
        // int numberOfPairsInSameColor = 0;
        // int totalNumberOfPairs= 0;
        // for (Integer value : map.values()) {
        // if (value > 1) {
        // if (value % 2 != 0) {
        // value = value - 1;
        // }
        // numberOfPairsInSameColor = (value + 1) / 2;
        // totalNumberOfPairs = totalNumberOfPairs + numberOfPairsInSameColor;
        // }
        // }
        // return totalNumberOfPairs;

        Set<Integer> colors = new HashSet<>();
        int pairs = 0;
        for (int i = 0; i < n; i++) {

            if (!colors.contains(ar[i])) {
                colors.add(ar[i]);
            } else {
                pairs++;
                colors.remove(ar[i]);
            }
        }

        return pairs;
    }

    public static void main(String[] args) {
        int[] array = {10, 20, 20, 10, 10, 30, 50, 10, 20};
        System.out.println(sockMerchant(9, array));

    }
}
