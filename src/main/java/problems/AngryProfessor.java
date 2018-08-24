package problems;

import java.util.Arrays;

public class AngryProfessor {
    static String angryProfessor(int k, int[] a) {
       int[] abc = Arrays.stream(a).filter(arrivalTime -> arrivalTime < 1).toArray();
       
       System.out.println(Arrays.toString(abc));
       System.out.println(abc.length);
        
        int numberOfStudentOnTime = Arrays.stream(a).filter(arrivalTime -> arrivalTime < 1).toArray().length;
        return (numberOfStudentOnTime >= k) ? "NO" : "YES";
    }

    public static void main(String[] args) {
        int[] myArray = {-1, -3, 4, 2};
        angryProfessor(3, myArray);
    }
}
