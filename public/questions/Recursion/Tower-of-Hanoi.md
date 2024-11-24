### C
```
#include <stdio.h>

void towerOfHanoi(char S, char H, char D, int n){
    if(n == 1){
      
        printf("Move disk %d from %c to %c using %c",n, S,D, H);
        printf("\n");
        return;
    }
    towerOfHanoi(S, D, H, n-1);

    printf("Move disk %d from %c to %c using %c",n, S,D, H);
    printf("\n");
    towerOfHanoi(H, S, D, n-1);
}
int main(){
    towerOfHanoi('S', 'D', 'H', 3);
    return 0;
}
```