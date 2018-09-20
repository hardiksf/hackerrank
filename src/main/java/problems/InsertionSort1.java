package problems;

public class InsertionSort1 {
    static void insertionSort1(int n, int[] arr) {
        if (n == 1) {
            printArray(arr);
        } else {
            int value = arr[n - 1];
            for (int i = n - 2; i <= arr.length; i--) {
                // When value is minimum number
                if (i == -1) {
                    arr[0] = value;
                    printArray(arr);
                    break;
                }
                if (arr[i] > value) {
                    arr[i + 1] = arr[i];
                    printArray(arr);
                    System.out.println();
                } else {
                    arr[i + 1] = value;
                    printArray(arr);
                    break;
                }
            }
        }

    }

    static void printArray(int[] array) {
        for (int i : array) {
            System.out.print(i + " ");
        }
    }

    public static void main(String[] args) {
        int n = 10;
        int[] arr = {2, 3, 4, 5, 6, 7, 8, 9, 10, 1};
        insertionSort1(n, arr);
    }

}
