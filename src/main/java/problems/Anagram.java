package problems;

public class Anagram {
    static int anagram(String s) {
        int counter = 0;
        int stringLength = s.length();
        // if string length is odd, return -1ß
        if (stringLength % 2 != 0) {
            return -1;
        }
        // else - split into two
        else {
            String subString1 = s.substring(0, (stringLength / 2));
            String subString2 = s.substring(stringLength / 2, stringLength);

            StringBuilder stringBuilder1 = new StringBuilder(subString1);
            StringBuilder stringBuilder2 = new StringBuilder(subString2);

            // iterate through one substring
            for (int i = 0; i < stringBuilder1.length(); i++) {
                // if character in substring1 is in substring, remove both
                // characters
                // and increase counter

                char currentCharacter = stringBuilder1.charAt(i);
                int indexOfCurrentCharacterInBuilder2 = stringBuilder2.indexOf(Character.toString(currentCharacter));
                if (indexOfCurrentCharacterInBuilder2 != -1) {
                    stringBuilder1.deleteCharAt(i);
                    stringBuilder2.deleteCharAt(indexOfCurrentCharacterInBuilder2);
                    counter = counter + 1;
                    i = i - 1;

                }

            }
        }

        // return substring length - counter
        return stringLength / 2 - counter;

    }

    public static void main(String[] args) {
        System.out.println(anagram("apzbczpd"));

    }
}
