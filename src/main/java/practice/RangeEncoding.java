package practice;

public class RangeEncoding {

    public int minRanges(int[] arr) {
        int count = 1;
        for (int i = 0; i < arr.length - 1; i++) {
            if ((arr[i + 1] - arr[i]) > 1) {
                count += 1;
            }
        }
        return count;
    }

}
