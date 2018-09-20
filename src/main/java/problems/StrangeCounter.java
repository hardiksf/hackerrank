package problems;

public class StrangeCounter {
    static long strangeCounter(long t) {

        long remainder = 3;
        while (t > remainder) {
            System.out.println("t: " + t);
            System.out.println("remainder: " + remainder);
            t = t - remainder;
            remainder = remainder * 2;

        }
        System.out.println("t: " + t);
        System.out.println("remainder: " + remainder);
        return remainder - t + 1;

    }

    public static void main(String[] args) {
        System.out.println(strangeCounter(13));
    }
}
