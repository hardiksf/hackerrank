package problems;

public class Kangaroo {
    static String kangaroo(int x1, int v1, int x2, int v2) {

        int finalPositionX1 = x1;
        int finalPosiitonX2 = x2;
        String result = null;

        for (int i = 1; i <= 10000; i++) {
            finalPositionX1 = finalPositionX1 + (v1);
            finalPosiitonX2 = finalPosiitonX2 + (v2);

            if (finalPositionX1 == finalPosiitonX2) {
                result = "YES";
                break;
            } else {
                result = "NO";
            }

        }
        return result;

    }

    public static void main(String[] args) {
        int x1 = 0;
        int v1 = 3;
        int x2 = 4;
        int v2 = 2;

        System.out.println(kangaroo(x1, v1, x2, v2));

    }
}
