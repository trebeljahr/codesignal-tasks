# Task - findProfession

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/FwAR7koSB3uYYsqDp)

<p>Consider a special family of Engineers and Doctors. This family has the following rules:</p>
<ul>
<li>Everybody has two children.</li>
<li>The first child of an Engineer is an Engineer and the second child is a Doctor.</li>
<li>The first child of a Doctor is a Doctor and the second child is an Engineer.</li>
<li>All generations of Doctors and Engineers start with an Engineer.</li>
</ul>
<p>We can represent the situation using this diagram:</p>
<pre><code>                E
           /         \
          E           D
        /   \        /  \
       E     D      D    E
      / \   / \    / \   / \
     E   D D   E  D   E E   D
</code></pre>
<p>Given the level and position of a person in the ancestor tree above, find the profession of the person.<br>
<strong>Note</strong>: in this tree first child is considered as left child, second - as right.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>level = 3</code> and <code>pos = 3</code>, the output should be<br>
<code>findProfession(level, pos) = "Doctor"</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer level</strong></p>
<p>The level of a person in the ancestor tree, <code>1</code>-based.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ level ≤ 30</code>.</p>
</li>
<li>
<p><strong>[input] integer pos</strong></p>
<p>The position of a person in the given level of ancestor tree, <code>1</code>-based, counting from left to right.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ pos ≤ 2<sup>(level - 1)</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>Return <code>Engineer</code> or <code>Doctor</code>.</p>
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
