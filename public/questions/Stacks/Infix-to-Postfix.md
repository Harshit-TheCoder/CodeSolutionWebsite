### C
```
#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAX 100
char stack[MAX];
int top = -1;
void push(char x) {
    if (top == MAX - 1) {
        printf("Stack overflow\n");
        return;
    }
    stack[++top] = x;
}
char pop() {
    if (top == -1) {
        printf("Stack underflow\n");
        return -1;
    }
    return stack[top--];
}

int prec(char c) {
    if (c == '^')
        return 3;
    else if (c == '/' || c == '*')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}

void infixToPostfix(char* s) {
    char result[MAX];
    int k = 0;  // Index for result array

    for (int i = 0; s[i]; i++) {
        char c = s[i];

        // If the character is an operand, add it to the output
        if (isalnum(c)) {
            result[k++] = c;
        }
        // If the character is '(', push it to the stack
        else if (c == '(') {
            push(c);
        }
        // If the character is ')', pop and add to output from the stack
        // until '(' is encountered
        else if (c == ')') {
            while (top != -1 && stack[top] != '(') {
                result[k++] = pop();
            }
            pop();  // Pop '(' from stack
        }
        // If the character is an operator
        else {
            while (top != -1 && prec(c) <= prec(stack[top])) {
                result[k++] = pop();
            }
            push(c);
        }
    }

    // Pop all the remaining operators from the stack
    while (top != -1) {
        result[k++] = pop();
    }

    result[k] = '\0';  // Null-terminate the result string

    printf("Postfix expression: %s\n", result);
}

int main() {
    char exp[MAX] = "(p+q)*(m-n)";
    printf("Infix expression: %s\n", exp);
    infixToPostfix(exp);
    return 0;
}

```