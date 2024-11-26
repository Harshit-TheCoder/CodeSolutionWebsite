### C
```
#include <stdio.h>

void sequentialAllocation(int block[], int m, int fileSize[], int n) {
    int start = 0; // Starting block for each file

    for (int i = 0; i < n; i++) {
        if (start + fileSize[i] <= m) { // Check if enough contiguous blocks are available
            printf("File %d allocated from block %d to block %d\n", i + 1, start, start + fileSize[i] - 1);
            start += fileSize[i];
        } else {
            printf("File %d could not be allocated due to insufficient space\n", i + 1);
        }
    }
}

int main() {
    int block[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}; // Array to represent blocks (1 means free)
    int fileSize[] = {2, 3, 1, 4};
    int m = sizeof(block) / sizeof(block[0]);
    int n = sizeof(fileSize) / sizeof(fileSize[0]);

    sequentialAllocation(block, m, fileSize, n);
    return 0;
}

```