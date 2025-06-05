Here's an implementation of insertion sort using recursion:

```cpp
#include <bits/stdc++.h>
using namespace std;

// Recursive function to perform insertion sort
void recursiveInsertionSort(vector<int> &arr, int n) {

	// Base case: single element is already sorted
	if (n <= 1) {
		return;
	}
	
	// First sort the first n-1 elements
	recursiveInsertionSort(arr, n - 1);
	
	// Insert the nth element into its correct position
	int key = arr[n - 1];
	int j = n - 2;
	
	// Shift elements greater than key to the right
	while (j >= 0 && arr[j] > key) {
		arr[j + 1] = arr[j];
		j--;
	}
	
	arr[j + 1] = key;
}

  

int main() {

	int n, e;
	cin >> n;
	
	vector<int> arr;
	
	for (int i = 0; i < n; i++) {
		cin >> e;
		arr.push_back(e);
	}
	
	  
	
	cout << "Before using recursive insertion sort: ";
	for (int num : arr) {
		cout << num << " ";
	}
	cout << endl;
	
	recursiveInsertionSort(arr, n);
	
	cout << "After using recursive insertion sort: ";
	for (int num : arr) {
		cout << num << " ";
	}
	cout << endl;
	
	return 0;

}
```

### Key Features:

1. **Recursive Structure**:
   - The function first recursively sorts the subarray of size n-1
   - Then inserts the nth element in its correct position

2. **Base Case**:
   - When n ≤ 1, the array is already sorted (stopping condition)

3. **Insertion Step**:
   - Works exactly like the iterative version
   - Finds the correct position for the current element
   - Shifts larger elements to the right

4. **Performance**:
   - Time Complexity: O(n²) in worst/average case
   - Best Case (already sorted): O(n)
   - Space Complexity: O(n) due to recursion stack

### Comparison with Iterative Version:
- Same fundamental algorithm
- Recursive approach has higher space complexity due to call stack
- May be slightly less efficient but demonstrates recursive thinking

This implementation maintains all the benefits of insertion sort (efficient for small data sets, stable, adaptive) while showing how it can be expressed recursively.