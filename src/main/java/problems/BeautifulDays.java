package problems;

public class BeautifulDays {
    static int beautifulDays(int i, int j, int k) {
        int count = 0;
        for (int k2 = i; k2 <= j; k2++) {
            StringBuilder stringBuilder = new StringBuilder(Integer.toString(k2));
            int reverseNumber = Integer.parseInt(stringBuilder.reverse().toString());
            if (Math.abs(reverseNumber - k2) % k == 0) {
                count = count + 1;
            }

        }
        return count;
    }
}
