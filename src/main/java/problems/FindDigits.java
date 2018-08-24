package problems;

public class FindDigits {
    static int findDigits(int n) {
        int count = 0;
        StringBuilder stringBuilder = new StringBuilder(Integer.toString(n));
        for (int i = 0; i < stringBuilder.length(); i++) {
            char c = stringBuilder.charAt(i);
            int eachDigit = Integer.parseInt(String.valueOf(c));
            if(eachDigit !=0 && n % eachDigit == 0) {
             count = count + 1;   
            }
        }
        return count;
    }
}
