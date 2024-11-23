### C
```
#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int coeff;
    int power;
    struct Node* next;
}Node;

int countNodes(Node* head){
    Node* temp = head;
    int count=0;
    while(temp){
        count++;
        temp = temp->next;
    }
    return count;
}

Node* createNode(int coeff, int power){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->coeff = coeff;
    newNode->power = power;
    newNode->next = NULL;
    return newNode;
}

Node* insertLast(Node* head, int coeff, int power){
    if(head == NULL) return createNode(coeff, power);
    Node* temp = head;
    while(temp->next != NULL){
        temp=temp->next;
    }
    Node* newNode = createNode(coeff, power);
    temp->next = newNode;
    return head;
}

Node* addPolynomial(Node* list1, Node* list2, Node* list3){
    Node* temp1 = list1;
    Node* temp2 = list2;
    Node* temp3 = list3;
    int c1 = countNodes(list1);
    int c2 = countNodes(list2);
    printf("count 1:%d ", c1);
    printf("count 2:%d ", c2);
    printf("\n");
    if(c1>c2){
        while(temp1-> power != temp2->power){
            list3 = insertLast(list3, (temp1->coeff), temp1->power);
            temp1 = temp1->next;
            
        }
    }
    else{
        while(temp2-> power != temp1->power){
            list3 = insertLast(list3, (temp2->coeff), temp2->power);
            temp2 = temp2->next;
            
        }
    }

    while(temp1 != NULL && temp2 != NULL){
        list3 = insertLast(list3, (temp1->coeff + temp2->coeff), temp1->power);
        temp1 = temp1->next;
        temp2 = temp2->next;
    }

    while(temp1){
        list3 = insertLast(list3, temp1->coeff, temp1->power);
        temp1 = temp1->next;
    }

    while(temp2){
        list3 = insertLast(list3, temp2->coeff, temp2->power);
        temp2 = temp2->next;
    }
    return list3;
}

void display(Node* head){
    Node* temp = head;
    while(temp){
        if(temp->power == 0) printf("%d ", temp->coeff);
        else printf("%dx^%d + ", temp->coeff, temp->power);
        temp=temp->next;
    }
    printf("\n");
}
int main(){

    Node* list1 = NULL;
    Node* list2 = NULL;
    Node* list3 = NULL;
    // list1 = (Node*)malloc(sizeof(Node));
    list1 = createNode(1,4);
    list1 = insertLast(list1, 2,3);
    list1 = insertLast(list1, 2,2);
    list1 = insertLast(list1, 2,1);
    list1 = insertLast(list1, 3,0);
    display(list1);
    // list2 = (Node*)malloc(sizeof(Node));
    list2 = createNode(5,4);
    list2 = insertLast(list2, 7,3);
    list2 = insertLast(list2, 6,2);
    display(list2);
    list3 = addPolynomial(list1, list2, list3);
    display(list3);
    return 0;
}
```