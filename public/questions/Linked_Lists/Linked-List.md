### C
```
#include <stdio.h>
#include <stdlib.h>
typedef struct Node{
    int data;
    struct Node* next;
}Node;

Node* createNode(int data){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertFirst(Node* head, int data){
    Node* newNode = createNode(data);
    newNode->next = head;
    head = newNode;
    printf("List after insert first\n");
    // ldisplay(head);
    return head;
}

Node* insertLast(Node* head, int data){
    Node* newNode = createNode(data);
    if(head == NULL){
        head = newNode;
        return head;
    }
    Node* temp = head;
    while(temp->next != NULL){
        temp=temp->next;
    }
    temp->next=newNode;
    printf("List after insert last\n");
    // display(head);
    return head;
}

Node* insertMiddle(Node* head, int pos, int val){
    Node* newNode = createNode(val);
    Node* temp = head;
    while(temp->next != NULL && (pos-1)>0){
        temp = temp->next;
        pos--;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    printf("List after insert middle\n");
    // display(head);
    return head;
}

Node* deleteFirst(Node* head){
    Node* temp = head;
    head = head->next;
    temp->next = NULL;
    free(temp);
    printf("List after delete first\n");
    // display(head);
    return head;
}

Node* deleteLast(Node* head){
    Node* temp = head;
    while(temp->next->next != NULL){
        temp=temp->next;
    }
    temp->next = NULL;
    // free(temp);
    printf("List after delete last\n");
    // display(head);
    return head;
}

Node* deleteMiddle(Node* head, int pos){
    Node* prevNode = head;
    Node* currNode = head;
    while(currNode && pos>0){
        prevNode = currNode;
        currNode = currNode->next;
        pos--;
    }
    Node* nextNode = currNode->next;
    prevNode->next=nextNode;
    currNode->next=NULL;
    printf("List after delete middle\n");
    // display(head);
    return head;
}

int SearchNode(Node* head, int target){
    Node* temp = head;
    int flag = 0;
    while(temp){
        if(temp->data == target){
            flag = 1;
            break;
        }
        temp = temp->next;
    }
    return flag;
}
void display(Node* head){
    Node* temp = head;
    while(temp){
        printf("%d ", temp->data);
        temp=temp->next;
    }
    printf("\n");
}

int main(){
    Node* head = NULL;
    head = createNode(1);
    head = insertFirst(head, 2);
    display(head);
    head = insertFirst(head, 3);
    display(head);
    head = insertFirst(head, 4);
    display(head);
    head = insertFirst(head, 5);
    display(head);
    head = insertLast(head, 999);
    display(head);
    head = insertMiddle(head,3, 1000);
    display(head);
    head = deleteFirst(head);
    display(head);
    head = deleteLast(head);
    display(head);
    head = deleteMiddle(head, 3);
    display(head);

    int value = 4;
    int result = SearchNode(head, value);
    if(result == 1) printf("Search Successful value: %d", value);
    else printf("Search Unsuccessful: %d", value);
    return 0;
}
```