import React from "react";

const cpp={
    "Hello World Program":`
        #include <iostream>
        using namespace std;
        int main(){
            cout<<"Hello World";
            return 0;
        }
    `,
    "Calculator Program":`
        #include <iostream>
        using namespace std;
        void Add(int a,int b){
            cout<<"Result:"<<a+b<<endl;
        }
        void Subtract(int a,int b){
            cout<<"Result:"<<a-b<<endl;
        }
        void Multiply(int a,int b){
            cout<<"Result:"<<a*b<<endl;
        }
        void Divide(int a,int b){
            cout<<"Quotient:"<<a/b<<" "<<"Remainder:"<<a%b<<endl;
        }
        int main(){
            int a,b;
            string operation;
            cout<<"Enter first number"<<endl;
            cin>>a;
            cout<<"Enter second number"<<endl;
            cin>>b;
            cout<<"Enter which operation to perform.(Add/Subtract/Multiply/Divide)"<<endl;
            cin>>operation;
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
    #include <iostream>
    using namespace std;
    
    void swap_numbers(int &a, int &b) {
        int temp = a;
        a = b;
        b = temp;
    }
    
    int main() {
        int a, b;
        cout << "Enter first number: ";
        cin >> a;
        cout << "Enter second number: ";
        cin >> b;
        cout << "Numbers before swapping:" << endl;
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
        swap_numbers(a, b);
        cout << "Numbers after swapping:" << endl;
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
        return 0;
    }`,
    "Swap two numbers PART-2":`
    #include <iostream>
    using namespace std;
    
    void swap_numbers(int &a, int &b) {
        *a = *a + *b;
        *b = *a - *b;
        *a = *a - *b;
    }
    
    int main() {
        int a, b;
        cout << "Enter first number: ";
        cin >> a;
        cout << "Enter second number: ";
        cin >> b;
        cout << "Numbers before swapping:" << endl;
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
        swap_numbers(a, b);
        cout << "Numbers after swapping:" << endl;
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
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
    
    `,
    "Merging of two arrays":`
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
    
    `,
    "Insertion in Array":`
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
    
    `,
    "Deletion in Array":`
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
    
    `,
    "Selection Sort":`
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
    `,
    "Bubble Sort":`
    #include <iostream>
    #include <vector>
    using namespace std;
    void bubbleSort(vector<int> &arr) {
        int n = arr.size();
        for (int i = 0; i < n - 1; ++i) {
            for (int j = 0; j < n - i - 1; ++j) {
                if (arr[j] > arr[j + 1])
                    swap(arr[j], arr[j + 1]);
            }
        }
    }
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        bubbleSort(arr);
        cout << "Bubble Sort: ";
        for (int num : arr) cout << num << " ";
        cout << endl;
        return 0;
    }
    
    `,
    "Merge Sort":`
    #include <iostream>
    #include <vector>
    using namespace std;
    
    void merge(vector<int> &arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
    
        vector<int> L(n1), R(n2);
    
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
    
    void mergeSort(vector<int> &arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
    
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
    
            merge(arr, left, mid, right);
        }
    }
    
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        mergeSort(arr, 0, arr.size() - 1);
        cout << "Merge Sort: ";
        for (int num : arr) cout << num << " ";
        cout << endl;
        return 0;
    }
    
    `,
    "Insertion Sort":`
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
    
    `,
    "Quick Sort":`
    #include <iostream>
    #include <vector>
    using namespace std;
    
    int partition(vector<int> &arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; ++j) {
            if (arr[j] <= pivot) {
                ++i;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        return i + 1;
    }
    
    void quickSort(vector<int> &arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    int main() {
        vector<int> arr = {12, 11, 13, 5, 6};
        quickSort(arr, 0, arr.size() - 1);
        cout << "Quick Sort: ";
        for (int num : arr) cout << num << " ";
        cout << endl;
        return 0;
    }
    
    `,
};

export default cpp;