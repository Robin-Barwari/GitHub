#!/bin/sh

cc beat.c `pkg-config --libs --cflags raylib` -o Beat