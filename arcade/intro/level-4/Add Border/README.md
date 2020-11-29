# Task - Add Border

[Do it yourself here!](https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN)

<p>Given a rectangular matrix of characters, add a border of asterisks(<code>*</code>) to it.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For</p>
<pre><code>picture = ["abc",
           "ded"]
</code></pre>
<p>the output should be</p>
<pre><code>addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
</code></pre>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (rb)</strong></p>
</li>
<li>
<p><strong>[input] array.string picture</strong></p>
<p>A non-empty array of non-empty equal-length strings.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ picture.length ≤ 100</code>,<br>
<code>1 ≤ picture[i].length ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<p>The same matrix of characters, framed with a border of asterisks of width <code>1</code>.</p>
</li>
</ul>
<p><strong>[Ruby] Syntax Tips</strong></p>
<pre><code class="language-ruby"><span class="hljs-comment"># Prints help message to the console</span>
<span class="hljs-comment"># Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">helloWorld</span><span class="hljs-params">(name)</span></span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name
<span class="hljs-keyword">end</span>

</code></pre>
