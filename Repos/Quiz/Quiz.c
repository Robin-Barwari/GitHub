#include <stdio.h>
#include <ctype.h>

int main()
{
   char questions[][100] = {"1. When did Overwatch Launch?: ",
                            "2. When did Overwatch 2 Launch?:",
                            "3. What is the name of the next Hero to be released?: "};
                            
   char options[][100] = {"A. 2013", "B. 2016", "C. 2022", "D. 2018",
                          "A. 2022", "B. 2018", "C. 2020", "D. 2021",
                          "A. Zenyatta", "B. Junker Queen", "C. Ramattra", "D. Kiriko"};
                          
   char answers[] = {'B', 'A', 'B'};
   int numberOfQuestions = sizeof(questions)/sizeof(questions[0]);

   char guess;
   int score;

   printf("OVERWATCH QUIZ GAME\n");    

   for(int i = 0; i < numberOfQuestions; i++)
   {
      printf("*********************\n");
      printf("%s\n", questions[i]);
      printf("*********************\n");

      for(int j = (i * 4); j < (i * 4) + 4; j++)
      {
         printf("%s\n", options[j]);
      }

      printf("guess: ");
      scanf("%c", &guess);
      scanf("%c"); //clear \n from input buffer

      guess = toupper(guess);

      if(guess == answers[i])
      {
         printf("CORRECT!\n");
         score++;
      }
      else
      {
         printf("WRONG!\n");
      }
   }
   printf("*********************\n");
   printf("FINAL SCORE: %d/%d\n", score, numberOfQuestions);
   printf("*********************\n");
 
   return 0;
}