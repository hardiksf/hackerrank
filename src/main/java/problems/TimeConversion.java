package problems;

public class TimeConversion {
    static String timeConversion(String s) {
        int indexBeforeAmPm = s.length() - 2;
        String amPm = s.substring(indexBeforeAmPm);
        String hours = s.substring(0, 2);
        String minutes = s.substring(3, 5);
        String seconds = s.substring(6, 8);

        if (amPm.equalsIgnoreCase("PM") && !hours.equalsIgnoreCase("12")) {
            int hoursInt = Integer.parseInt(hours);
            hoursInt = hoursInt + 12;

            hours = String.valueOf(hoursInt);
        }
        if (amPm.equalsIgnoreCase("AM") && hours.equalsIgnoreCase("12")) {

            System.out.println(Integer.parseInt(hours));
            int hoursInt = Integer.parseInt(hours) - 12;
            hours = String.valueOf(hoursInt) + "0";
        }

        StringBuilder output = new StringBuilder();
        output.append(hours).append(":").append(minutes).append(":").append(seconds);
        return output.toString();
    }

    public static void main(String[] args) {

        System.out.println(timeConversion("12:05:45PM"));

    }
}
