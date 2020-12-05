# Task - kthSmallestInBST

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/jAKLMWLu8ynBhYsv6)

<p><em>Note: Your solution should have only one BST traversal and <code>O(1)</code> extra space complexity, since this is what you will be asked to accomplish in an interview.</em></p>
<p>A tree is considered a binary search tree (BST) if for each of its nodes the following is true:</p>
<ol>
<li>The left subtree of a node contains only nodes with keys <em>less than</em> the node's key.</li>
<li>The right subtree of a node contains only nodes with keys <em>greater than</em> the node's key.</li>
<li>Both the left and the right subtrees must also be binary search trees.</li>
</ol>
<p>Given a binary search tree <code>t</code>, find the <code>k<sup>th</sup></code> smallest element in it.</p>
<p><strong>Note</strong> that <code>k<sup>th</sup></code> smallest element means <code>k<sup>th</sup></code> element in increasing order. See examples for better understanding.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
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
<p>and <code>k = 4</code>, the output should be<br>
<code>kthSmallestInBST(t, k) = 5</code>.</p>
<p>Here is what <code>t</code> looks like:</p>
<pre><code>   3
 /   \
1     5
     / \
    4   6
</code></pre>
<p>The values of <code>t</code> are <code>[1, 3, 4, 5, 6]</code>, and the <code>4<sup>th</sup></code> smallest is <code>5</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>t = {
    "value": 1,
    "left": {
        "value": -1,
        "left": {
            "value": -2,
            "left": null,
            "right": null
        },
        "right": {
            "value": 0,
            "left": null,
            "right": null
        }
    },
    "right": null
}

</code></pre>
<p>and <code>k = 1</code>, the output should be<br>
<code>kthSmallestInBST(t, k) = -2</code>.</p>
<p>Here is what <code>t</code> looks like:</p>
<pre><code>     1
    /
  -1
  / \
-2   0
</code></pre>
<p>The values of <code>t</code> are <code>[-2, -1, 0, 1]</code>, and the <code>1<sup>st</sup></code> smallest is <code>-2</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 5 seconds (ts)</strong></p>
</li>
<li>
<p><strong>[input] tree.integer t</strong></p>
<p>A tree of integers. It is guaranteed that <code>t</code> is a BST.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ tree size ≤ 10<sup>4</sup></code>,<br>
<code>-10<sup>5</sup> ≤ node value ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>An integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ tree size</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The <code>k<sup>th</sup></code> smallest value in <code>t</code>.</p>
</li>
</ul>
<p><strong>[TypeScript] Syntax Tips</strong></p>
<pre><code class="language-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params">name: <span class="hljs-built_in">string</span></span>): <span class="hljs-title">string</span> </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
