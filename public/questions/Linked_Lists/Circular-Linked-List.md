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

Node* insertFirst(Node* head, int val){
    if(head == NULL){
        printf("List after insert first\n");
        return createNode(val);
    } 
    else{
        if(head->next == head) lastNode = head;
        Node* newNode = createNode(val);
        newNode->next = head;
        lastNode->next = newNode;
        head = newNode;
        printf("List after insert first\n");
        return head;
    }
}

Node* insertLast(Node* head, int val){
    if(head == NULL){
        printf("List after insert last\n");
        return createNode(val);
    }
    else{
        // Node* lastNode = head;
        // while(lastNode->next != head){
        //     lastNode = lastNode->next;
        // }
        if(head->next == head) lastNode = head;

        Node* newNode = createNode(val);
        lastNode->next = newNode;
        newNode->next = head;
        lastNode = newNode;
        printf("List after insert last\n");
        return head;
    }
}

Node* insertMiddle(Node* head, int val, int pos){
    if(head == NULL){
        printf("List after insert middle\n");
        return createNode(val);
    }
    Node* newNode = createNode(val);
    Node* temp = head;
    while(temp->next != head && (pos-1)>0){
        temp = temp->next;
        pos--;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    printf("List after insert middle\n");
    return head;
}

Node* deleteFirst(Node* head){
    if(head == NULL) return NULL;
    else if(head->next == head) return NULL;
    else{
        Node* temp = head;
        head = head->next;
        temp->next = NULL;
        lastNode->next = head;
        printf("List after delete first\n");
        countNodes--;
        return head;
    }
}

Node* deleteLast(Node* head){
    if(head == NULL) return NULL;
    else if(head->next == head) return NULL;
    else{
        Node* newLastNode = head;
        while(newLastNode->next != lastNode){
            newLastNode=newLastNode->next;
        }
        lastNode->next = NULL;
        newLastNode->next = head;
        lastNode = newLastNode;
        printf("List after delete last\n");
        countNodes--;
        return head;
    }
}

Node* deleteMiddle(Node* head, int pos){
    if(head == NULL) return NULL;
    else if(head->next == head) return NULL;
    Node* prevNode = head;
    Node* currNode = head;
    while(currNode->next != head && pos>0){
        prevNode = currNode;
        currNode = currNode->next;
        pos--;
    }

    Node* nextNode = currNode->next;
    prevNode->next=nextNode;
    currNode->next=NULL;
    printf("List after delete middle\n");
    countNodes--;
    // display(head);
    return head;
}

int SearchNode(Node* head, int target){
    Node* temp = head->next;
    int flag = 0;
    do{
        if(temp->data == target){
            flag = 1;
            break;
        }
        temp = temp->next;
    }while(temp != head);
    if(temp->data == target && !flag) flag=1;
    return flag;
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
    // Node* lastNode = head;
    head = insertLast(head, 2);
    display(head);
    head = insertLast(head, 3);
    display(head);
    head = insertLast(head, 4);
    display(head);
    head = insertLast(head, 5);
    display(head);
    head = insertFirst(head, 99);
    display(head);
    head = insertMiddle(head, 99, 3);
    display(head);
    head = deleteFirst(head);
    display(head);
    head = deleteLast(head);
    display(head);
    head = deleteMiddle(head, 2);
    display(head);

    int value = 1;
    int result = SearchNode(head, value);
    if(result == 1) printf("Search Successful value: %d", value);
    else printf("Search Unsuccessful: %d", value);
  
}
```