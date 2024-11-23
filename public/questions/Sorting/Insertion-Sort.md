


### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    
    void insertionSort(vector<int> &arr) {
        int n = arr.size();
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
        vector<int> arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        cout << "Insertion Sort: ";
        for (int num : arr) cout << num << " ";
        cout << endl;
        return 0;
    }
```