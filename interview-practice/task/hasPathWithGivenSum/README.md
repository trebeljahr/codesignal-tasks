# Task - hasPathWithGivenSum

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/TG4tEMPnAc3PnzRCs)

<p>Given a binary tree <code>t</code> and an integer <code>s</code>, determine whether there is a root to leaf path in <code>t</code> such that the sum of vertex values equals <code>s</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
</code></pre>
<p>and<br>
<code>s = 7</code>,<br>
the output should be <code>hasPathWithGivenSum(t, s) = true</code>.</p>
<p>This is what this tree looks like:</p>
<pre><code>      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -2 -3
</code></pre>
<p>Path <code>4 -&gt; 3 -&gt; 2 -&gt; -2</code> gives us <code>7</code>, the required sum.</p>
</li>
<li>
<p>For</p>
<pre><code>t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -4,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
</code></pre>
<p>and<br>
<code>s = 7</code>,<br>
the output should be <code>hasPathWithGivenSum(t, s) = false</code>.</p>
<p>This is what this tree looks like:</p>
<pre><code>      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -4 -3
</code></pre>
<p>There is no path from root to leaf with the given sum <code>7</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] tree.integer t</strong></p>
<p>A binary tree of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ tree size ≤ 5 · 10<sup>4</sup></code>,<br>
<code>-1000 ≤ node value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] integer s</strong></p>
<p>An integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>-4000 ≤ s ≤ 4000</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if there is a path from root to leaf in <code>t</code> such that the sum of node values in it is equal to <code>s</code>, otherwise return <code>false</code>.</p>
</li>
</ul>
<p><strong>[JavaScript] Syntax Tips</strong></p>
<pre><code class="language-javascript"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params">name</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
