## **Standard Template Library (STL) in C++ - Notes**

The **Standard Template Library (STL)** is a powerful library in C++ that provides a collection of template classes and functions for common data structures and algorithms. STL is part of the C++ Standard Library and is widely used for efficient and reusable programming.

### **Components of STL**

STL consists of four major components:

1. **Containers**  
2. **Iterators**  
3. **Algorithms**  
4. **Functors (Function Objects)**  

### **Containers in STL**

Containers store data and are classified into three types:

- **`vector`**: Dynamic array (re sizable).
- **`list`**: Doubly linked list.
- **`deque`**: Double-ended queue.
- **`array`**: Fixed-size array (C-style array wrapper).
- **`forward_list`**: Singly linked list.

- **`set`**: Unique keys, ordered.
- **`multiset`**: Allows duplicate keys, ordered.
- **`map`**: Key-value pairs, unique keys, ordered.
- **`multimap`**: Key-value pairs, duplicate keys allowed, ordered.

- **`unordered_set`**: Unique keys, hashed.
- **`unordered_multiset`**: Duplicate keys, hashed.
- **`unordered_map`**: Key-value pairs, hashed.
- **`unordered_multimap`**: Key-value pairs, hashed, allows duplicates.

- **`stack`**: LIFO (Last-In-First-Out).
- **`queue`**: FIFO (First-In-First-Out).
- **`priority_queue`**: Highest priority element first.

- **`pair`**: Holds two elements (`first`, `second`).    
- **`tuple` (C++11)**: Holds multiple elements of different types.  
- **`optional` (C++17)**: Represents optional (nullable) values.
- **`variant` (C++17)**: Type-safe union.
- **`any` (C++17)**: Type-erased container for single values.

### **Iterators**

Iterators are used to traverse containers. They act like pointers and provide access to container elements.

#### **Types of Iterators:**

1. **Input Iterator** (Read-only access).
2. **Output Iterator** (Write-only access).
3. **Forward Iterator** (Read & write, moves forward).
4. **Bidirectional Iterator** (Forward + backward movement).
5. **Random Access Iterator** (Direct access to any element).

#### **Common Iterator Operations:**

- `begin()` → Points to the first element.
- `end()` → Points **after** the last element.
- `++`, `--`, `*`, `->` → Traversal and access.

### **Algorithms**

STL provides various algorithms that work on containers via iterators.

#### **Common Algorithms:**

- **Sorting**: `sort()`, `stable_sort()`, `partial_sort()`
- **Searching**: `binary_search()`, `find()`, `lower_bound()`
- **Modifying Operations**: `reverse()`, `replace()`, `remove()`
- **Numerical Operations**: `accumulate()`, `min_element()`, `max_element()`
- **Heap Operations**: `make_heap()`, `push_heap()`, `pop_heap()`
- **Bit Operations**: `__builtin_popcount()`

#### **Example:**

```cpp
#include <algorithm>
#include <vector>
using namespace std;

vector<int> v = {5, 3, 1, 4, 2};
sort(v.begin(), v.end()); // Sorts the vector
```

### **Functors (Function Objects)**

Functors are objects that can be called like functions. They are used with algorithms for custom operations.

#### **Types:**

1. **Built-in Functors** (`plus<>`, `minus<>`, `greater<>`, etc.)
2. **User-defined Functors** (Overloaded `operator()`)

#### **Example:**

```cpp
#include <functional>
#include <algorithm>
#include <vector>

vector<int> v = {5, 3, 1, 4, 2};
sort(v.begin(), v.end(), greater<int>()); // Sorts in descending order
```

### **6. Advantages of STL**

- **Re-usability**: Predefined data structures & algorithms.
- **Efficiency**: Optimized for performance.
- **Type Safety**: Templates ensure type checking.
- **Flexibility**: Works with user-defined types.

### **7. Example Code (STL Usage)**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};

    // Sorting
    sort(nums.begin(), nums.end());

    // Displaying elements
    for (int num : nums) {
        cout << num << " ";
    }

    return 0;
}
```

**Output:**

```
1 1 2 3 4 5 6 9
```

### **Key Takeaways**

- STL provides **containers, iterators, algorithms, and functors**.  
- **Sequence containers** (vector, list) vs. **Associative containers** (set, map).  
- **Iterators** help traverse containers.  
- **Algorithms** like `sort()`, `find()`, `reverse()` work on containers.  
- **Functors** allow custom operations in algorithms.  

STL makes C++ programming efficient and reduces code complexity by providing reusable components.