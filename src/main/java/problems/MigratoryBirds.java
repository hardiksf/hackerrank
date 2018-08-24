package problems;

import java.util.HashMap;
import java.util.Map;

public class MigratoryBirds {
    static int migratoryBirds(int[] ar) {

        Map<Integer, Integer> birdsHashMap = new HashMap<Integer, Integer>();
        for (int i : ar) {
            if (birdsHashMap.containsKey(i)) {
                birdsHashMap.put(i, birdsHashMap.get(i) + 1);
            } else {
                birdsHashMap.put(i, 1);
            }
        }

        int maxOccurance = 0;
        int numberWithMaxOccurance = 0;

        for (int key : birdsHashMap.keySet()) {
            if (birdsHashMap.get(key) > maxOccurance) {
                maxOccurance = birdsHashMap.get(key);
                numberWithMaxOccurance = key;
            }

        }
        return numberWithMaxOccurance;

    }

    public static void main(String[] args) {
        int[] myArray = {1, 4, 4, 3, 1, 3};
        System.out.println(migratoryBirds(myArray));
    }
}
