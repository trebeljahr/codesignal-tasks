# Task - firstNotRepeatingCharacter

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC)

<p>Given a string <code>s</code> consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return <code>'_'</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>s = "abacabad"</code>, the output should be<br>
<code>firstNotRepeatingCharacter(s) = 'c'</code>.</p>
<p>There are <code>2</code> non-repeating characters in the string: <code>'c'</code> and <code>'d'</code>. Return <code>c</code> since it appears in the string first.</p>
</li>
<li>
<p>For <code>s = "abacabaabacaba"</code>, the output should be<br>
<code>firstNotRepeatingCharacter(s) = '_'</code>.</p>
<p>There are no characters in this string that do not repeat.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string s</strong></p>
<p>A string that contains only lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ s.length ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[output] char</strong></p>
<p>The first non-repeating character in <code>s</code>, or <code>'_'</code> if there are no characters that do not repeat.</p>
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
