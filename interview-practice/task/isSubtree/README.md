# Task - isSubtree

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/mDpAJnDQkJqaYYsCg)

<p>Given two binary trees <code>t1</code> and <code>t2</code>, determine whether the second tree is a <em>subtree</em> of the first tree. A <em>subtree</em> for vertex <code>v</code> in a binary tree <code>t</code> is a tree consisting of <code>v</code> and all its descendants in <code>t</code>. Determine whether or not there is a vertex <code>v</code> (possibly <code>none</code>) in tree <code>t1</code> such that a <em>subtree</em> for vertex <code>v</code> (possibly empty) in <code>t1</code> equals <code>t2</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>t1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": {
                "value": -1,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}
</code></pre>
<p>and</p>
<pre><code>t2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}
</code></pre>
<p>the output should be <code>isSubtree(t1, t2) = true</code>.</p>
<p>This is what these trees look like:</p>
<pre><code>      t1:             t2:
       5              10
      / \            /  \
    10   7          4    6
   /  \            / \    \
  4    6          1   2   -1
 / \    \
1   2   -1
</code></pre>
<p>As you can see, <code>t2</code> is a <em>subtree</em> of <code>t1</code> (the vertex in <code>t1</code> with value <code>10</code>).</p>
</li>
<li>
<p>For</p>
<pre><code>t1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": {
                "value": -1,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
}
</code></pre>
<p>and</p>
<pre><code>t2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
}
</code></pre>
<p>the output should be <code>isSubtree(t1, t2) = false</code>.</p>
<p>This is what these trees look like:</p>
<pre><code>        t1:            t2:
         5             10
       /   \          /  \
     10     7        4    6
   /    \           / \    \
  4     6          1   2   -1
 / \   / 
1   2 -1
</code></pre>
<p>As you can see, there is no vertex <code>v</code> such that the subtree of <code>t1</code> for vertex <code>v</code> equals <code>t2</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>t1 = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}
</code></pre>
<p>and</p>
<pre><code>t2 = {
    "value": 2,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": null
}
</code></pre>
<p>the output should be <code>isSubtree(t1, t2) = false</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] tree.integer t1</strong></p>
<p>A binary tree of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ tree size ≤ 6 · 10<sup>4</sup></code>,<br>
<code>-1000 ≤ node value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] tree.integer t2</strong></p>
<p>Another binary tree of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ tree size ≤ 6 · 10<sup>4</sup></code>,<br>
<code>-1000 ≤ node value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if <code>t2</code> is a subtree of <code>t1</code>, otherwise return <code>false</code>.</p>
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
