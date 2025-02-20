package javaaktu;
import java.io.*;
class A48
{
    public static void main(String[] arg)
    {
        try{
           
            int a1=fin.read();
            while(a1>=0)
            {
            System.out.print((char)a1);
            a1=fin.read();
        }
        fin.close();
    }catch(Exception ee)
    {
        System.out.println(ee);
    }
    System.out.println("\nVIDYASAGAR SONKAR\n2201920100327");
}
}