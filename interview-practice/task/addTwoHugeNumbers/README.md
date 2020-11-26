# Task - addTwoHugeNumbers

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/RvDFbsNC3Xn7pnQfH)

<p>You're given <code>2</code> huge integers represented by linked lists. Each linked list element is a number from <code>0</code> to <code>9999</code> that represents a number with exactly <code>4</code> digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = [9876, 5432, 1999]</code> and <code>b = [1, 8001]</code>, the output should be<br>
<code>addTwoHugeNumbers(a, b) = [9876, 5434, 0]</code>.</p>
<p>Explanation: <code>987654321999 + 18001 = 987654340000</code>.</p>
</li>
<li>
<p>For <code>a = [123, 4, 5]</code> and <code>b = [100, 100, 100]</code>, the output should be<br>
<code>addTwoHugeNumbers(a, b) = [223, 104, 105]</code>.</p>
<p>Explanation: <code>12300040005 + 10001000100 = 22301040105</code>.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (hs)</strong></p>
</li>
<li>
<p><strong>[input] linkedlist.integer a</strong></p>
<p>The first number, without its leading zeros.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ a size ≤ 10<sup>4</sup></code>,<br>
<code>0 ≤ element value ≤ 9999</code>.</p>
</li>
<li>
<p><strong>[input] linkedlist.integer b</strong></p>
<p>The second number, without its leading zeros.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ b size ≤ 10<sup>4</sup></code>,<br>
<code>0 ≤ element value ≤ 9999</code>.</p>
</li>
<li>
<p><strong>[output] linkedlist.integer</strong></p>
<p>The result of adding <code>a</code> and <code>b</code> together, returned without leading zeros in the same format.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
