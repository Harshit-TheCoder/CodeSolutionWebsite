### C
```
#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int coeff;
    int power;
    struct Node* next;
}Node;


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


Node* createNewList(Node* head, int coeff, int power){
    if(head == NULL) return createNode(coeff, power);
    Node* temp = head;
    Node* newNode = createNode(coeff, power);
    Node* lastNode = temp;
    int flag = 0;
    while(temp){
        if(newNode->power == temp->power){
            temp->coeff += newNode->coeff;
            flag = 1;
            break;
        }
        else if(temp->next != NULL && (temp->power > newNode->power && temp->next->power < newNode->power)){
            newNode->next = temp->next;
            temp->next = newNode;
            flag = 1;
            break;
        }
        lastNode = temp;
        temp = temp->next;
    }
    if(flag == 0 && temp == NULL){
        lastNode->next = newNode;
    }
    return head;
}

Node* multiplyPolynomial(Node* list1, Node* list2, Node* list3){
    Node* temp1 = list1;
    Node* temp2 = list2;
    

    while(temp1 != NULL){
        temp2 = list2;
        while(temp2 != NULL){
            list3 = createNewList(list3, (temp1->coeff*temp2->coeff), (temp1->power+temp2->power));
            temp2 = temp2->next;
        }
        temp1 = temp1->next;
        
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
    list2 = createNode(5,2);
    list2 = insertLast(list2, 7,1);
    list2 = insertLast(list2, 6,0);
    display(list2);


    list3 = multiplyPolynomial(list1, list2, list3);
    printf("Polynomial Multiplication using Linked List: \n");
    display(list3);
    return 0;
}
    
```