# Task - rearrangeLastN

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/5vcioHMkhGqkaQQYt)

<p><em>Note: Try to solve this task in <code>O(list size)</code> time using <code>O(1)</code> additional space, since this is what you'll be asked during an interview.</em></p>
<p>Given a singly linked list of integers <code>l</code> and a non-negative integer <code>n</code>, move the last <code>n</code> list nodes to the beginning of the linked list.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>l = [1, 2, 3, 4, 5]</code> and <code>n = 3</code>, the output should be<br>
<code>rearrangeLastN(l, n) = [3, 4, 5, 1, 2]</code>;</li>
<li>For <code>l = [1, 2, 3, 4, 5, 6, 7]</code> and <code>n = 1</code>, the output should be<br>
<code>rearrangeLastN(l, n) = [7, 1, 2, 3, 4, 5, 6]</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (hs)</strong></p>
</li>
<li>
<p><strong>[input] linkedlist.integer l</strong></p>
<p>A singly linked list of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ list size ≤ 10<sup>5</sup></code>,<br>
<code>-1000 ≤ element value ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>A non-negative integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ n ≤ list size</code>.</p>
</li>
<li>
<p><strong>[output] linkedlist.integer</strong></p>
<p>Return <code>l</code> with the <code>n</code> last elements moved to the beginning.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
