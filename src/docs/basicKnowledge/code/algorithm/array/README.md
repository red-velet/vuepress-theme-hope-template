## 二分

### 1.基础二分

> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

```java
public int binarySearch(int[] nums， int target) {
    int left = 0;
    int right = nums.length - 1;
    while (left <= right) {
        int mid = (right + left) / 2;
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```



### 2.搜索插入位置

> 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
>
> 1. 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
> 2. 你可以假设数组中无重复元素。

```java
public int findInsertPosition(int[] nums， int target) {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    int left = 0;
    int right = nums.length - 1;
    while (left <= right) {
        int mid = (right + left) / 2;
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right + 1;
}
```



### 3.寻找峰值

> 给定一个长度为n的数组nums，请你找到峰值并返回其索引。数组可能包含多个峰值，在这种情况下，返回任何一个所在位置即可。
>
> 1. 峰值元素是指其值严格大于左右相邻值的元素。严格大于即不能有等于
> 2. 假设 nums[-1] = nums[n] = −∞−∞
> 3. 对于所有有效的 i 都有 nums[i] != nums[i + 1]
> 4. 你可以使用O(logN)的时间复杂度实现此问题吗？

```java
public int findPeak(int[] nums){
    int left = 0;
    int right = nums.length - 1;
    while (left < right) {
        int mid = (right + left) / 2;
        if (nums[mid+1] > nums[mid]) {
            left = mid + 1;
        }else {
            right = mid;
        }
    }
    return right;
}
```

- 使用二分查找来寻找峰值。由于题目中要求使用 O(logN) 的时间复杂度，因此可以利用二分查找的思想来进行求解。
   * 初始化左指针 left 为 0，右指针 right 为 nums.length - 1。
   * 在每一次的迭代过程中，计算中间元素的索引 mid，并比较 nums[mid] 与其相邻元素 nums[mid+1] 的大小关系：
   * 如果 nums[mid] < nums[mid+1]，说明峰值一定在 mid 的右侧，因为右侧存在一个上升趋势。将左指针 left 更新为 mid+1。
   * 如果 nums[mid] > nums[mid+1]，说明峰值一定在 mid 的左侧，因为左侧存在一个下降趋势。将右指针 right 更新为 mid。
   * 如果 nums[mid] 与 nums[mid+1] 相等，可以任意选择向左或向右移动一个指针。
   * 重复步骤 3，直到找到峰值。最终，左指针 left 和右指针 right 会相遇，此时指向的位置就是一个峰值。
   * 返回 left 或 right，都可以作为一个峰值的索引。



### 4.二维数组查找

> 在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
>
> ```
> [
> [1，2，8，9]，
> [2，4，9，12]，
> [4，7，10，13]，
> [6，8，11，15]
> ]
> ```
>
> * 给定 target = 7，返回 true。
> * 给定 target = 3，返回 false。

```java
public boolean searchMatrix(int[][] matrix, int target) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    int row = 0;
    int col = cols - 1;
    while (row <= rows - 1 && col >= 0) {
        int num = matrix[row][col];
        if (target == num) {
            return true;
        } else if (target > num) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}
```

-  题目描述是一个经典的二维有序数组查找问题。下面是解题思路：
   * 初始化指针,将初始指针定位在数组的右上角或左下角,可以选择右上角,即第一行的最后一列。
   * 比较指针所在位置的值与目标值的大小：
   * 如果当前值等于目标值,返回 true。
   * 如果当前值大于目标值,说明目标值应该在当前值的左侧,将指针向左移动一列。
   * 如果当前值小于目标值,说明目标值应该在当前值的下方,将指针向下移动一行。
   * 重复步骤2,直到找到目标值或者超出数组边界。
   * 如果超出数组边界,说明数组中不存在目标值,返回 false。



### 5.逆序对个数

> 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
>
> -  输入: [7,5,6,4] 输出:  5 
> -  [7,5] [7,6] [7,4] [5,4] [6,4]

```java
public class Main {
    public static void main(String[] args) {
        int[] nums = {7, 5, 6, 4};
        System.out.println("InversePairs(nums) = " + new Main().InversePairs(nums));
        System.out.println("1 mod 1000000007=" + (1 % 1000000007));
    }

    private int count = 0;

    public int InversePairs(int[] array) {
        if (array == null || array.length == 0) {
            return 0;
        }

        mergeSort(array, 0, array.length - 1);

        return count;
    }

    private void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);
            merge(array, left, mid, right);
        }
    }

    private void merge(int[] array, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= right) {
            if (array[i] <= array[j]) {
                temp[k++] = array[i++];
            } else {
                // 当左子数组的当前元素大于右子数组的当前元素时，存在逆序对
                temp[k++] = array[j++];
                count += mid - i + 1;
            }
        }

        while (i <= mid) {
            temp[k++] = array[i++];
        }

        while (j <= right) {
            temp[k++] = array[j++];
        }

        for (int m = 0; m < temp.length; m++) {
            array[left + m] = temp[m];
        }
    }
}
```

