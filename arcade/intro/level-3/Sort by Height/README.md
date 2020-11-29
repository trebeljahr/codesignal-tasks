# Task - Sort by Height

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM)

<p>Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>a = [-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be<br>
<code>sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 3 seconds (cs)</strong></p>
</li>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>If <code>a[i] = -1</code>, then the <code>i<sup>th</sup></code> position is occupied by a tree. Otherwise <code>a[i]</code> is the height of a person standing in the <code>i<sup>th</sup></code> position.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a.length ≤ 1000</code>,<br>
<code>-1 ≤ a[i] ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<p>Sorted array <code>a</code> with all the trees untouched.</p>
</li>
</ul>
<p><strong>[C#] Syntax Tips</strong></p>
<pre><code class="language-cs"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">string</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> name</span>)</span> {
    Console.Write(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
