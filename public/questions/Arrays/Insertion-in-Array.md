
### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    
    vector<int> insertElement(vector<int> &arr, int element, int index) {
        arr.insert(arr.begin() + index, element);
        return arr;
    }
    
    int main() {
        vector<int> arr = {1, 2, 4, 5};
        int element = 3;
        int index = 2;
        vector<int> updatedArr = insertElement(arr, element, index);
        cout << "Updated Array: ";
        for (int num : updatedArr) cout << num << " ";
        cout << endl;
        return 0;
    }     
```

### Java
```
    import java.util.Arrays;
    public class InsertElement {
        public static int[] insertElement(int[] arr, int element, int index) {
            int[] updatedArr = new int[arr.length + 1];
            for (int i = 0, j = 0; i < updatedArr.length; ++i, ++j) {
                if (i == index)
                    updatedArr[i] = element;
                else
                    updatedArr[i] = arr[j];
            }
            return updatedArr;
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 4, 5};
            int element = 3;
            int index = 2;
            int[] updatedArr = insertElement(arr, element, index);
            System.out.print("Updated Array: ");
            System.out.println(Arrays.toString(updatedArr));
        }
    }
```