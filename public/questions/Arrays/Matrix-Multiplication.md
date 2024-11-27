### C
```
#include<stdio.h>
#include<stdlib.h>

void displayMatrix(int **matrix, int rows, int cols){
    // printf("Resultant matrix:\n");
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}
int main(){
    int rowsA, colsA, rowsB, colsB;
    printf("Enter number of rows of matrix A\n");
    scanf("%d", &rowsA);
    printf("Enter number of columns of matrix A\n");
    scanf("%d", &colsA);
    printf("Enter number of rows of matrix B\n");
    scanf("%d", &rowsB);
    printf("Enter number of columns of matrix B\n");
    scanf("%d", &colsB);
   
    if(colsA != rowsB){
        printf("Matrix Multiplication is not possible with given dimension\n");
        return -1;
    }
   
    int **A = (int**)malloc(rowsA*sizeof(int));
    for(int i=0;i<rowsA;i++){
        A[i] = (int*)malloc(colsA*sizeof(int));
    }

    int **B = (int**)malloc(rowsB*sizeof(int));
    for(int i=0;i<rowsB;i++){
        B[i] = (int*)malloc(colsB*sizeof(int));
    }

    int **result = (int**)malloc(rowsA*sizeof(int));
    for(int i=0;i<rowsA;i++){
        result[i] = (int*)malloc(colsB*sizeof(int));
    }

    printf("Enter elements of matrix A\n");
    for(int i=0;i<rowsA;i++){
        for(int j=0;j<colsA;j++){
            printf("Element[%d][%d]:", i,j);
            scanf("%d", &A[i][j]);
        }
    }

    printf("Enter elements of matrix B\n");
    for(int i=0;i<rowsB;i++){
        for(int j=0;j<colsB;j++){
            printf("Element[%d][%d]:", i,j);
            scanf("%d", &B[i][j]);
        }
    }

    for(int i=0;i<rowsA;i++){
        for(int j=0;j<colsB;j++){
            result[i][j]=0;
            for(int k=0;k<colsA;k++){
                result[i][j]+= A[i][k] * B[k][j];
            }
        }
    }

    printf("Resultant matrix:\n");
    displayMatrix(result,rowsA,colsB);

    for(int i=0;i<rowsA;i++){
        free(A[i]);
    }
    free(A);
    for(int i=0;i<rowsB;i++){
        free(B[i]);
    }
    free(B);
    for(int i=0;i<rowsA;i++){
        free(result[i]);
    }
    free(result);
    return 0;
}
```