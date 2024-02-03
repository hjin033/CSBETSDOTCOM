import java.util.Random;

public class CoinflipGame {

    public static void main(String[] args) {
        // Create an instance of the Random class to generate random numbers
        Random random = new Random();

        // Generate a random double between 0.0 (inclusive) and 100.0 (exclusive)
        double result = 100.0 * random.nextDouble();

        // Determine the outcome based on the generated number
        if (result < 50.0) {
            System.out.println("TAILS");
        } else {
            System.out.println("HEADS");
        }

        // Print the probability result
        System.out.printf("Probability result: %.5f%n", result);
    }
}
