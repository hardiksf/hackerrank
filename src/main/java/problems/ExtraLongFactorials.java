package problems;

import java.math.BigInteger;

public class ExtraLongFactorials {
    static void extraLongFactorials(int n) {
        BigInteger result = BigInteger.valueOf(1);
        while (n > 0) {
            result = result.multiply(BigInteger.valueOf(n));
            n--;
        }
        System.out.println(result);
    }

    public static void main(String[] args) {
        extraLongFactorials(25);
    }
}
