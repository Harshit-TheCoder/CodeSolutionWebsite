
### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    int binarySearch(vector<int> &arr, int key) {
        int left = 0, right = arr.size() - 1;
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
        vector<int> arr = {5, 6, 11, 12, 13};
        int key = 13;
        int index = binarySearch(arr, key);
        if (index != -1)
            cout << "Element " << key << " found at index " << index << endl;
        else
            cout << "Element " << key << " not found" << endl;
        return 0;
    } 
```