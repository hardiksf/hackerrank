package problems;

public class CaesarCipher {
    static String caesarCipher(String s, int k) {
        int newK = k % 26;
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            int ascii = s.charAt(i);

            // upper-case
            if (ascii >= 65 && ascii <= 90) {
                ascii = ascii + newK;
                if (ascii > 90) {
                    int outOfBoundsBy = ascii - 90;
                    ascii = 64 + (outOfBoundsBy % 26);
                }
            }

            // lower -case
            if (ascii >= 97 && ascii <= 122) {
                ascii = ascii + newK;
                if (ascii > 122) {
                    int outOfBoundsBy = ascii - 122;
                    ascii = 96 + (outOfBoundsBy % 26);
                }
            }
            char asciiToCharacter = (char) ascii;
            stringBuilder.append(asciiToCharacter);
        }

        return stringBuilder.toString();

    }

    public static void main(String[] args) {
        System.out.println(caesarCipher("159357lcfd", 98));
        //Test case # 3
        //159357fwzx - expected
    }
}
