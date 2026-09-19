#include <iostream>
using namespace std;

int main(){
    int x = 65;
    char* p = reinterpret_cast<char*>(&x);

    for (int i = 0; i <sizeof(int); i++;) {
        cout << "Address: " << (void*)(p + i) 
             << " -> Byte value: " << (int)p[i] << endl;
    }
}