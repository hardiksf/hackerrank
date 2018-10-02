package problems;

public class MakingAnagrams {
    static int makingAnagrams(String s1, String s2) {
        int counter = 0;

        StringBuilder stringBuilder1 = new StringBuilder(s1);
        StringBuilder stringBuilder2 = new StringBuilder(s2);

        for (int i = 0; i < stringBuilder1.length(); i++) {

            char currentCharacter = stringBuilder1.charAt(i);
            int indexOfCurrentCharacterInBuilder2 = stringBuilder2.indexOf(Character.toString(currentCharacter));
            if (indexOfCurrentCharacterInBuilder2 != -1) {
                stringBuilder1.deleteCharAt(i);
                stringBuilder2.deleteCharAt(indexOfCurrentCharacterInBuilder2);
                counter = counter + 1;
                i = i - 1;
            }
        }

        return s1.length() + s2.length() - 2 * counter;
    }
}
