### C
```
#include <stdio.h>

#define MAX 100

// Structure to represent a sparse matrix element in triplet form
typedef struct {
    int row;
    int col;
    int value;
} Triplet;

// Function to transpose a sparse matrix in triplet form
void transpose(Triplet A[], int sizeA, Triplet B[]) {
    for (int i = 0; i < sizeA; i++) {
        // Swap row and column for each element
        B[i].row = A[i].col;
        B[i].col = A[i].row;
        B[i].value = A[i].value;
    }
}

int main() {
    // Example sparse matrix A in triplet form
    Triplet A[MAX] = {
        {0, 1, 2},
        {1, 0, 4},
        {1, 2, 3},
        {2, 0, 5},
        {2, 2, 6}
    };

    int sizeA = 5;
    Triplet B[MAX]; // Transposed matrix in triplet form

    // Transpose the matrix
    transpose(A, sizeA, B);

    // Output the transposed matrix in triplet form
    printf("Transposed matrix in triplet form:\n");
    for (int i = 0; i < sizeA; i++) {
        printf("(%d, %d, %d)\n", B[i].row, B[i].col, B[i].value);
    }

    return 0;
}
```