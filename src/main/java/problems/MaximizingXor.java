package problems;

public class MaximizingXor {
    static int maximizingXor(int l, int r) {
        int result = 0;
        if (r > l) {
            for (int i = l; i <= r - 1; i++) {
                String string1 = Integer.toBinaryString(i);
                String string2 = Integer.toBinaryString(i + 1);
                int counter = 0;
                for (int j = 0; j < string1.length(); j++) {
                    if (string1.charAt(j) != string2.charAt(j)) {
                        counter = counter + 1;
                    }
                }
                if (counter > result) {
                    result = counter;
                }

                System.out.println(string1 + ":" + string2);
            }
        }
        return result;

    }

    public static void main(String[] args) {
        maximizingXor(5, 6);
    }

}
