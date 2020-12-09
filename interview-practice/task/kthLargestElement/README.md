# Task - kthLargestElement

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/BG94ZFECSNo6Kv7XW)

<p><em>Note: Avoid using built-in <code>std::nth_element</code> (or analogous built-in functions in languages other than C++) when solving this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.</em></p>
<p>Find the <code>k<sup>th</sup></code> largest element in an unsorted array. This will be the <code>k<sup>th</sup></code> largest element in sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>nums = [7, 6, 5, 4, 3, 2, 1]</code> and <code>k = 2</code>, the output should be<br>
<code>kthLargestElement(nums, k) = 6</code>;</li>
<li>For <code>nums = [99, 99]</code> and <code>k = 1</code>, the output should be<br>
<code>kthLargestElement(nums, k) = 99</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (py3)</strong></p>
</li>
<li>
<p><strong>[input] array.integer nums</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ nums.length ≤ 10<sup>5</sup></code>,<br>
<code>-10<sup>5</sup> ≤ nums[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ nums.length</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
</li>
</ul>
<p><strong>[Python 3] Syntax Tips</strong></p>
<pre><code class="language-python"><span class="hljs-comment"># Prints help message to the console</span>
<span class="hljs-comment"># Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">helloWorld</span>(<span class="hljs-params">name</span>):</span>
    print(<span class="hljs-string">"This prints to the console when you Run Tests"</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name

</code></pre>
