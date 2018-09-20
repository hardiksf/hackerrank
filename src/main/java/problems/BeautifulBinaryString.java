package problems;

public class BeautifulBinaryString {
    static int beautifulBinaryString(String b) {
        int count = 0;
        final String NON_DESIRED_CHARACTERS = "010";
        while (b.contains(NON_DESIRED_CHARACTERS)) {
            int indexOfNonDesiredCharacters = b.indexOf(NON_DESIRED_CHARACTERS);
            b = b.substring(0, indexOfNonDesiredCharacters + 2) + "1" + b.substring(indexOfNonDesiredCharacters + 3);
            count = count + 1;
        }
        return count;

    }

    public static void main(String[] args) {
        beautifulBinaryString("999010999");
    }
}
