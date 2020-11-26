# Task - removeKFromList

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm)

<p><em>Note: Try to solve this task in <code>O(n)</code> time using <code>O(1)</code> additional space, where <code>n</code> is the number of elements in the list, since this is what you'll be asked to do during an interview.</em></p>
<p>Given a singly linked list of integers <code>l</code> and an integer <code>k</code>, remove all elements from list <code>l</code> that have a value equal to <code>k</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>l = [3, 1, 2, 3, 4, 5]</code> and <code>k = 3</code>, the output should be<br>
<code>removeKFromList(l, k) = [1, 2, 4, 5]</code>;</li>
<li>For <code>l = [1, 2, 3, 4, 5, 6, 7]</code> and <code>k = 10</code>, the output should be<br>
<code>removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7]</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] linkedlist.integer l</strong></p>
<p>A singly linked list of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ list size ≤ 10<sup>5</sup></code>,<br>
<code>-1000 ≤ element value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>An integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>-1000 ≤ k ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] linkedlist.integer</strong></p>
<p>Return <code>l</code> with all the values equal to <code>k</code> removed.</p>
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
