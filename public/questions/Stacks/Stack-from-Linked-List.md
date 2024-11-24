### C

```
#include <stdio.h>
#include <stdlib.h>

Node structure for the linked list
typedef struct Node {
    int data;
    struct Node* next;
}Node;

Node* createNode(int data){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* push(Node* top, int data) {
    Node* newNode = createNode(data);
    
    if (top == NULL) {
        printf("%d pushed to stack\n", data);
        return newNode;
    }

    newNode->next = top;
    top = newNode;
    
    printf("%d pushed to stack\n", data);

    return top;
}

Node* pop(Node* top) {
    if (top == NULL) {
        printf("Stack Underflow\n");
        return NULL;
    }
    
    Node* temp = top;
    int popped = temp->data;
    top = top->next;
    temp->next = NULL;

    printf("%d popped from stack\n", popped);
    return top;
}

int isEmpty(Node* top) {
    return top == NULL;
}

int peek(Node* top) {
    if (top == NULL) {
        printf("Stack is empty\n");
        return -1;
    }
    return top->data;
}

void display(Node *top){
    Node* temp = top;
    while(temp){
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    Node* top = NULL;
    Node* node = push(top, 10);
    top = node;
    top = push(top, 20);
    top = push(top, 30);
    top = push(top, 40);
    top = push(top, 50);
    top = push(top, 60);
    top=pop(top);
    printf("Top element is %d\n", peek(top));
    display(top);
    return 0;
}
```