package problems;

import java.util.Arrays;

public class FunnyString {
    static String funnyString(String s) {
        String result = "Funny";
        int stringLength = s.length();
        int[] asciiArray = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            asciiArray[i] = s.charAt(i);
        }

        for (int i = 0; i < asciiArray.length-1; i++) {
            if (Math.abs(asciiArray[i] - asciiArray[i + 1]) != Math.abs(asciiArray[stringLength - 1 - i] - asciiArray[stringLength - 2 - i])) {
                result = "Not Funny";
                break;
            }
        }

        System.out.println(Arrays.toString(asciiArray));
        System.out.println(result);
        return result;

    }

    public static void main(String[] args) {
        funnyString("ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq");
    }
}
