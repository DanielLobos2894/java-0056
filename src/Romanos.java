package src;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Romanos {
   public static void main(String[] args) {

       Scanner leer  = new Scanner(System.in);
       int a = romanToInt(leer.nextLine());
       System.out.println(a);
   }

   public  static int romanToInt(String s){

       int result = 0;
       int length =s.length();
       Map<Character,Integer> romanM = getRomanMap();

       for (int i = 0; i< length -1 ; i++){
           int currentValue = romanM.get(s.charAt(i));
           if (currentValue < romanM.get(s.charAt(i + 1))) {
               result -= currentValue;
           } else {

               result += currentValue;
           }

           }


       return result + romanM.get(s.charAt(length-1));
   }

   public static Map<Character,Integer> getRomanMap(){

       Map<Character,Integer> roman = new HashMap<Character,Integer>();
       roman.put('I',1);
       roman.put('V',5);
       roman.put('X',10);
       roman.put('L',50);
       roman.put('C',100);
       roman.put('D',500);
       roman.put('M',1000);
       return roman;
   }

}
