# Task - findSubstrings

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/Ki9zRh5bfRhH6oBau)

<p>You have two arrays of strings, <code>words</code> and <code>parts</code>. Return an array that contains the strings from <code>words</code>, modified so that any occurrences of the substrings from <code>parts</code> are surrounded by square brackets <code>[]</code>, following these guidelines:</p>
<p>If several <code>parts</code> substrings occur in one string in <code>words</code>, choose the longest one. If there is still more than one such part, then choose the one that appears first in the string.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>words = ["Apple", "Melon", "Orange", "Watermelon"]</code> and <code>parts = ["a", "mel", "lon", "el", "An"]</code>, the output should be<br>
<code>findSubstrings(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"]</code>.</p>
<p>While <code>"Watermelon"</code> contains three substrings from the <code>parts</code> array, <code>"a"</code>, <code>"mel"</code>, and <code>"lon"</code>, <code>"mel"</code> is the longest substring that appears first in the string.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 5 seconds (ts)</strong></p>
</li>
<li>
<p><strong>[input] array.string words</strong></p>
<p>An array of strings consisting only of uppercase and lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ words.length ≤ 10<sup>4</sup></code>,<br>
<code>1 ≤ words[i].length ≤ 30</code>.</p>
</li>
<li>
<p><strong>[input] array.string parts</strong></p>
<p>An array of strings consisting only of uppercase and lower English letters. Each string is <em>no more than 5 characters in length</em>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ parts.length ≤ 10<sup>5</sup></code>,<br>
<code>1 ≤ parts[i].length ≤ 5</code>,<br>
<code>parts[i] ≠ parts[j]</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
</li>
</ul>
<p><strong>[TypeScript] Syntax Tips</strong></p>
<pre><code class="language-typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params">name: <span class="hljs-built_in">string</span></span>): <span class="hljs-title">string</span> </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
