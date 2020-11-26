# Task - firstDuplicate

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q)

<p>Given an array <code>a</code> that contains only numbers in the range from <code>1</code> to <code>a.length</code>, find the first duplicate <strong>number</strong> for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the <strong>number</strong> for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return <code>-1</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [2, 1, 3, 5, 3, 2]</code>, the output should be <code>firstDuplicate(a) = 3</code>.</p>
<p>There are <code>2</code> duplicates: numbers <code>2</code> and <code>3</code>. The second occurrence of <code>3</code> has a smaller index than the second occurrence of <code>2</code> does, so the answer is <code>3</code>.</p>
</li>
<li>
<p>For <code>a = [2, 2]</code>, the output should be <code>firstDuplicate(a) = 2</code>;</p>
</li>
<li>
<p>For <code>a = [2, 4, 3, 5, 1]</code>, the output should be <code>firstDuplicate(a) = -1</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 10<sup>5</sup></code>,<br>
<code>1 ≤ a[i] ≤ a.length</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The element in <code>a</code> that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return <code>-1</code>.</p>
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
