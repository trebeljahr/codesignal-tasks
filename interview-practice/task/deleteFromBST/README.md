# Task - deleteFromBST

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/oZXs4td52fsdWC9kR)

<p>A tree is considered a binary search tree (BST) if for each of its nodes the following is true:</p>
<ol>
<li>The left subtree of a node contains only nodes with keys <em>less than</em> the node's key.</li>
<li>The right subtree of a node contains only nodes with keys <em>greater than</em> the node's key.</li>
<li>Both the left and the right subtrees must also be binary search trees.</li>
</ol>
<p>Removing a value <code>x</code> from a BST <code>t</code> is done in the following way:</p>
<ul>
<li>If there is no <code>x</code> in <code>t</code>, nothing happens;</li>
<li>Otherwise, let <code>t'</code> be a subtree of <code>t</code> such that <code>t'.value = x</code>.
<ul>
<li>If <code>t'</code> has a left subtree, remove the rightmost node from it and put it at the root of <code>t'</code>;</li>
<li>Otherwise, remove the root of <code>t'</code> and its right subtree becomes the new <code>t'</code>s root.</li>
</ul>
</li>
</ul>
<p>For example, removing <code>4</code> from the following tree has no effect because there is no such value in the tree:</p>
<pre><code>    5
   / \
  2   6
 / \   \
1   3   8
       /
      7
</code></pre>
<p>Removing <code>5</code> causes <code>3</code> (the rightmost node in left subtree) to move to the root:</p>
<pre><code>    3
   / \
  2   6
 /     \
1       8
       /
      7
</code></pre>
<p>And removing <code>6</code> after that creates the following tree:</p>
<pre><code>    3
   / \
  2   8
 /   /
1   7
</code></pre>
<p>You're given a binary search tree <code>t</code> and an array of numbers <code>queries</code>. Your task is to remove <code>queries[0]</code>, <code>queries[1]</code>, etc., from <code>t</code>, step by step, following the algorithm above. Return the resulting BST.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For</p>
<pre><code>t = {
    "value": 5,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": 8,
            "left": {
                "value": 7,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}
</code></pre>
<p>and <code>queries = [4, 5, 6]</code>, the output should be</p>
<pre><code>deleteFromBST(t, queries) = {
    "value": 3,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 8,
        "left": {
            "value": 7,
            "left": null,
            "right": null
        },
        "right": null
    }
}
</code></pre>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 0.5 seconds (cpp)</strong></p>
</li>
<li>
<p><strong>[input] tree.integer t</strong></p>
<p>A tree of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ t size ≤ 1000</code>,<br>
<code>-10<sup>9</sup> ≤ node value ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer queries</strong></p>
<p>An array that contains the numbers to be deleted from <code>t</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ queries.length ≤ 1000</code>,<br>
<code>-10<sup>9</sup> ≤ queries[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] tree.integer</strong></p>
<p>The tree after removing all the numbers in <code>queries</code>, following the algorithm above.</p>
</li>
</ul>
<p><strong>[C++] Syntax Tips</strong></p>
<pre><code class="language-cpp"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-function"><span class="hljs-built_in">string</span> <span class="hljs-title">helloWorld</span><span class="hljs-params">(<span class="hljs-built_in">string</span> name)</span> </span>{
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"This prints to the console when you Run Tests"</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
