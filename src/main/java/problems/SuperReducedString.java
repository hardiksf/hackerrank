package problems;

public class SuperReducedString {

    static String superReducedString(String s) {
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                s = s.substring(0, i - 1) + s.substring(i + 1);
                i = 0;
            }

        }

        if (s.length() != 0) {
            return s;
        } else {
            return "Empty String";
        }

    }

    public static void main(String[] args) {
        System.out.println(superReducedString("aaabccddd"));
    }
}
