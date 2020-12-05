# Task - Late Ride

[Do it yourself here!](https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L)

<p>One night you go for a ride on your motorcycle. At <code>00:00</code> you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.</p>
<p>When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that <code>n</code> minutes have passed since <code>00:00</code>.</p>
<p>Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format <code>hh:mm</code> would show.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>n = 240</code>, the output should be<br>
<code>lateRide(n) = 4</code>.</p>
<p>Since <code>240</code> minutes have passed, the current time is <code>04:00</code>. The digits sum up to <code>0 + 4 + 0 + 0 = 4</code>, which is the answer.</p>
</li>
<li>
<p>For <code>n = 808</code>, the output should be<br>
<code>lateRide(n) = 14</code>.</p>
<p><code>808</code> minutes mean that it's <code>13:28</code> now, so the answer should be <code>1 + 3 + 2 + 8 = 14</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 16 seconds (clj)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>The duration of your ride, in minutes. It is guaranteed that you've been riding for less than a day (24 hours).</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ n &lt; 60 · 24</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The sum of the digits the digital timer would show.</p>
</li>
</ul>
<p><strong>[Clojure] Syntax Tips</strong></p>
<pre><code class="language-clojure"><span class="hljs-comment">; Prints help message to the console</span>
<span class="hljs-comment">; Returns a string</span>
(<span class="hljs-keyword">defn</span> <span class="hljs-title">helloWorld</span> [name] 
  (<span class="hljs-name">println</span> <span class="hljs-string">"This prints to the console when you Run Tests"</span>)
  (<span class="hljs-name"><span class="hljs-builtin-name">apply</span></span> str (<span class="hljs-name"><span class="hljs-builtin-name">concat</span></span> <span class="hljs-string">"Hello, "</span> name)))
</code></pre>
