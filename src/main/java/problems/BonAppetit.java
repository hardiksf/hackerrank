package problems;

import java.util.List;

public class BonAppetit {
    static void bonAppetit(List<Integer> bill, int k, int b) {
        int totalBill = bill.stream().mapToInt(i -> i.intValue()).sum();
        int annaOwes = ((totalBill - bill.get(k)) / 2);
        if (annaOwes == b) {
            System.out.println("Bon Appetit");
        } else {
            System.out.println(b - annaOwes);
        }

    }
}
