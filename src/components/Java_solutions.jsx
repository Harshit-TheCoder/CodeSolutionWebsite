import React from "react";
const java={
    "Hello World Program":`
        public class Helloworld{
            public static void main(String args[]){
                System.out.println("Hello World");
            }
        }
    `,
    "Calculator Program":`
    import java.util.Scanner;

    public class Calculator {
        public static void Add(int a, int b) {
            System.out.println("Result: " + (a + b));
        }
    
        public static void Subtract(int a, int b) {
            System.out.println("Result: " + (a - b));
        }
    
        public static void Multiply(int a, int b) {
            System.out.println("Result: " + (a * b));
        }
    
        public static void Divide(int a, int b) {
            System.out.println("Quotient: " + (a / b) + " Remainder: " + (a % b));
        }
    
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int a, b;
            String operation;
    
            System.out.println("Enter first number:");
            a = scanner.nextInt();
    
            System.out.println("Enter second number:");
            b = scanner.nextInt();
    
            System.out.println("Enter which operation to perform. (Add/Subtract/Multiply/Divide)");
            operation = scanner.next();
    
            switch (operation) {
                case "Add":
                    Add(a, b);
                    break;
                case "Subtract":
                    Subtract(a, b);
                    break;
                case "Multiply":
                    Multiply(a, b);
                    break;
                case "Divide":
                    Divide(a, b);
                    break;
                default:
                    System.out.println("Invalid operation!");
            }
    
            scanner.close();
        }
    }
    
    `,
    "Swap two numbers PART-1":`
    import java.util.Scanner;

    public class SwapNumbers {
        public static void swapNumbers(int[] numbers) {
            int temp = numbers[0];
            numbers[0] = numbers[1];
            numbers[1] = temp;
        }
    
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int[] numbers = new int[2];
    
            System.out.print("Enter first number: ");
            numbers[0] = scanner.nextInt();
    
            System.out.print("Enter second number: ");
            numbers[1] = scanner.nextInt();
    
            System.out.println("Numbers before swapping:");
            System.out.println("a = " + numbers[0]);
            System.out.println("b = " + numbers[1]);
    
            swapNumbers(numbers);
    
            System.out.println("Numbers after swapping:");
            System.out.println("a = " + numbers[0]);
            System.out.println("b = " + numbers[1]);
    
            scanner.close();
        }
    }
      
    `,
    "Swap two numbers PART-2"  : `
    import java.util.Scanner;

    public class SwapNumbers {
        public static void swapNumbers(int[] numbers) {
            numbers[0] = numbers[0] + numbers[1];
            numbers[1] = numbers[0] - numbers[1];
            numbers[0] = numbers[0] - numbers[1];
        }
    
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int[] numbers = new int[2];
    
            System.out.print("Enter first number: ");
            numbers[0] = scanner.nextInt();
    
            System.out.print("Enter second number: ");
            numbers[1] = scanner.nextInt();
    
            System.out.println("Numbers before swapping:");
            System.out.println("a = " + numbers[0]);
            System.out.println("b = " + numbers[1]);
    
            swapNumbers(numbers);
    
            System.out.println("Numbers after swapping:");
            System.out.println("a = " + numbers[0]);
            System.out.println("b = " + numbers[1]);
    
            scanner.close();
        }
    }
    `,

    "Linear Search":`
    public class LinearSearch {
        public static int linearSearch(int arr[], int key) {
            for (int i = 0; i < arr.length; ++i) {
                if (arr[i] == key)
                    return i;
            }
            return -1;
        }
    
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            int key = 13;
            int index = linearSearch(arr, key);
            if (index != -1)
                System.out.println("Element " + key + " found at index " + index);
            else
                System.out.println("Element " + key + " not found");
        }
    }
    
    `,
    "Binary Search":`
    public class BinarySearch {
        public static int binarySearch(int arr[], int key) {
            int left = 0, right = arr.length - 1;
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
    
        public static void main(String[] args) {
            int arr[] = {5, 6, 11, 12, 13};
            int key = 13;
            int index = binarySearch(arr, key);
            if (index != -1)
                System.out.println("Element " + key + " found at index " + index);
            else
                System.out.println("Element " + key + " not found");
        }
    }
    
    `,
    "Merging of two arrays":`
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
    
    `,
    "Insertion in Array":`
    import java.util.Arrays;

    public class InsertElement {
        public static int[] insertElement(int[] arr, int element, int index) {
            int[] updatedArr = new int[arr.length + 1];
            for (int i = 0, j = 0; i < updatedArr.length; ++i, ++j) {
                if (i == index)
                    updatedArr[i] = element;
                else
                    updatedArr[i] = arr[j];
            }
            return updatedArr;
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 4, 5};
            int element = 3;
            int index = 2;
            int[] updatedArr = insertElement(arr, element, index);
            System.out.print("Updated Array: ");
            System.out.println(Arrays.toString(updatedArr));
        }
    }
    
    `,
    "Deletion in Array":`
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
    
    `,
    "Selection Sort":`
    public class SelectionSort {
        public static void selectionSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; ++i) {
                int min_index = i;
                for (int j = i + 1; j < n; ++j) {
                    if (arr[j] < arr[min_index])
                        min_index = j;
                }
                int temp = arr[i];
                arr[i] = arr[min_index];
                arr[min_index] = temp;
            }
        }
    
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            selectionSort(arr);
            System.out.print("Selection Sort: ");
            for (int num : arr) System.out.print(num + " ");
            System.out.println();
        }
    }
    
    `,
    "Bubble Sort":`
    public class BubbleSort {
        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; ++i) {
                for (int j = 0; j < n - i - 1; ++j) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            bubbleSort(arr);
            System.out.print("Bubble Sort: ");
            for (int num : arr) System.out.print(num + " ");
            System.out.println();
        }
    }
    
    `,
    "Merge Sort":`
    import java.util.Arrays;

    public class MergeSort {
        public static void merge(int arr[], int left, int mid, int right) {
            int n1 = mid - left + 1;
            int n2 = right - mid;
    
            int L[] = new int[n1];
            int R[] = new int[n2];
    
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
        public static void mergeSort(int arr[], int left, int right) {
            if (left < right) {
                int mid = left + (right - left) / 2;
    
                mergeSort(arr, left, mid);
                mergeSort(arr, mid + 1, right);
    
                merge(arr, left, mid, right);
            }
        }
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            mergeSort(arr, 0, arr.length - 1);
            System.out.print("Merge Sort: ");
            System.out.println(Arrays.toString(arr));
        }
    }
    
    `,
    "Insertion Sort":`
    import java.util.Arrays;
    public class InsertionSort {
        public static void insertionSort(int arr[]) {
            int n = arr.length;
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
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            insertionSort(arr);
            System.out.print("Insertion Sort: ");
            System.out.println(Arrays.toString(arr));
        }
    }
    `,
    "Quick Sort":`
    import java.util.Arrays;
    public class QuickSort {
        public static int partition(int arr[], int low, int high) {
            int pivot = arr[high];
            int i = low - 1;
            for (int j = low; j < high; ++j) {
                if (arr[j] <= pivot) {
                    ++i;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            return i + 1;
        }
        public static void quickSort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        public static void main(String[] args) {
            int arr[] = {12, 11, 13, 5, 6};
            quickSort(arr, 0, arr.length - 1);
            System.out.print("Quick Sort: ");
            System.out.println(Arrays.toString(arr));
        }
    }
    
    `,
};

export default java;