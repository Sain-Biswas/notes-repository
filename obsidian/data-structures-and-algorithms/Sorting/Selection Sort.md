Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. Here's an optimized version that reduces unnecessary swaps:

```cpp
#include <bits/stdc++.h>
using namespace std;

void selectionSort(vector<int> &arr, int n) {
	// selection sort
	for (int i = 0; i < n - 1; ++i) {
	
		// Find the minimum element in unsorted array
		int min_idx = i;
		for (int j = i + 1; j < n; ++j) {
			
			if (arr[j] < arr[min_idx]) {
				min_idx = j;
			}
		}
		
		// Swap only if necessary
		
		if (min_idx != i) {
			swap(arr[i], arr[min_idx]);
		}
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
	
	cout << "Before using selection sort: ";
	for (int i = 0; i < n; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
	
	
	selectionSort(arr, n);
	
	
	cout << "After using selection sort: ";
	for (int i = 0; i < n; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
	
	return 0;

}
```

## Optimizations:

1. **Reduced Swaps**: The algorithm only performs a swap when the minimum element is not already in its correct position, unlike the basic version which swaps in every iteration.

2. **Early Termination**: The outer loop runs only up to `n-1` because the last element will automatically be in its correct position.

3. **Using std::swap**: The C++ standard library's `swap` function is typically optimized for performance.

## Time Complexity:
- Best case: O(n²) (when array is already sorted)
- Average case: O(n²)
- Worst case: O(n²)

## Space Complexity:
- O(1) (in-place sorting)

This implementation maintains the simplicity of selection sort while minimizing unnecessary operations.