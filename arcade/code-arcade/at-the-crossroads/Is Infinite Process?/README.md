# Task - Is Infinite Process?

[Do it yourself here!](https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc)

<p>Given integers <code>a</code> and <code>b</code>, determine whether the following pseudocode results in an infinite loop</p>
<pre><code>while a is not equal to b do
  increase a by 1
  decrease b by 1
</code></pre>
<p>Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>a = 2</code> and <code>b = 6</code>, the output should be<br>
<code>isInfiniteProcess(a, b) = false</code>;</li>
<li>For <code>a = 2</code> and <code>b = 3</code>, the output should be<br>
<code>isInfiniteProcess(a, b) = true</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (hs)</strong></p>
</li>
<li>
<p><strong>[input] integer a</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ a ≤ 20</code>.</p>
</li>
<li>
<p><strong>[input] integer b</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ b ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if the pseudocode will never stop, <code>false</code> otherwise.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
