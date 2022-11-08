#include <stdio.h>

int main(void){
    int pulse;

    int age;

    printf("What is your age.\n");
    printf("Enter your age and press return > ");
    scanf("%d", &age);

    int rest_heart_rate;  

    printf("Take your resting pulse for 10 seconds.\n");
    printf("Enter your pulse rate and press return > ");
    scanf("%d", &pulse);

    int max_heart_rate;
    
    max_heart_rate = 220 - age;
    printf("Your max heart rate is %d.\n", max_heart_rate);
                

    rest_heart_rate = pulse * 6;
    printf ("Your resting heart rate is %d.\n", rest_heart_rate);

    if (rest_heart_rate > 75)
    printf ("Keep up your exercise program!\n");
    else
    printf ("Your heart is doing well!\n");

    return (0);
}