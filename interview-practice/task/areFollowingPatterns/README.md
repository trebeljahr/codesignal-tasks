# Task - areFollowingPatterns

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/3PcnSKuRkqzp8F6BN)

<p>Given an array <code>strings</code>, determine whether it follows the sequence given in the <code>patterns</code> array. In other words, there should be no <code>i</code> and <code>j</code> for which <code>strings[i] = strings[j]</code> and <code>patterns[i] ≠ patterns[j]</code> or for which <code>strings[i] ≠ strings[j]</code> and <code>patterns[i] = patterns[j]</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>strings = ["cat", "dog", "dog"]</code> and <code>patterns = ["a", "b", "b"]</code>, the output should be<br>
<code>areFollowingPatterns(strings, patterns) = true</code>;</li>
<li>For <code>strings = ["cat", "dog", "doggy"]</code> and <code>patterns = ["a", "b", "b"]</code>, the output should be<br>
<code>areFollowingPatterns(strings, patterns) = false</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string strings</strong></p>
<p>An array of strings, each containing only lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ strings.length ≤ 10<sup>5</sup></code>,<br>
<code>1 ≤ strings[i].length ≤ 10</code>.</p>
</li>
<li>
<p><strong>[input] array.string patterns</strong></p>
<p>An array of pattern strings, each containing only lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>patterns.length = strings.length</code>,<br>
<code>1 ≤ patterns[i].length ≤ 10</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if <code>strings</code> follows <code>patterns</code> and <code>false</code> otherwise.</p>
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
