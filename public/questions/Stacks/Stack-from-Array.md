### C
```
#include <stdio.h>
#define MAX 100

int stack[MAX];
int top = -1;
void push(int x) {
    if (top == MAX - 1) {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = x;
    printf("%d pushed to stack\n", x);
}
int pop() {
    if (top == -1) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack[top--];
}
int isEmpty() {
    return top == -1;
}
int peek() {
    if (top == -1) {
        printf("Stack is empty\n");
        return -1;
    }
    return stack[top];
}
int main() {
    push(10);
    push(20);
    push(30);
    
    printf("%d popped from stack\n", pop());
    printf("Top element is %d\n", peek());

    return 0;
}

```