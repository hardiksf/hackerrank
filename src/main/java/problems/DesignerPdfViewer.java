package problems;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

public class DesignerPdfViewer {
    static int designerPdfViewer(int[] h, String word) {
        Map<Character, Integer> myMap = new HashMap<>();
        int j = 0;
        for (char i = 'a'; i <= 'z'; i++) {
            myMap.put(i, h[j]);
            j = j + 1;
        }
        int wordLength = word.length();
        int[] wordHeight = new int[wordLength];
        for (int i = 0; i < wordLength; i++) {
            wordHeight[i] = myMap.get(word.charAt(i));
        }
        int maxHeight = IntStream.of(wordHeight).summaryStatistics().getMax();
        return maxHeight * wordLength;
    }

}
