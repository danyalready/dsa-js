function trapRainWater(height: number[]) {
    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let water = 0;

    while (l < r) {
        if (height[l] < height[r]) {
            lMax = Math.max(lMax, height[l]);
            water += lMax - height[l];
            l++;
        } else {
            rMax = Math.max(rMax, height[r]);
            water += rMax - height[r];
            r--;
        }
    }

    return water;
}

// T: O(n)
// M: O(1)

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trapRainWater(height));
