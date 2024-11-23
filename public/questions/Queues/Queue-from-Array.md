### C
```
#include <stdio.h>
#include <stdlib.h>
#define MAX 100 

int queue[MAX];
int front = 0;
int rear = -1;
int size = 0;


int isFull();
int isEmpty();
void enqueue(int value);
int dequeue();
void displayQueue();

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    printf("Queue after enqueues:\n");
    displayQueue();

    printf("Dequeued: %d\n", dequeue());
    printf("Dequeued: %d\n", dequeue());

    printf("Queue after dequeues:\n");
    displayQueue();

    return 0;
}


int isFull() {
    return size == MAX;
}


int isEmpty() {
    return size == 0;
}


void enqueue(int value) {
    if (isFull()) {
        printf("Queue is full\n");
        return;
    }
    rear = (rear + 1) % MAX;
    queue[rear] = value;
    size++;
}


int dequeue() {
    if (isEmpty()) {
        printf("Queue is empty\n");
        return -1; // Return -1 to indicate an error
    }
    int value = queue[front];
    front = (front + 1) % MAX;
    size--;
    return value;
}


void displayQueue() {
    if (isEmpty()) {
        printf("Queue is empty\n");
        return;
    }
    int i;
    printf("Queue elements:\n");
    for (i = 0; i < size; i++) {
        printf("%d ", queue[(front + i) % MAX]);
    }
    printf("\n");
}

```