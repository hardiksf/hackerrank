package problems;

import java.util.Arrays;

public class Toys {
    static int toys(int[] w) {
        int numberOfContainers = 0;

        int[] sortedArray = Arrays.stream(w).sorted().toArray();

        int arrayLength = sortedArray.length;
        int counter = 1;
        int minWeightInCurrentContainer = sortedArray[0];
        for (int i = 0; i < arrayLength;) {

            int nextIndex = i + 1;//
            if (nextIndex < arrayLength) {
                int itemAtNextIndex = sortedArray[nextIndex];//
                while (counter < 6 && itemAtNextIndex < minWeightInCurrentContainer + 4) {
                    i = i + 1;//
                    counter = counter + 1;
                    nextIndex = nextIndex + 1;
                    if (nextIndex < arrayLength - 1) {
                        itemAtNextIndex = sortedArray[nextIndex];
                    }

                }
                minWeightInCurrentContainer = itemAtNextIndex;
            } else {
                i = i + 1;
            }
            numberOfContainers = numberOfContainers + 1;
            counter = 1;

        }
        System.out.println(numberOfContainers);
        return numberOfContainers;
    }

    public static void main(String[] args) {
        int[] w = {12, 15, 7, 8, 19, 24};
        toys(w);
    }
}
