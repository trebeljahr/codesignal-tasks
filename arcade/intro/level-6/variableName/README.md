# Task - variableName

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno)

<p>Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.</p>
<p>Check if the given string is a correct variable name.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>name = "var_1__Int"</code>, the output should be<br>
<code>variableName(name) = true</code>;</li>
<li>For <code>name = "qq-q"</code>, the output should be<br>
<code>variableName(name) = false</code>;</li>
<li>For <code>name = "2w2"</code>, the output should be<br>
<code>variableName(name) = false</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (py3)</strong></p>
</li>
<li>
<p><strong>[input] string name</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ name.length ≤ 10</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if <code>name</code> is a correct variable name, <code>false</code> otherwise.</p>
</li>
</ul>
<p><strong>[Python 3] Syntax Tips</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># Prints help message to the console</span>
<span class="hljs-comment"># Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">helloWorld</span><span class="hljs-params">(name)</span>:</span>
    print(<span class="hljs-string">"This prints to the console when you Run Tests"</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name

</code></pre>
