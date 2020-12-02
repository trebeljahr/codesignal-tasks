# Task - containsCloseNums

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/njfXsvjRthFKmMwLC)

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, determine whether there are two distinct indices <code>i</code> and <code>j</code> in the array where <code>nums[i] = nums[j]</code> and the absolute difference between <code>i</code> and <code>j</code> is less than or equal to <code>k</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>nums = [0, 1, 2, 3, 5, 2]</code> and <code>k = 3</code>, the output should be<br>
<code>containsCloseNums(nums, k) = true</code>.</p>
<p>There are two <code>2</code>s in <code>nums</code>, and the absolute difference between their positions is exactly <code>3</code>.</p>
</li>
<li>
<p>For <code>nums = [0, 1, 2, 3, 5, 2]</code> and <code>k = 2</code>, the output should be<br>
<code>containsCloseNums(nums, k) = false</code>.</p>
<p>The absolute difference between the positions of the two <code>2</code>s is <code>3</code>, which is more than <code>k</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer nums</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ nums.length ≤ 55000</code>,<br>
<code>-2<sup>31</sup> - 1 ≤ nums[i] ≤ 2<sup>31</sup> - 1</code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ k ≤ 35000</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
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
