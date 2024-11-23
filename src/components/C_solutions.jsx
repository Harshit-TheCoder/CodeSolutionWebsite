import React from "react";

const c = {
    
    "Linear Search":`
    #include <iostream>
    #include <vector>
    using namespace std;
    int linearSearch(vector<int> &arr, int key) {
        for (int i = 0; i < arr.size(); ++i) {
            if (arr[i] == key)
                return i;
        }
        return -1;
    }
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        int key = 13;
        int index = linearSearch(arr, key);
        if (index != -1)
            cout << "Element " << key << " found at index " << index << endl;
        else
            cout << "Element " << key << " not found" << endl;
        return 0;
    }
    
    `,
    "Binary Search":`
    #include <stdio.h>

    int binarySearch(int arr[], int size, int key) {
        int left = 0, right = size - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == key)
                return mid;
            else if (arr[mid] < key)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
    
    int main() {
        int arr[] = {5, 6, 11, 12, 13};
        int size = sizeof(arr) / sizeof(arr[0]);
        int key = 13;
        int index = binarySearch(arr, size, key);
        if (index != -1)
            printf("Element %d found at index %d\n", key, index);
        else
            printf("Element %d not found\n", key);
        return 0;
    }
    
    `,
    "Merging of two arrays":`
    #include <stdio.h>

    void mergeArrays(const int arr1[], int size1, const int arr2[], int size2, int merged[]) {
        int i = 0, j = 0, k = 0;
        while (i < size1 && j < size2) {
            if (arr1[i] <= arr2[j])
                merged[k++] = arr1[i++];
            else
                merged[k++] = arr2[j++];
        }
        while (i < size1)
            merged[k++] = arr1[i++];
        while (j < size2)
            merged[k++] = arr2[j++];
    }
    
    int main() {
        int arr1[] = {1, 3, 5, 7};
        int size1 = sizeof(arr1) / sizeof(arr1[0]);
        int arr2[] = {2, 4, 6, 8};
        int size2 = sizeof(arr2) / sizeof(arr2[0]);
        int merged[size1 + size2];
        mergeArrays(arr1, size1, arr2, size2, merged);
        printf("Merged Array: ");
        for (int i = 0; i < size1 + size2; ++i) printf("%d ", merged[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Insertion in Array":`
    #include <stdio.h>

    void insertElement(int arr[], int size, int element, int index) {
        for (int i = size - 1; i >= index; --i)
            arr[i + 1] = arr[i];
        arr[index] = element;
    }
    
    int main() {
        int arr[6] = {1, 2, 4, 5};
        int size = 4;
        int element = 3;
        int index = 2;
        insertElement(arr, size, element, index);
        printf("Updated Array: ");
        for (int i = 0; i < size + 1; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Deletion in Array":`
    #include <stdio.h>

    void deleteElement(int arr[], int size, int index) {
        for (int i = index; i < size - 1; ++i)
            arr[i] = arr[i + 1];
    }
    
    int main() {
        int arr[5] = {1, 2, 3, 4, 5};
        int size = 5;
        int index = 2;
        deleteElement(arr, size, index);
        printf("Updated Array: ");
        for (int i = 0; i < size - 1; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Selection Sort":`
    #include <stdio.h>
    void selectionSort(int arr[], int n) {
        for (int i = 0; i < n - 1; ++i) {
            int min_index = i;
            for (int j = i + 1; j < n; ++j) {
                if (arr[j] < arr[min_index])
                    min_index = j;
            }
            int temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }
    int main() {
        int arr[] = {12, 11, 13, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
        selectionSort(arr, n);
        printf("Selection Sort: ");
        for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    
    `,
    "Bubble Sort":`
    #include <stdio.h>
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n - 1; ++i) {
            for (int j = 0; j < n - i - 1; ++j) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    int main() {
        int arr[] = {12, 11, 13, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
        bubbleSort(arr, n);
        printf("Bubble Sort: ");
        for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Merge Sort":`
    #include <stdio.h>

    void merge(int arr[], int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
    
        int L[n1], R[n2];
    
        for (int i = 0; i < n1; ++i)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[mid + 1 + j];
    
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j])
                arr[k++] = L[i++];
            else
                arr[k++] = R[j++];
        }
    
        while (i < n1)
            arr[k++] = L[i++];
        while (j < n2)
            arr[k++] = R[j++];
    }
    
    void mergeSort(int arr[], int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
    
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
    
            merge(arr, left, mid, right);
        }
    }
    
    int main() {
        int arr[] = {12, 11, 13, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
        mergeSort(arr, 0, n - 1);
        printf("Merge Sort: ");
        for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Insertion Sort":`
    #include <stdio.h>

    void insertionSort(int arr[], int n) {
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                --j;
            }
            arr[j + 1] = key;
        }
    }
    
    int main() {
        int arr[] = {12, 11, 13, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
        insertionSort(arr, n);
        printf("Insertion Sort: ");
        for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Quick Sort":`
    #include <stdio.h>

    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; ++j) {
            if (arr[j] <= pivot) {
                ++i;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    int main() {
        int arr[] = {12, 11, 13, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
        quickSort(arr, 0, n - 1);
        printf("Quick Sort: ");
        for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
        printf("\n");
        return 0;
    }
    
    `,
    "Linked List":`
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
    
    `,
    "Doubly Linked List":`
    
    `,
    "Circular Linked List":`

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
    `,
    "Linked List Addition":`
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
    `,
    "Linked List Multiplication":`
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
    
    `,

    "Stack from Array":``,
    "Stack from Linked List":``,
    "Queue from Array":`
    #include <stdio.h>
#include <stdlib.h>

#define MAX 100  // Define the maximum size of the queue

// Global variables
int queue[MAX];
int front = 0;
int rear = -1;
int size = 0;

// Function prototypes
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

// Check if the queue is full
int isFull() {
    return size == MAX;
}

// Check if the queue is empty
int isEmpty() {
    return size == 0;
}

// Add an element to the queue
void enqueue(int value) {
    if (isFull()) {
        printf("Queue is full\n");
        return;
    }
    rear = (rear + 1) % MAX;
    queue[rear] = value;
    size++;
}

// Remove an element from the queue
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

// Display the elements of the queue
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

    
    `,
    "Queue from Linked List":``,
    "Infix to Postfix":``,
    "Postfix Evaluate":`
        #include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#define MAX 100
int stack[MAX];
int top = -1;


void push(int value){
    if(top < MAX-1){
        top++;
        stack[top] = value;
        return;
    }
    else{
        printf("Stack overflow");
        return;
    }
}

int pop(){
    if(top == -1){
        printf("Stack underflow");
        return -1;
    }
    else{
        int val = stack[top];
        top--;
        return val;
    }
}
int postfixEvaluation(char* expression){

    int i=0;
    while(expression[i] != '\0'){
        if(isdigit(expression[i])) push(expression[i]-'0');
        else{
            int val2 = pop();
            int val1 = pop();

            switch (expression[i])
            {
                case '+':
                    push(val1 + val2);
                    break;
                case '-':
                    push(val1 - val2);
                    break;
                case '*':
                    push(val1 * val2);
                    break;
                case '/':
                    push(val1 / val2);
                    break;
                default:
                    printf("Invalid operator");
                    break;
            }
        }
        i++;
    }

    return pop();
}

int main(){
    int result = postfixEvaluation("53+82-*");
    printf("%d", result);
    return 0;
}
    `,
    "Balanced Parenthesis":``,
};

export default c;