# Task - palindromeRearranging

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico)

<p>Given a string, find out if its characters can be rearranged to form a <a href="keyword://palindrome" target="_blank">palindrome</a>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>inputString = "aabb"</code>, the output should be<br>
<code>palindromeRearranging(inputString) = true</code>.</p>
<p>We can rearrange <code>"aabb"</code> to make <code>"abba"</code>, which is a palindrome.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string inputString</strong></p>
<p>A string consisting of lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ inputString.length ≤ 50</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if the characters of the <code>inputString</code> can be rearranged to form a palindrome, <code>false</code> otherwise.</p>
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
