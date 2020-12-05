# Task - restoreBinaryTree

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/AaWaYxi8gjtbqgp2M)

<p><em>Note: Your solution should have <code>O(inorder.length)</code> time complexity, since this is what you will be asked to accomplish in an interview.</em></p>
<p>Let's define <em>inorder</em> and <em>preorder</em> traversals of a binary tree as follows:</p>
<ul>
<li><em>Inorder</em> traversal first visits the left subtree, then the root, then its right subtree;</li>
<li><em>Preorder</em> traversal first visits the root, then its left subtree, then its right subtree.</li>
</ul>
<p>For example, if tree looks like this:</p>
<pre><code>    1
   / \
  2   3
 /   / \
4   5   6
</code></pre>
<p>then the traversals will be as follows:</p>
<ul>
<li><em>Inorder</em> traversal: <code>[4, 2, 1, 5, 3, 6]</code></li>
<li><em>Preorder</em> traversal: <code>[1, 2, 4, 3, 5, 6]</code></li>
</ul>
<p>Given the <em>inorder</em> and <em>preorder</em> traversals of a binary tree <code>t</code>, but not <code>t</code> itself, restore <code>t</code> and return it.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>inorder = [4, 2, 1, 5, 3, 6]</code> and <code>preorder = [1, 2, 4, 3, 5, 6]</code>, the output should be<pre><code>restoreBinaryTree(inorder, preorder) = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}
</code></pre>
</li>
<li>For <code>inorder = [2, 5]</code> and <code>preorder = [5, 2]</code>, the output should be<pre><code>restoreBinaryTree(inorder, preorder) = {
    "value": 5,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": null
}
</code></pre>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (dart)</strong></p>
</li>
<li>
<p><strong>[input] array.integer inorder</strong></p>
<p>An <em>inorder</em> traversal of the tree. It is guaranteed that all numbers in the tree are pairwise distinct.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ inorder.length ≤ 2 · 10<sup>3</sup></code>,<br>
<code>-10<sup>5</sup> ≤ inorder[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer preorder</strong></p>
<p>A <em>preorder</em> traversal of the tree.</p>
<p><em>Guaranteed constraints:</em><br>
<code>preorder.length = inorder.length</code>,<br>
<code>-10<sup>5</sup> ≤ preorder[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[output] tree.integer</strong></p>
<p>The restored binary tree.</p>
</li>
</ul>
<p><strong>[Dart] Syntax Tips</strong></p>
<pre><code class="language-dart"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-built_in">String</span> helloWorld(<span class="hljs-built_in">String</span> name) {
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}
</code></pre>
