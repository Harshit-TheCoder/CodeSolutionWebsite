# Linear Search
Develop a Program to create an array(Sorted/Unsorted) with 'n' elements. Take an element from user element as input.Search for the element in the array using Linear Search Technique. Display the index if search is successful else display "Search Unsuccessful"

## Solutions
### C
```
c
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
```

### CPP
```
cpp
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
```