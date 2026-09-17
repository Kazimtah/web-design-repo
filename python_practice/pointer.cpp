#include <stdio.h>

int main(){
    int a = 125;
    int *p;
    p = &a;
    printf("Size of the interger %d", sizeof(int));
    printf("Address = %d, value = %d", p, *p);
}