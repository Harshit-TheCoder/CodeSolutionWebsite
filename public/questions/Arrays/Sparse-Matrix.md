### C
```
#include <stdio.h>
#include <stdlib.h>

int main(){
    int row=4;
    int col=5;
    
    int sparse[4][5] = {{0,0,3,0,4}, 
                        {0,0,5,7,0},
                        {0,0,0,0,0},
                        {0,2,6,0,0}};
    
    int count=0;
    for(int i=0;i<4;i++){
        for(int j=0;j<5;j++){
            if(sparse[i][j] != 0) count++;
        }
    }

    int compact[count+1][3];
    int k=1;

    for(int i=0;i<4;i++){
        for(int j=0;j<5;j++){
            if(sparse[i][j] != 0){
                compact[k][0] = i;
                compact[k][1] = j;
                compact[k][2] = sparse[i][j];
                k++;
            }
        }
    }    

    compact[0][0] = row;
    compact[0][1] = col;
    compact[0][2] = count;

    for(int i=0;i<(count+1);i++){
        printf("%d %d %d", compact[i][0], compact[i][1], compact[i][2]);
        printf("\n");
    }
    return 0;
}

#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int row;
    int col;
    int value;
    struct Node* next;
}Node;

Node* createNode(int row, int col, int val){
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->row = row;
    newNode->col = col;
    newNode->value = val;
    newNode->next = NULL;
}

Node* insertLast(Node* head, int row, int col, int val){
    Node* newNode = createNode(row, col, val);
    if(head == NULL){
        head = newNode;
        return head;
    }
    Node* temp = head;
    while(temp->next != NULL){
        temp=temp->next;
    }
    temp->next=newNode;
    return head;
}

void display(Node* head){
    Node* temp = head;
    while(temp){
        printf("%d %d %d \n", temp->row, temp->col, temp->value);
        temp=temp->next;
    }
    printf("\n");
}

int main(){
    int row=4;
    int col=5;
    
    int sparse[4][5] = {{0,0,3,0,4}, 
                        {0,0,5,7,0},
                        {0,0,0,0,0},
                        {0,2,6,0,0}};

    int count=0;
    for(int i=0;i<4;i++){
        for(int j=0;j<5;j++){
            if(sparse[i][j] != 0) count++;
        }
    }

    Node* head = createNode(row, col, count);

    for(int i=0;i<4;i++){
        for(int j=0;j<5;j++){
            if(sparse[i][j] != 0){
                head = insertLast(head, i, j, sparse[i][j]);
            }
        }
    }

    display(head);
    
    return 0;
}
```