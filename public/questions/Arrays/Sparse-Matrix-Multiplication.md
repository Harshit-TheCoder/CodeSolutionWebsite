### C
```
#include <stdio.h>
#include <stdlib.h>

#define MAX 100

// Structure to represent a sparse matrix element in triplet form
typedef struct {
    int row;
    int col;
    int value;
} Triplet;

// Function to multiply two sparse matrices in triplet form
void sparse_matrix_multiply(Triplet A[], int sizeA, Triplet B[], int sizeB, Triplet C[], int *sizeC) {
    *sizeC = 0;

    // Multiply each element of A with corresponding elements in B
    for (int i = 0; i < sizeA; i++) {
        for (int j = 0; j < sizeB; j++) {
            if (A[i].col == B[j].row) {
                int row = A[i].row;
                int col = B[j].col;
                int value = A[i].value * B[j].value;

                // Check if this (row, col) already exists in C
                int found = 0;
                for (int k = 0; k < *sizeC; k++) {
                    if (C[k].row == row && C[k].col == col) {
                        C[k].value += value;
                        found = 1;
                        break;
                    }
                }

                // If not found, add it as a new element
                if (!found) {
                    C[*sizeC].row = row;
                    C[*sizeC].col = col;
                    C[*sizeC].value = value;
                    (*sizeC)++;
                }
            }
        }
    }
}

int main() {
    // Example sparse matrices A and B in triplet form
    Triplet A[MAX] = {{0, 2, 3}, {1, 0, 4}, {2, 1, 5}, {2, 2, 6}};
    Triplet B[MAX] = {{0, 1, 2}, {1, 2, 3}, {2, 0, 4}, {2, 1, 5}};

    int sizeA = 4;
    int sizeB = 4;
    Triplet C[MAX]; // Resultant matrix in triplet form
    int sizeC;

    // Multiply matrices A and B
    sparse_matrix_multiply(A, sizeA, B, sizeB, C, &sizeC);

    // Output the resultant matrix in triplet form
    printf("Resultant matrix in triplet form:\n");
    for (int i = 0; i < sizeC; i++) {
        printf("(%d, %d, %d)\n", C[i].row, C[i].col, C[i].value);
    }

    return 0;
}
```