import React from "react";

const python={
    "Hello World Program":`
        print("Hello World")
    `,
    "Calculator Program":`
    def Add(a, b):
        print("Result:", a + b)

    def Subtract(a, b):
        print("Result:", a - b)

    def Multiply(a, b):
        print("Result:", a * b)

    def Divide(a, b):
        print("Quotient:", a // b, "Remainder:", a % b)

    if __name__ == "__main__":
        a = int(input("Enter first number:\n"))
        b = int(input("Enter second number:\n"))
        operation = input("Enter which operation to perform. (Add/Subtract/Multiply/Divide)\n")

        if operation == "Add":
            Add(a, b)
        elif operation == "Subtract":
            Subtract(a, b)
        elif operation == "Multiply":
            Multiply(a, b)
        elif operation == "Divide":
            Divide(a, b)
        else:
            print("Invalid operation!")

    `,
    "Swap two numbers PART-1":`
        def swap_numbers(int a,int b):
            temp=a
            a=b
            b=temp
            print("Numbers after swapping")
            print("a=",a)
            print("b=",b)
        a=int(input("Enter first number"))
        b=int(input("Enter second number"))
        print("Numbers before swapping")
        print("a=",a)
        print("b=",b)
        swap_numbers(a,b)


    `,
    "Swap two numbers PART-2":`
    def swap_numbers(int a,int b):
        a=a+b
        b=a-b
        a=a-b
        print("Numbers after swapping")
        print("a=",a)
        print("b=",b)
    a=int(input("Enter first number"))
    b=int(input("Enter second number"))
    print("Numbers before swapping")
    print("a=",a)
    print("b=",b)
    swap_numbers(a,b)
    
    `,
    "Linear Search":`
    def linear_search(arr, key):
        for i in range(len(arr)):
            if arr[i] == key:
                return i
            return -1

    arr = [12, 11, 13, 5, 6]
    key = 13
    index = linear_search(arr, key)
    if index != -1:
        print(f"Element {key} found at index {index}")
    else:
        print(f"Element {key} not found")

    `,
    "Binary Search":`
    def binary_search(arr, key):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if arr[mid] == key:
                return mid
            elif arr[mid] < key:
                left = mid + 1
            else:
                right = mid - 1
        return -1

    arr = [5, 6, 11, 12, 13]
    key = 13
    index = binary_search(arr, key)
    if index != -1:
        print(f"Element {key} found at index {index}")
    else:
        print(f"Element {key} not found")

    `,
    "Merging of two arrays":`
    def merge_arrays(arr1, arr2):
        merged = []
        i, j = 0, 0
        while i < len(arr1) and j < len(arr2):
            if arr1[i] <= arr2[j]:
                merged.append(arr1[i])
                i += 1
            else:
                merged.append(arr2[j])
                j += 1
        while i < len(arr1):
            merged.append(arr1[i])
            i += 1
        while j < len(arr2):
            merged.append(arr2[j])
            j += 1
        return merged

    arr1 = [1, 3, 5, 7]
    arr2 = [2, 4, 6, 8]
    merged = merge_arrays(arr1, arr2)
    print("Merged Array:", merged)

    `,
    "Insertion in Array":`
    def insert_element(arr, element, index):
        arr.insert(index, element)
        return arr

    arr = [1, 2, 4, 5]
    element = 3
    index = 2
    updated_arr = insert_element(arr, element, index)
    print("Updated Array:", updated_arr)

    `,
    "Deletion in Array":`
    def delete_element(arr, index):
        del arr[index]
        return arr

    arr = [1, 2, 3, 4, 5]
    index = 2
    updated_arr = delete_element(arr, index)
    print("Updated Array:", updated_arr)

    `,
    "Selection Sort":`
    def selection_sort(arr):
        n = len(arr)
        for i in range(n - 1):
            min_index = i
                for j in range(i + 1, n):
                    if arr[j] < arr[min_index]:
                        min_index = j
                arr[i], arr[min_index] = arr[min_index], arr[i]

    arr = [12, 11, 13, 5, 6]
    selection_sort(arr)
    print("Selection Sort:", arr)

    `,
    "Bubble Sort":`
    def bubble_sort(arr):
        n = len(arr)
        for i in range(n - 1):
            for j in range(n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]

    arr = [12, 11, 13, 5, 6]
    bubble_sort(arr)
    print("Bubble Sort:", arr)

    `,
    "Merge Sort":`
    def merge(arr, left, mid, right):
        n1 = mid - left + 1
        n2 = right - mid
        L = arr[left:mid + 1]
        R = arr[mid + 1:right + 1]
        i = j = 0
        k = left
        while i < n1 and j < n2:
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < n1:
            arr[k] = L[i]
            i += 1
            k += 1
        while j < n2:
            arr[k] = R[j]
            j += 1
            k += 1
    def merge_sort(arr, left, right):
        if left < right:
            mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    arr = [12, 11, 13, 5, 6]
    merge_sort(arr, 0, len(arr) - 1)
    print("Merge Sort:", arr)

    `,
    "Insertion Sort":`
    def insertion_sort(arr):
        n = len(arr)
        for i in range(1, n):
            key = arr[i]
            j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    arr = [12, 11, 13, 5, 6]
    insertion_sort(arr)
    print("Insertion Sort:", arr)

    `,
    "Quick Sort":`
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    def quick_sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    arr = [12, 11, 13, 5, 6]
    quick_sort(arr, 0, len(arr) - 1)
    print("Quick Sort:", arr)

    `,
};

export default python;