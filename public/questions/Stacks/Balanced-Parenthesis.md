### C

```
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <stdbool.h>
#define MAX 100
char stack[MAX];
int top = -1;
int size = 0;


void push(char value){
    if(top < MAX-1){
        top++;
        stack[top] = value;
        size++;
        return;
    }
    else{
        printf("Stack overflow");
        return;
    }
}

char pop(){
    if(top == -1){
        printf("Stack underflow");
        return '\0';
    }
    else{
        char val = stack[top];
        top--;
        size--;
        return val;
    }
}

int isEmpty(){
    if(top == -1) return 1;
    else return 0;
}

int isFull(){
    if(top == MAX -1) return 1;
    else return 0;
}

bool balancedParenthesis(char* pattern){
    int i=0;
    int s = sizeof(pattern);
    for(int i=0;i<s;i++){
        char c = pattern[i];
        char t = (isEmpty() == 1)?'\0':stack[top];
        if(top == -1 && (c == '(' || c == '{' || c == '[')) push(c);
        else{
            if(isEmpty() == 0 && ((c == ')' && t == '(') || (c == '}' && t == '{') || (c == ']' && t == '['))){
                pop();
            }
            else return false;
        }
    }
    if(size == 0) return true;
    else return false;
}
int main(){
    bool result = balancedParenthesis("[](){}");
    if(result) printf("Balanced");
    else printf("Unbalanced");
    return 0;
}
```