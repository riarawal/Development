import java.util.*;
public class Main
{  public static void main(String[] args)
    {   
      Scanner sc=new Scanner(System.in);
      int n=sc.nextInt();
      int z=fact(n);
      System.out.println(z);
    }
    public static int fact(int n)
    {   if(n==0)
            return 1;
        int k=n*fact(n-1);
        return k;
    }
      
    }