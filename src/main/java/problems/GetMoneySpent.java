package problems;

public class GetMoneySpent {
    static int getMoneySpent(int[] keyboards, int[] drives, int b) {
        int result = -1;
        for (int keyboard : keyboards) {
            for (int i = 0; i < drives.length; i++) {
                if ((keyboard + drives[i] > result) && (keyboard + drives[i] <= b)) {
                    result = keyboard + drives[i];
                }
            }
        }
        return result;
    }

}
