package problems;

public class RepeatedString {

    static long repeatedString(String s, long n) {
        long count = 0;
        int stringLength = s.length();
        long reminder = n % stringLength;
        String sub = s.substring(0, (int) reminder);
        count = sub.chars().filter(ch -> ch == 'a').count();

        if (n > stringLength) {
            long numberOfCompleteStrings = (long) Math.floor(n / stringLength);
            long numberOfTimesAInString = s.chars().filter(ch -> ch == 'a').count();
            count = count + (numberOfCompleteStrings * numberOfTimesAInString);
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "aba";
        System.out.println(repeatedString(s, 10));
    }

    {
        // How to count a particular character in a string
        String myString = "My String";
        long count = myString.chars().filter(ch -> ch == 'a').count();
        System.out.println(count);
    }
}
