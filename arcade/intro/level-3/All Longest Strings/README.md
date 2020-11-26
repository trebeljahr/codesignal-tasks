# Task - All Longest Strings

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL)

<p>Given an array of strings, return another array containing all of its longest strings.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>inputArray = ["aba", "aa", "ad", "vcd", "aba"]</code>, the output should be<br>
<code>allLongestStrings(inputArray) = ["aba", "vcd", "aba"]</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 0.5 seconds (cpp)</strong></p>
</li>
<li>
<p><strong>[input] array.string inputArray</strong></p>
<p>A non-empty array.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ inputArray.length ≤ 10</code>,<br>
<code>1 ≤ inputArray[i].length ≤ 10</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<p>Array of the longest strings, stored in the same order as in the <code>inputArray</code>.</p>
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
