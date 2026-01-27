/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    let stack = [[root, targetSum]];

    while (stack.length > 0) {
        let [node, sum] = stack.pop();

        if (node.left === null && node.right === null && sum === node.val) {
            return true;
        }

        if (node.right) stack.push([node.right, sum - node.val]);
        if (node.left) stack.push([node.left, sum - node.val]);
    }

    return false;
};
