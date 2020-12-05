# Task - isTreeSymmetric

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/tXN6wQsTknDT6bNrf)

<p>Given a binary tree <code>t</code>, determine whether it is <em>symmetric</em> around its center, i.e. each side mirrors the other.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
</code></pre>
<p>the output should be <code>isTreeSymmetric(t) = true</code>.</p>
<p>Here's what the tree in this example looks like:</p>
<pre><code>    1
   / \
  2   2
 / \ / \
3  4 4  3
</code></pre>
<p>As you can see, it is symmetric.</p>
</li>
<li>
<p>For</p>
<pre><code>t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
</code></pre>
<p>the output should be <code>isTreeSymmetric(t) = false</code>.</p>
<p>Here's what the tree in this example looks like:</p>
<pre><code>    1
   / \
  2   2
   \   \
   3    3
</code></pre>
<p>As you can see, it is not symmetric.</p>
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
<code>0 ≤ tree size &lt; 5 · 10<sup>4</sup></code>,<br>
<code>-1000 ≤ node value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if <code>t</code> is symmetric and <code>false</code> otherwise.</p>
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
