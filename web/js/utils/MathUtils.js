var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    // /**
    //  * 极坐标（r.θ）转换为笛卡尔坐标（x,y）
    //  * @param angle 角度
    //  * @param length 长度
    //  */
    // public static PolarToCartesian(angle: number, length: number = 1): Laya.Vector2 {
    //     return MathUtils.PolarToCartesianRad(angle * Mathf.Deg2Rad, length);
    // }
    // public static PolarToCartesianRad(angleRad, length = 1): Laya.Vector2 {
    //     return new Laya.Vector2(Mathf.Cos(angleRad) * length, Mathf.Sin(angleRad) * length);
    // }
    // /**
    //  * 计算两个向量的夹角
    //  * @param v 向量
    //  */
    // public static VectorToAngle(v: Laya.Vector2): number {
    //     return Mathf.Atan2(v.y, v.x) * Mathf.Rad2Deg;
    // }
    // public static WrapWithin(x, lower, upper): number {
    //     return Mathf.Repeat(x - upper, upper - lower) + lower;
    // }
    // public static Map(value, fromLower, fromUpper, toLower, toUpper): number {
    //     var fromAbs = value - fromLower;
    //     var fromMaxAbs = fromUpper - fromLower;
    //     var normal = fromAbs / fromMaxAbs;
    //     var toMaxAbs = toUpper - toLower;
    //     var toAbs = toMaxAbs * normal;
    //     return toAbs + toLower;
    // }
    /**
     * @param px1 第一个点x
     * @param py1 第一个点y
     * @param px2 第二个点x
     * @param py2 第二个点y
     */
    MathUtils.getAngle = function (px1, py1, px2, py2) {
        //两点的x、y值 
        var x = px2 - px1;
        var y = py2 - py1;
        var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //斜边长度 
        var cos = x / hypotenuse;
        var radian = Math.acos(cos);
        //求出弧度 
        var angle = 180 / (Math.PI / radian);
        //用弧度算出角度 
        if (y < 0) {
            angle = -angle;
        }
        else if ((y == 0) && (x < 0)) {
            angle = 180;
        }
        return angle;
    };
    /**
     * 求随机数
     * @param min 最小值
     * @param max 最大值
     * @param isFloor 默认整数
     */
    MathUtils.getRandom = function (min, max, isFloor) {
        if (isFloor === void 0) { isFloor = true; }
        if (isFloor) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        else {
            return Math.random() * (max - min + 1) + min;
        }
    };
    /**
     * 求距离
     * @param one 起点
     * @param two 终点
     */
    MathUtils.getDistance = function (one, two) {
        return Math.sqrt((one.x - two.x) * (one.x - two.x) + (one.y - two.y) * (one.y - two.y));
    };
    /**
     * 快速排序
     */
    MathUtils.quickSort = function (arr, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (arr[j] >= pivot && i < j) { // 从后往前找比基准小的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (arr[i] <= pivot && i < j) { // 从前往后找比基准大的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort(arr, left, i - 1);
            MathUtils.quickSort(arr, i + 1, right);
            return arr;
        }
    };
    /**
     * 快速排序(object里某元素)
     */
    MathUtils.quickSort2 = function (arr, element, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (arr[j][element] <= pivot[element] && i < j) { // 从前往后找比基准大的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (arr[i][element] >= pivot[element] && i < j) { // 从后往前找比基准小的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort2(arr, element, left, i - 1);
            MathUtils.quickSort2(arr, element, i + 1, right);
            return arr;
        }
    };
    /**
     * 快速排序(根据name的顺序来排序)
     */
    MathUtils.quickSort3 = function (arr, element, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (Number(arr[j][element].substr(arr[j][element].length - 1, 1)) >= Number(pivot[element].substr(pivot[element].length - 1, 1)) && i < j) { // 从前往后找比基准大的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (Number(arr[i][element].substr(arr[i][element].length - 1, 1)) <= Number(pivot[element].substr(pivot[element].length - 1, 1)) && i < j) { // 从后往前找比基准小的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort3(arr, element, left, i - 1);
            MathUtils.quickSort3(arr, element, i + 1, right);
            return arr;
        }
    };
    /**
     * 点关于直线的对称
     */
    MathUtils.symmetry = function (aaa, bbb, a, b) {
        var A = bbb.y - aaa.y;
        var B = aaa.x - bbb.x;
        var C = bbb.x * aaa.y - aaa.x * bbb.y;
        return new Laya.Vector2(-(2 * A * B * b + (A * A - B * B) * a + 2 * A * C) / (B * B + A * A), -((B * B - A * A) * b + 2 * A * B * a + 2 * B * C) / (B * B + A * A));
    };
    //数组元素置顶
    MathUtils.SwapItems = function (arr, index1, index2) {
        arr.unshift(arr[index1]);
        arr.splice(index1 + 1, 1);
        return arr;
    };
    return MathUtils;
}());
//# sourceMappingURL=MathUtils.js.map