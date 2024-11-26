### C
```
#include <stdio.h>

#define MAX_FILES 5
#define MAX_BLOCKS 50

int fileBlocks[MAX_FILES][MAX_BLOCKS];  // File index table for blocks
int indexBlock[MAX_FILES];              // Stores starting block for each file

void allocateFile(int fileIndex, int blocks[], int blockCount) {
    // Set the starting index block for the file
    indexBlock[fileIndex] = fileIndex;

    // Allocate blocks to the file in the index table
    for (int i = 0; i < blockCount; i++) {
        fileBlocks[fileIndex][i] = blocks[i];
    }

    printf("File %d allocated with blocks: ", fileIndex);
    for (int i = 0; i < blockCount; i++) {
        printf("%d ", fileBlocks[fileIndex][i]);
    }
    printf("\n");
}

void displayFile(int fileIndex, int blockCount) {
    printf("File %d has blocks: ", fileIndex);
    for (int i = 0; i < blockCount; i++) {
        printf("%d ", fileBlocks[fileIndex][i]);
    }
    printf("\n");
}

int main() {
    int blocks1[] = {2, 5, 7}; // Blocks allocated to file 0
    int blocks2[] = {3, 8, 9, 12}; // Blocks allocated to file 1

    allocateFile(0, blocks1, 3);
    allocateFile(1, blocks2, 4);

    printf("\nDisplaying file block allocations:\n");
    displayFile(0, 3);
    displayFile(1, 4);

    return 0;
}

```