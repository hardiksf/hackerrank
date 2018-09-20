package problems;

public class MinimumNumber {
    static int minimumNumber(int n, String password) {

        int counter = 4;
        if (password.matches(".*[a-z].*")) {
            counter = counter - 1;
        }
        if (password.matches(".*[A-Z].*")) {
            counter = counter - 1;
        }
        if (password.matches(".*[0-9].*")) {
            counter = counter - 1;
        }
        if (password.matches(".*[!@#$%^&*()\\-+].*")) {
            counter = counter - 1;
        }
        if (n < 6) {
            if (counter < 6 - n) {
                counter = 6 - n;
            }
        }

        return counter;

    }

    public static void main(String[] args) {
        System.out.println(minimumNumber(16, "aR-0aaa"));
    }

}
