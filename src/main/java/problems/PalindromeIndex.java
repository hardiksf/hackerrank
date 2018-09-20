package problems;

public class PalindromeIndex {
    static int palindromeIndex(String s) {
        int result = -1;
        int stringLength = s.length();
        int halfStringLength = (int) Math.floor(stringLength / 2);
        boolean isModifiedStringPalindrom = true;
        int modifiedCharacterIndex = -1;

//        for (int i = 0; i < halfStringLength; i++) {
//            System.out.println("s.charAt(stringLength - 1 - i): " + s.charAt(stringLength - 1 - i));
//            System.out.println("s.charAt(i): " + s.charAt(i));
//            if (s.charAt(i) != s.charAt(stringLength - 1 - i)) {
//                if (s.charAt(i + 1) == s.charAt(stringLength - 1 - i)) {
//                    s = s.substring(0, i) + s.substring(i + 2);
//                    modifiedCharacterIndex = i;
//                    break;
//                } else if (s.charAt(i) == s.charAt(stringLength - i - 2)) {
//                    s = s.substring(0, i - 1) + s.substring(i + 1);
//                    modifiedCharacterIndex = i;
//                    break;
//                }
//            }
//        }

        for (int i = 0; i < halfStringLength; i++) {
            if (s.charAt(i + 1) != s.charAt(stringLength - 1)) {
                isModifiedStringPalindrom = false;
            }
        }

        if (isModifiedStringPalindrom && modifiedCharacterIndex != -1) {
            result = modifiedCharacterIndex;
        }

        return result;
    }

    public static void main(String[] args) {
        palindromeIndex("aaab");
    }
}
