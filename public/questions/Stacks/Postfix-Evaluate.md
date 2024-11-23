### C
```
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#define MAX 100
int stack[MAX];
int top = -1;


void push(int value){
    if(top < MAX-1){
        top++;
        stack[top] = value;
        return;
    }
    else{
        printf("Stack overflow");
        return;
    }
}

int pop(){
    if(top == -1){
        printf("Stack underflow");
        return -1;
    }
    else{
        int val = stack[top];
        top--;
        return val;
    }
}
int postfixEvaluation(char* expression){

    int i=0;
    while(expression[i] != '\0'){
        if(isdigit(expression[i])) push(expression[i]-'0');
        else{
            int val2 = pop();
            int val1 = pop();

            switch (expression[i])
            {
                case '+':
                    push(val1 + val2);
                    break;
                case '-':
                    push(val1 - val2);
                    break;
                case '*':
                    push(val1 * val2);
                    break;
                case '/':
                    push(val1 / val2);
                    break;
                default:
                    printf("Invalid operator");
                    break;
            }
        }
        i++;
    }

    return pop();
}

int main(){
    int result = postfixEvaluation("53+82-*");
    printf("%d", result);
    return 0;
}
```