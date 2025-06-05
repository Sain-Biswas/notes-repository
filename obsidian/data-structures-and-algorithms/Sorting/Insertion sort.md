Insertion sort builds the final sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position. Here's an optimized version that reduces unnecessary assignments:

```cpp
#include <bits/stdc++.h>
using namespace std;

void insertionSort(vector<int> &arr, int n) {

	for (int i = 1; i < n; ++i) {
	
		int key = arr[i]; // Current element to be inserted
		int j = i - 1;
		
		// Shift elements greater than key to the right
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j]; // Single assignment per shift
			j--;
		}
		
		// Insert the key in its correct position
		arr[j + 1] = key;
	}
}


int main() {

	int n, e;
	cin >> n;
	
	vector<int> arr;
	
	for (int i = 0; i < n; i++) {
		cin >> e;
		arr.push_back(e);
	}
	
	cout << "Before using Insertion sort: ";
	for (int num : arr) {
		cout << num << " ";
	}
	cout << endl;
	
	insertionSort(arr, n);
	
	cout << "After using Insertion sort: ";
	for (int num : arr) {
		cout << num << " ";
	}
	cout << endl;
	
	return 0;

}
```

## Key Optimizations:

1. **Reduced Assignments**: 
   - Stores the current element (`key`) before shifting
   - Only performs one assignment per shift operation
   - Places the `key` in its correct position with a single final assignment

2. **Early Termination**:
   - The inner loop terminates as soon as it finds an element ≤ `key`
   - This makes it efficient for nearly-sorted input (best case O(n))

3. **In-place Sorting**:
   - Requires only O(1) additional space

## Time Complexity:
- Best case: O(n) (when array is already sorted)
- Average case: O(n²)
- Worst case: O(n²) (when array is reverse sorted)

## Advantages:
- Efficient for small datasets
- Stable sorting algorithm (maintains relative order of equal elements)
- Adaptive - performs better when input is partially sorted

For even better performance on larger datasets, consider hybrid algorithms like Timsort (used in Python and Java) which combine insertion sort with merge sort.