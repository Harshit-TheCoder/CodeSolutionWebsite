import React from "react";

const c = {
    "Hello World Program":`
        #include <stdio.h>
        int main(){
            printf("Hello World");
            return 0;
        }
    `,
    "Calculator Program":`
        #include <stdio.h>
        void Add(int a,int b){
            printf("Result:%d", a+b);
        }
        void Subtract(int a,int b){
            printf("Result:%d", a-b);
        }
        void Multiply(int a,int b){
            printf("Result:%d", a*b);
        }
        void Divide(int a,int b){
            printf("Quotient:%f", a/b);
            printf("Remainder:%f", a%b);
        }
        int main(){
            int a,b;
            char operation[10];
            printf("Enter first number");
            scanf("%d", &a);
            printf("Enter second number");
            scanf("%d", &b);
            printf("Enter which operation to perform.(Add/Subtract/Multiply/Divide)");
            scanf("%s", operation);
            if(operation == "Add") {
                Add(a, b);
            } else if(operation == "Subtract") {
                Subtract(a, b);
            } else if(operation == "Multiply") {
                Multiply(a, b);
            } else if(operation == "Divide") {
                Divide(a, b);
            } else {
                cout << "Invalid operation!" << endl;
            }
        
            return 0;
        }
    `,
    "Swap two numbers PART-1":`
    #include <stdio.h>

    void swap_numbers(int *a, int *b) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
    
    int main() {
        int a, b;
        printf("Enter first number: ");
        scanf("%d", &a);
        printf("Enter second number: ");
        scanf("%d", &b);
        printf("Numbers before swapping:\n");
        printf("a = %d\n", a);
        printf("b = %d\n", b);
        swap_numbers(&a, &b);
        printf("Numbers after swapping:\n");
        printf("a = %d\n", a);
        printf("b = %d\n", b);
        return 0;
    }
    
    `,
    "Swap two numbers PART-2":`
    #include <stdio.h>

    void swap_numbers(int *a, int *b) {
        *a = *a + *b;
        *b = *a - *b;
        *a = *a - *b;
    }
    
    int main() {
        int a, b;
        printf("Enter first number: ");
        scanf("%d", &a);
        printf("Enter second number: ");
        scanf("%d", &b);
        printf("Numbers before swapping:\n");
        printf("a = %d\n", a);
        printf("b = %d\n", b);
        swap_numbers(&a, &b);
        printf("Numbers after swapping:\n");
        printf("a = %d\n", a);
        printf("b = %d\n", b);
        return 0;
    }
    `,
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
};

export default c;