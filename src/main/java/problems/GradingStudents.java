package problems;
import java.util.Arrays;

public class GradingStudents {
    static int[] gradingStudents(int[] grades) {
        for (int i = 0; i < grades.length; i++) {

            if (grades[i] >= 38) {
                if (grades[i] % 5 > 2) {
                    grades[i] = grades[i] + 5 - (int) Math.ceil(grades[i] % 5);
                }
            }
        }
        return grades;

    }

    public static void main(String[] args) {
        int[] myArray = {73, 67, 38, 33};
        System.out.println(Arrays.toString(gradingStudents(myArray)));
    }
}
