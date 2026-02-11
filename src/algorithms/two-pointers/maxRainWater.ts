function maxRainWater(height: number[]) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);

        if (area > maxArea) maxArea = area;

        if (height[l] < height[r]) l++;
        else r--;
    }

    return maxArea;
}

// T: O(n)
// M: O(1)

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxRainWater(height));
