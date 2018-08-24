package problems;

public class KaprekarNumbers {
    static void kaprekarNumbers(int p, int q) {
        StringBuilder result = new StringBuilder();
        for (int i = p; i <= q; i++) {
            int numberLength = String.valueOf(i).length();
            long square = (long) Math.pow(i, 2);
            int squareLength = String.valueOf(square).length();
            StringBuilder stringBuilder = new StringBuilder(Long.toString(square));
            int rightPart = Integer.parseInt(stringBuilder.substring(squareLength - numberLength));
            int combined = 0;
            if (squareLength != 1) {
                int leftPart = Integer.parseInt(stringBuilder.substring(0, squareLength - numberLength));
                combined = rightPart + leftPart;
            } else {
                combined = rightPart;
            }

            if (i == combined) {
                result.append(Integer.toString(i)).append(" ");
            }
        }
        if (result.length() == 0) {
            result = result.append("INVALID RANGE");
        }
        System.out.println(result);

    }

    public static void main(String[] args) {
        kaprekarNumbers(10000, 10000);
    }

}
