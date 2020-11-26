# Task - mergeTwoLinkedLists

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/6rE3maCQwrZS3Mm2H)

<p><em>Note: Your solution should have <code>O(l1.length + l2.length)</code> time complexity, since this is what you will be asked to accomplish in an interview.</em></p>
<p>Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>l1 = [1, 2, 3]</code> and <code>l2 = [4, 5, 6]</code>, the output should be<br>
<code>mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6]</code>;</li>
<li>For <code>l1 = [1, 1, 2, 4]</code> and <code>l2 = [0, 3, 5]</code>, the output should be<br>
<code>mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5]</code>.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (hs)</strong></p>
</li>
<li>
<p><strong>[input] linkedlist.integer l1</strong></p>
<p>A singly linked list of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ list size ≤ 10<sup>4</sup></code>,<br>
<code>-10<sup>9</sup> ≤ element value ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] linkedlist.integer l2</strong></p>
<p>A singly linked list of integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ list size ≤ 10<sup>4</sup></code>,<br>
<code>-10<sup>9</sup> ≤ element value ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] linkedlist.integer</strong></p>
<p>A list that contains elements from both <code>l1</code> and <code>l2</code>, sorted in non-decreasing order.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
