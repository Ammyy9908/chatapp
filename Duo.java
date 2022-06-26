
class Duo{
  public static boolean checkNumberContainLessThanTwoDifferentDigit(int number){
    int[] digits = new int[10];
    while(number > 0){
      digits[number % 10]++;
      number /= 10;
    }
    for(int i = 0; i < 10; i++){
      if(digits[i] > 1) return true;
    }
    return false;
  }
  public static void main(String[] args){
    System.out.println("Duo");
    boolean isduo = checkNumberContainLessThanTwoDifferentDigit(12);
    System.out.println((isduo ? "duo" : "not duo"));
  }
}