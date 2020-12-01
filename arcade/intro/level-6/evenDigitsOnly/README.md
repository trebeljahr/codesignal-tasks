# Task - evenDigitsOnly

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW)

<p>Check if all digits of the given integer are even.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>n = 248622</code>, the output should be<br>
<code>evenDigitsOnly(n) = true</code>;</li>
<li>For <code>n = 642386</code>, the output should be<br>
<code>evenDigitsOnly(n) = false</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 0.5 seconds (cpp)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if all digits of <code>n</code> are even, <code>false</code> otherwise.</p>
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
