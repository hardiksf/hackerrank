package problems;

public class CountingValleys {
    static int countingValleys(int n, String s) {
        int count = 0;
        int currentLevel = 0;
        for (char c : s.toCharArray()) {
            if (c == 'U') {
                currentLevel = currentLevel + 1;
            }
            if (c == 'D') {
                currentLevel = currentLevel - 1;
            }
            if (currentLevel == 0 && c == 'U') {
                count = count + 1;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "UDDDUDUU";
        countingValleys(8, s);

    }
}
