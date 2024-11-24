### C
```
#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int data;
    struct Node* next;
    struct Node* prev;
}Node;

Node* lastNode = NULL;
int countNodes = 0;

Node* createNode(int val){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = newNode;
    countNodes++;
    return newNode;
}

Node* insertLast(Node* head, int val){
    if(head == NULL){
        return createNode(val);
    }
    else{
        if(head->next == head) lastNode = head;

        Node* newNode = createNode(val);
        lastNode->next = newNode;
        newNode->next = head;
        lastNode = newNode;
        return head;
    }
}


Node* deleteMiddle(Node* currNode, Node* prevNode, Node* nextNode){
    printf("%d ", currNode->data);
    prevNode->next=nextNode;
    currNode->next=NULL;
    return nextNode;
}

Node* JosephusAlgo(Node* head,int k){
    int cnt = k;
    Node* temp = head;
    Node* prevNode = head;
    while(temp-> next != NULL){
        cnt = k;
        while(cnt>0){
            prevNode = temp;
            temp = temp->next;
            cnt--;
        } 
        Node* nextNode = temp->next;
        nextNode = deleteMiddle(temp, prevNode, nextNode);
        temp = nextNode;
        prevNode = nextNode;
    }
    return temp;
}

void display(Node* head){
    Node* temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    do {
        printf("%d ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("\n");
    printf("Size of the circular linked list is: %d", countNodes);
    printf("\n");
}

int main(){
    Node* head = NULL;
    head = createNode(1);
    head = insertLast(head, 2);
    head = insertLast(head, 3);
    head = insertLast(head, 4);
    head = insertLast(head, 5);
    head = insertLast(head, 6);
    head = insertLast(head, 7);
    head = insertLast(head, 8);
    head = insertLast(head, 9);
    head = insertLast(head, 10);
    printf("List after insert last\n");
    display(head);
    Node* remainingNode = JosephusAlgo(head, 3);
    printf("\nRemaining node val:%d", remainingNode->data);
    return 0;
  
}
```