package problems;

public class TheLoveLetterMystery {
    static int theLoveLetterMystery(String s) {
        int counter = 0;
        int halfStringSize = (s.length() % 2 == 0) ? (int) Math.floor(s.length() / 2) - 1 : (int) Math.floor(s.length() / 2);
        for (int i = 0; i <= halfStringSize; i++) {
            counter = counter + Math.abs(s.charAt(i) - s.charAt(s.length() - 1 - i));
        }
        return counter;
    }

    public static void main(String[] args) {
        theLoveLetterMystery("abcd");
    }
}
