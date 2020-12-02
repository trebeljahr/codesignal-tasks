# Task - possibleSums

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/rMe9ypPJkXgk3MHhZ)

<p>You have a collection of coins, and you know the values of the <code>coins</code> and the <code>quantity</code> of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>coins = [10, 50, 100]</code> and <code>quantity = [1, 2, 1]</code>, the output should be<br>
<code>possibleSums(coins, quantity) = 9</code>.</p>
<p>Here are all the possible sums:</p>
<ul>
<li><code>50                 = 50</code>;</li>
<li><code>10 + 50            = 60</code>;</li>
<li><code>50 + 100           = 150</code>;</li>
<li><code>10 + 50 + 100      = 160</code>;</li>
<li><code>50 + 50            = 100</code>;</li>
<li><code>10 + 50 + 50       = 110</code>;</li>
<li><code>50 + 50 + 100      = 200</code>;</li>
<li><code>10 + 50 + 50 + 100 = 210</code>;</li>
<li><code>10                 = 10</code>;</li>
<li><code>100                = 100</code>;</li>
<li><code>10 + 100           = 110</code>.</li>
</ul>
<p>As you can see, there are <code>9</code> distinct sums that can be created from non-empty groupings of your coins.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer coins</strong></p>
<p>An array containing the values of the coins in your collection.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ coins.length ≤ 20</code>,<br>
<code>1 ≤ coins[i] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer quantity</strong></p>
<p>An array containing the quantity of each type of coin in your collection. <code>quantity[i]</code> indicates the number of coins that have a value of <code>coins[i]</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>quantity.length = coins.length</code>,<br>
<code>1 ≤ quantity[i] ≤ 10<sup>5</sup></code>,<br>
<code>(quantity[0] + 1) * (quantity[1] + 1) * ... * (quantity[quantity.length - 1] + 1) &lt;= 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of different possible sums that can be created from non-empty groupings of your coins.</p>
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
