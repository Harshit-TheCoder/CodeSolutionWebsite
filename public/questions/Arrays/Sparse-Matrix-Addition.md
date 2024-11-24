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

// Function to add two sparse matrices in triplet form
void sparse_matrix_add(Triplet A[], int sizeA, Triplet B[], int sizeB, Triplet C[], int *sizeC) {
    int i = 0, j = 0;
    *sizeC = 0;

    while (i < sizeA && j < sizeB) {
        // Compare rows and columns of current elements
        if (A[i].row < B[j].row || (A[i].row == B[j].row && A[i].col < B[j].col)) {
            // Add element from A to C
            C[*sizeC] = A[i];
            i++;
        } else if (A[i].row > B[j].row || (A[i].row == B[j].row && A[i].col > B[j].col)) {
            // Add element from B to C
            C[*sizeC] = B[j];
            j++;
        } else {
            // Same row and column, add values
            C[*sizeC].row = A[i].row;
            C[*sizeC].col = A[i].col;
            C[*sizeC].value = A[i].value + B[j].value;
            i++;
            j++;
        }
        (*sizeC)++;
    }

    // Copy remaining elements from A
    while (i < sizeA) {
        C[*sizeC] = A[i];
        i++;
        (*sizeC)++;
    }

    // Copy remaining elements from B
    while (j < sizeB) {
        C[*sizeC] = B[j];
        j++;
        (*sizeC)++;
    }
}

int main() {
    // Example sparse matrices A and B in triplet form
    Triplet A[MAX] = {{0, 0, 3}, {1, 1, 5}, {2, 3, 6}};
    Triplet B[MAX] = {{0, 0, 2}, {1, 2, 4}, {2, 3, 5}};

    int sizeA = 3;
    int sizeB = 3;
    Triplet C[MAX]; // Resultant matrix in triplet form
    int sizeC;

    // Add matrices A and B
    sparse_matrix_add(A, sizeA, B, sizeB, C, &sizeC);

    // Output the resultant matrix in triplet form
    printf("Resultant matrix in triplet form:\n");
    for (int i = 0; i < sizeC; i++) {
        printf("(%d, %d, %d)\n", C[i].row, C[i].col, C[i].value);
    }

    return 0;
}
```