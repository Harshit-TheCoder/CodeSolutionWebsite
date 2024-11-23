
### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    void selectionSort(vector<int> &arr) {
        int n = arr.size();
        for (int i = 0; i < n - 1; ++i) {
            int min_index = i;
            for (int j = i + 1; j < n; ++j) {
                if (arr[j] < arr[min_index])
                    min_index = j;
            }
            swap(arr[i], arr[min_index]);
        }
    }
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        selectionSort(arr);
        cout << "Selection Sort: ";
        for (int num : arr) cout << num << " ";
        cout << endl;
        return 0;
    }
```