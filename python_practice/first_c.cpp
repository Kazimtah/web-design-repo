#include <iostream>
using namespace std;
int main(){
 int a = 5;
 double b = 3.14;
 char c = 'A';
 int* pa=&a;
 double* pb = &b;
 char* pc = &c;

 cout << "Size of int*    : " << sizeof(pa) << " bytes\n";
 cout << "Size of double*    : " << sizeof(pb) << " bytes\n";
 cout << "Size of char*    : " << sizeof(pc) << " bytes\n";
}