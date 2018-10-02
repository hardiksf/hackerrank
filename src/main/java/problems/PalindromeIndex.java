package problems;

public class PalindromeIndex {

    static boolean isStringPalindrom(String string) {

        boolean result = true;
        for (int i = 0; i < Math.floor(string.length() / 2); i++) {
            if (string.charAt(i) != string.charAt(string.length() - i - 1)) {
                result = false;
            }
        }
        return result;
    }

    static int palindromeIndex(String s) {

        String originalString = s;
        int result = -1;
        int stringLength = s.length();
        int halfStringLength = (int) Math.floor(stringLength / 2);
        boolean isModifiedStringPalindrom = true;
        int modifiedCharacterIndex = -1;

        for (int i = 0; i < halfStringLength; i++) {

            // if 0th and last character is not matching
            if (s.charAt(i) != s.charAt(stringLength - 1 - i)) {
                System.out.println("s.charAt(i): " + s.charAt(i));
                System.out.println("s.charAt(stringLength - 1 - i): " + s.charAt(stringLength - 1 - i));

                // look for 1st and last, if they are matching, remove 0th
                if (s.charAt(i + 1) == s.charAt(stringLength - 1 - i)) {
                    StringBuffer stringBuffer = new StringBuffer(s);
                    stringBuffer.deleteCharAt(i);
                    s = stringBuffer.toString();
                    if (isStringPalindrom(s)) {
                        isModifiedStringPalindrom = true;
                        result = i;
                        break;
                    } else {
                        s = originalString;
                    }

                }
                // look for 0th and second last, if they are matching, remove
                // last
                else if (s.charAt(i) == s.charAt(stringLength - 2 - i)) {
                    StringBuffer stringBuffer = new StringBuffer(s);
                    stringBuffer.deleteCharAt(stringLength - 1 - i);
                    s = stringBuffer.toString();

                    if (isStringPalindrom(s)) {
                        isModifiedStringPalindrom = true;
                        result = stringLength - 1 - i;
                        break;
                    } else {
                        s = originalString;
                    }

                }
                // string can't be palindrome. So return -1

            }

        }

        if (!isModifiedStringPalindrom) {
            for (int i = 0; i < Math.floor(s.length() / 2); i++) {
                // Not using stringLength here because s got changed
                if (s.charAt(i) != s.charAt(s.length() - i - 1)) {
                    isModifiedStringPalindrom = false;
                    break;
                }
            }
        }

        if (isModifiedStringPalindrom && modifiedCharacterIndex != -1) {
            result = modifiedCharacterIndex;
        }
        System.out.println(result);
        return result;
    }

    public static void main(String[] args) {
        palindromeIndex("hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh");
    }
}
