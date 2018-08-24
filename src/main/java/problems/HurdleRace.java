package problems;

import java.util.stream.IntStream;

public class HurdleRace {
    static int hurdleRace(int k, int[] height) {
        return Math.max((IntStream.of(height).summaryStatistics().getMax() - k), 0);
        
    }
}
