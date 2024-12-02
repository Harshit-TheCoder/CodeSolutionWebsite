
### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    
    vector<int> deleteElement(vector<int> &arr, int index) {
        arr.erase(arr.begin() + index);
        return arr;
    }
    
    int main() {
        vector<int> arr = {1, 2, 3, 4, 5};
        int index = 2;
        vector<int> updatedArr = deleteElement(arr, index);
        cout << "Updated Array: ";
        for (int num : updatedArr) cout << num << " ";
        cout << endl;
        return 0;
    }     
```

### Java
```
    import java.util.Arrays;
    public class DeleteElement {
        public static int[] deleteElement(int[] arr, int index) {
            int[] updatedArr = new int[arr.length - 1];
            for (int i = 0, j = 0; i < arr.length; ++i) {
                if (i != index)
                    updatedArr[j++] = arr[i];
            }
            return updatedArr;
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5};
            int index = 2;
            int[] updatedArr = deleteElement(arr, index);
            System.out.print("Updated Array: ");
            System.out.println(Arrays.toString(updatedArr));
        }
    }

```