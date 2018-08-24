package problems;

public class ChocolateFeast {
    static int chocolateFeast(int n, int c, int m) {
        int chocolates = (int) Math.floor(n / c);
        int wrappers = chocolates;
        int subsequentWrappers = 0;
        int additionalChocolates = 0;
        while (wrappers >= m) {
            subsequentWrappers = chocolates % m;
            additionalChocolates = (int) (Math.floor(wrappers / m));
            chocolates = chocolates + additionalChocolates;
            wrappers = additionalChocolates + subsequentWrappers;
        }
        System.out.println(chocolates);
        return chocolates;
    }

    public static void main(String[] args) {
        chocolateFeast(1, 2, 5);
    }
}
