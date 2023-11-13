// рекурсивный спосо

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((element) => element < pivot);
  const middle = arr.filter((element) => element === pivot);
  const right = arr.filter((element) => element > pivot);

  return quickSort(left).concat(middle, quickSort(right));
}

// Пример использования:
const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(arrayToSort);
console.log(sortedArray);

// Итеративная реализация

function quickSortIterative(arr) {
  const stack = [[0, arr.length - 1]];

  while (stack.length > 0) {
    const [low, high] = stack.pop();

    if (low < high) {
      const pivotIndex = partition(arr, low, high);

      stack.push([low, pivotIndex - 1]);
      stack.push([pivotIndex + 1, high]);
    }
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Пример использования:
const arrayToSortIter = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
quickSortIterative(arrayToSortIter);
console.log(arrayToSortIter);
