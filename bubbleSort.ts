function bubbleSort(arr: number[]): void {
    const n = arr.length;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        
        // Print the array after each pass
        console.log(`Pass ${i + 1}:`, arr);
    }
}

// Sample array
const arr = [64, 34, 25, 12, 22, 11, 91];

// Call bubble sort and print the array after each pass
bubbleSort(arr);

// new line added in feature branch first commit

// added another line in feature branch second commit
// Added a new comment in main branch as 3rd commit

// Add a change in main after bug changes

// Added a new comment in main branch as 4th commit


// Added another line in feature after the squash merge into feature as 5th commit

// Add another change in main after bug changes
// Another feature branch commit 1
// Another bug branch commit 1
// Another bug branch commit 2
// Add another change in main after bug changes
