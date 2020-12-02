# Task - swapLexOrder

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/5vXzdE9yzjsoMZ9sk)

<p>Given a string <code>str</code> and array of <code>pairs</code> that indicates which indices in the string can be swapped, return the <a href="keyword://lexicographical-order-for-strings" target="_blank">lexicographically largest</a> string that results from doing the allowed swaps. You can swap indices any number of times.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>str = "abdc"</code> and <code>pairs = [[1, 4], [3, 4]]</code>, the output should be<br>
<code>swapLexOrder(str, pairs) = "dbca"</code>.</p>
<p>By swapping the given indices, you get the strings: <code>"cbda"</code>, <code>"cbad"</code>, <code>"dbac"</code>, <code>"dbca"</code>. The lexicographically largest string in this list is <code>"dbca"</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string str</strong></p>
<p>A string consisting only of lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ str.length ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer pairs</strong></p>
<p>An array containing pairs of indices that can be swapped in <code>str</code> (1-based). This means that for each <code>pairs[i]</code>, you can swap elements in <code>str</code> that have the indices <code>pairs[i][0]</code> and <code>pairs[i][1]</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ pairs.length ≤ 5000</code>,<br>
<code>pairs[i].length = 2</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
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
