# Task - isLucky

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ)

<p>Ticket numbers usually consist of an even number of digits. A ticket number is considered <em>lucky</em> if the sum of the first half of the digits is equal to the sum of the second half.</p>
<p>Given a ticket number <code>n</code>, determine if it's <em>lucky</em> or not.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>n = 1230</code>, the output should be<br>
<code>isLucky(n) = true</code>;</li>
<li>For <code>n = 239017</code>, the output should be<br>
<code>isLucky(n) = false</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 0.5 seconds (cpp)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>A ticket number represented as a positive integer with an even number of digits.</p>
<p><em>Guaranteed constraints:</em><br>
<code>10 ≤ n &lt; 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if <code>n</code> is a lucky ticket number, <code>false</code> otherwise.</p>
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
