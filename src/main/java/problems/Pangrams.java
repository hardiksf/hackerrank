package problems;

public class Pangrams {
    static String pangrams(String s) {
        String result = "not pangram";
        String stringWithoutSpace = s.replaceAll(" ", "");
        String lowerCaseString = stringWithoutSpace.toLowerCase();
        long count = lowerCaseString.chars().distinct().count();
        if (count == 26) {
            result = "pangram";
        }
        return result;

    }

    public static void main(String[] args) {
        pangrams("abcA ");
    }
}
