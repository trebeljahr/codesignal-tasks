# Task - reverseNodesInKGroups

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/XP2Wn9pwZW6hvqH67)

<p><em>Note: Your solution should have <code>O(n)</code> time complexity, where <code>n</code> is the number of elements in <code>l</code>, and <code>O(1)</code> additional space complexity, since this is what you would be asked to accomplish in an interview.</em></p>
<p>Given a linked list <code>l</code>, reverse its nodes <code>k</code> at a time and return the modified list. <code>k</code> is a positive integer that is less than or equal to the length of <code>l</code>. If the number of nodes in the linked list is not a multiple of <code>k</code>, then the nodes that are left out at the end should remain as-is.</p>
<p>You may not alter the values in the nodes - only the nodes themselves can be changed.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>l = [1, 2, 3, 4, 5]</code> and <code>k = 2</code>, the output should be<br>
<code>reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5]</code>;</li>
<li>For <code>l = [1, 2, 3, 4, 5]</code> and <code>k = 1</code>, the output should be<br>
<code>reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5]</code>;</li>
<li>For <code>l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</code> and <code>k = 3</code>, the output should be<br>
<code>reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11]</code>.</li>
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
<code>1 ≤ list size ≤ 10<sup>4</sup></code>,<br>
<code>-10<sup>9 ≤ element value ≤ 10<sup>9</sup></sup></code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>The size of the groups of nodes that need to be reversed.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ l size</code>.</p>
</li>
<li>
<p><strong>[output] linkedlist.integer</strong></p>
<p>The initial list, with reversed groups of <code>k</code> elements.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
