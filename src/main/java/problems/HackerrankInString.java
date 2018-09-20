package problems;

public class HackerrankInString {
    static String hackerrankInString(String s) {
        String result = "NO";
        StringBuilder stringBuilder = new StringBuilder();
        char[] hackerRankCharacters = {'h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'};

        for (char c : hackerRankCharacters) {
            if (s.indexOf(c) > -1) {
                System.out.println("c: " + c);

                if (stringBuilder.toString().equalsIgnoreCase("hacker")) {
                    if (s.indexOf(c, s.indexOf(c) + 1) == -1) {
                        result = "NO";
                        break;
                    }
                    // Overloading indexOf() to get second occurrence of
                    // character
                    s = s.substring(s.indexOf(c, s.indexOf(c) + 1));
                } else {
                    s = s.substring(s.indexOf(c));
                }

                stringBuilder.append(s.charAt(0));
                System.out.println("s: " + s);
                System.out.println("stringBuilder: " + stringBuilder);
                System.out.println();

            }
        }

        if (stringBuilder.toString().equalsIgnoreCase("hackerrank")) {
            result = "YES";
        }
        return result;

    }

    public static void main(String[] args) {
        // System.out.println(hackerrankInString("knarrekcah"));
        // System.out.println(hackerrankInString("hackerrank"));
        System.out.println(hackerrankInString("hackeronek"));
        // System.out.println(hackerrankInString("abcdefghijklmnopqrstuvwxyz"));
        // System.out.println(hackerrankInString("rhackerank"));
        // System.out.println(hackerrankInString("ahankercka"));
        // System.out.println(hackerrankInString("hacakaeararanaka"));
        // System.out.println(hackerrankInString("hhhhaaaaackkkkerrrrrrrrank"));
        // System.out.println(hackerrankInString("crackerhackerknar"));
        // System.out.println(hackerrankInString("hhhackkerbanker"));

        // test case 2:
        // knarrekcah
        // hackerrank
        // hackeronek
        // abcdefghijklmnopqrstuvwxyz
        // rhackerank
        // ahankercka
        // hacakaeararanaka
        // hhhhaaaaackkkkerrrrrrrrank
        // crackerhackerknar
        // hhhackkerbanker

        // NO
        // YES
        // NO
        // NO
        // NO
        // NO
        // YES
        // YES
        // NO
        // NO
    }
}
