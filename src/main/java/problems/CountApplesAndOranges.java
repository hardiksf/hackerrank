package problems;
import java.util.Arrays;

public class CountApplesAndOranges {
    static void countApplesAndOranges(int s, int t, int a, int b, int[] apples, int[] oranges) {
        System.out.println(Arrays.stream(apples).filter(apple -> apple + a >= s && apple + a <= t).toArray().length);
        System.out.println(Arrays.stream(oranges).filter(orange -> orange + b >= s && orange + b <= t).toArray().length);
    }

    public static void main(String[] args) {
        int s = 7;
        int t = 11;
        int a = 5;
        int b = 15;
        int[] apples = {-2, 2, 1};
        int[] oranges = {5, -6};
        countApplesAndOranges(s, t, a, b, apples, oranges);
    }

}
