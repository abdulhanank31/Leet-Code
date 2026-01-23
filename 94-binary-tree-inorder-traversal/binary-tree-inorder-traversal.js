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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);        // Left
        result.push(node.val); // Root
        dfs(node.right);       // Right
    }

    dfs(root);
    return result;
};
