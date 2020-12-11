# Task - Extra Number

[Do it yourself here!](https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/sgDWKCFQHHi5D3Szj)

<p>You're given three integers, <code>a</code>, <code>b</code> and <code>c</code>. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>a = 2</code>, <code>b = 7</code>, and <code>c = 2</code>, the output should be<br>
<code>extraNumber(a, b, c) = 7</code>.</p>
<p>The two equal numbers are <code>a</code> and <code>c</code>. The third number (<code>b</code>) equals <code>7</code>, which is the answer.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (hs)</strong></p>
</li>
<li>
<p><strong>[input] integer a</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer b</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ b ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer c</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ c ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
