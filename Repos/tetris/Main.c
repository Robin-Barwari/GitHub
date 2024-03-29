#include <stdio.h>
#include <stdlib.h>

#include "raylib.h"

int shapes[7][4][4][4] = {
    {
        // T Shape
        {
            {1, 1, 1, 0},
            {0, 1, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {1, 0, 0, 0},
            {1, 1, 0, 0},
            {1, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {0, 1, 0, 0},
            {1, 1, 1, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {0, 1, 0, 0},
            {1, 1, 0, 0},
            {0, 1, 0, 0},
            {0, 0, 0, 0},
        },
    },

    {
        // Square shape
        {
            {2, 2, 0, 0},
            {2, 2, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {2, 2, 0, 0},
            {2, 2, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {2, 2, 0, 0},
            {2, 2, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {2, 2, 0, 0},
            {2, 2, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
    },
    {
        // I shape
        {
            {0, 3, 0, 0},
            {0, 3, 0, 0},
            {0, 3, 0, 0},
            {0, 3, 0, 0},
        },
        {
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {3, 3, 3, 3},
            {0, 0, 0, 0},
        },
        {
            {0, 0, 3, 0},
            {0, 0, 3, 0},
            {0, 0, 3, 0},
            {0, 0, 3, 0},
        },
        {
            {0, 0, 0, 0},
            {3, 3, 3, 3},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
    },
    {
        // Z Shape
        {
            {4, 4, 0, 0},
            {0, 4, 4, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {0, 4, 0, 0},
            {4, 4, 0, 0},
            {4, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {4, 4, 0, 0},
            {0, 4, 4, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
        },
        {
            {0, 4, 0, 0},
            {4, 4, 0, 0},
            {4, 0, 0, 0},
            {0, 0, 0, 0},
        },
    },
    {// L shape
     {
         {5, 0, 0, 0},
         {5, 0, 0, 0},
         {5, 5, 0, 0},
         {0, 0, 0, 0},
     },
     {
         {5, 5, 5, 0},
         {5, 0, 0, 0},
         {0, 0, 0, 0},
         {0, 0, 0, 0},
     },
     {
         {5, 5, 0, 0},
         {0, 5, 0, 0},
         {0, 5, 0, 0},
         {0, 0, 0, 0},
     },
     {
         {0, 0, 5, 0},
         {5, 5, 5, 0},
         {0, 0, 0, 0},
         {0, 0, 0, 0},
     },
     {
         // reverse L shape
         {
             {0, 6, 0, 0},
             {0, 6, 0, 0},
             {6, 6, 0, 0},
             {0, 0, 0, 0},
         },
         {
             {6, 0, 0, 0},
             {6, 6, 6, 0},
             {0, 0, 0, 0},
             {0, 0, 0, 0},
         },
         {
             {6, 6, 0, 0},
             {6, 0, 0, 0},
             {6, 0, 0, 0},
             {0, 0, 0, 0},
         },
         {
             {6, 6, 6, 0},
             {0, 0, 6, 0},
             {0, 0, 0, 0},
             {0, 0, 0, 0},
         },
     },
     {
         // reverse Z Shape
         {
             {0, 7, 7, 0},
             {7, 7, 0, 0},
             {0, 0, 0, 0},
             {0, 0, 0, 0},
         },
         {
             {0, 7, 0, 0},
             {0, 7, 7, 0},
             {0, 0, 7, 0},
             {0, 0, 0, 0},
         },
         {
             {0, 7, 7, 0},
             {7, 7, 0, 0},
             {0, 0, 0, 0},
             {0, 0, 0, 0},
         },
         {
             {0, 7, 0, 0},
             {0, 7, 7, 0},
             {0, 0, 7, 0},
             {0, 0, 0, 0},
         },
     }}};

int main()
{

    int current_rotation = 0;
    int x_offset = 0;

    InitWindow(800, 600, "Robins Tetris");
    while (!WindowShouldClose())
    {

        if (IsKeyPressed(KEY_DOWN))
        {
            current_rotation += 1;
            if (current_rotation > 3)
            {
                current_rotation = 0;
            }
        }

        if (IsKeyPressed(KEY_LEFT))
        {
            x_offset -= 32;
            if (x_offset < 0)
            {
                x_offset = 0;
            }
        }

        if (IsKeyPressed(KEY_RIGHT))
        {
            x_offset += 32;
            if (x_offset > 320)
            {
                x_offset = 320;
            }
        }

        BeginDrawing();
        for (int y = 0; y < 4; y++)
        {
            for (int x = 0; x < 4; x++)
            {
                if (shapes[current_rotation][y][x] == 1)
                {
                    DrawRectangle((32 * x) + x_offset, 32 * y, 32, 32, GREEN);
                }
            }
        }
        ClearBackground(WHITE);
        EndDrawing();
    }
    return 0;
}