# Task - Candies

[Do it yourself here!](https://app.codesignal.com/arcade/code-arcade/intro-gates/DdNKFA3XCX6XN7bNz)

<p><code>n</code> children have got <code>m</code> pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>n = 3</code> and <code>m = 10</code>, the output should be<br>
<code>candies(n, m) = 9</code>.</p>
<p>Each child will eat <code>3</code> pieces. So the answer is <code>9</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 0.5 seconds (cpp)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>The number of children.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ 10</code>.</p>
</li>
<li>
<p><strong>[input] integer m</strong></p>
<p>The number of pieces of candy.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ m ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The total number of pieces of candy the children will eat provided they eat as much as they can and all children eat the same amount.</p>
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
