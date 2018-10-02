package problems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MissingNumbers {
    static int[] missingNumbers(int[] arr, int[] brr) {

        Map<Integer, Integer> hashMapA = createHashMap(arr);
        Map<Integer, Integer> hashMapB = createHashMap(brr);

        List<Integer> resultList = new ArrayList<>();

        for (Integer key : hashMapB.keySet()) {
            if (hashMapA.get(key) == null) {
                resultList.add(key);
            } else if (hashMapB.get(key) > hashMapA.get(key)) {
                resultList.add(key);
            }
        }

        int[] resultArray = resultList.stream().mapToInt(element -> element).toArray();
        System.out.println(Arrays.toString(resultArray));

        return resultArray;

    }

    private static Map<Integer, Integer> createHashMap(int[] myArray) {
        Map<Integer, Integer> hashMap = new HashMap<>();
        for (int i = 0; i < myArray.length; i++) {
            if (!hashMap.containsKey(myArray[i])) {
                hashMap.put(myArray[i], 1);
            } else {
                hashMap.put(myArray[i], hashMap.get(myArray[i]) + 1);
            }

        }
        return hashMap;
    }

    public static void main(String[] args) {
        int[] arr = {11, 4, 11, 7, 13, 4, 12, 11, 10, 14};
        int[] brr = {11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12};
        missingNumbers(arr, brr);
    }
}
