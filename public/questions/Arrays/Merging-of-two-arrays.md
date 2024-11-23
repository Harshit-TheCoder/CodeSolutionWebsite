
### C
```
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
```

### CPP
```
    #include <iostream>
    #include <vector>
    using namespace std;
    
    vector<int> mergeArrays(const vector<int> &arr1, const vector<int> &arr2) {
        vector<int> merged;
        int i = 0, j = 0;
        while (i < arr1.size() && j < arr2.size()) {
            if (arr1[i] <= arr2[j])
                merged.push_back(arr1[i++]);
            else
                merged.push_back(arr2[j++]);
        }
        while (i < arr1.size())
            merged.push_back(arr1[i++]);
        while (j < arr2.size())
            merged.push_back(arr2[j++]);
        return merged;
    }
    
    int main() {
        vector<int> arr1 = {1, 3, 5, 7};
        vector<int> arr2 = {2, 4, 6, 8};
        vector<int> merged = mergeArrays(arr1, arr2);
        cout << "Merged Array: ";
        for (int num : merged) cout << num << " ";
        cout << endl;
        return 0;
    }     
```

### Java
```
    import java.util.Arrays;
    public class MergeArrays {
        public static int[] mergeArrays(int[] arr1, int[] arr2) {
            int[] merged = new int[arr1.length + arr2.length];
            int i = 0, j = 0, k = 0;
            while (i < arr1.length && j < arr2.length) {
                if (arr1[i] <= arr2[j])
                    merged[k++] = arr1[i++];
                else
                    merged[k++] = arr2[j++];
            }
            while (i < arr1.length)
                merged[k++] = arr1[i++];
            while (j < arr2.length)
                merged[k++] = arr2[j++];
            return merged;
        }
    
        public static void main(String[] args) {
            int[] arr1 = {1, 3, 5, 7};
            int[] arr2 = {2, 4, 6, 8};
            int[] merged = mergeArrays(arr1, arr2);
            System.out.print("Merged Array: ");
            System.out.println(Arrays.toString(merged));
        }
    }
```