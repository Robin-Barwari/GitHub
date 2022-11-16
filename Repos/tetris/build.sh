#! /bin/sh
cc Main.c `pkg-config --libs --cflags raylib` -o Game
./Game