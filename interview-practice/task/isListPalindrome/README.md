# Task - isListPalindrome

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/HmNvEkfFShPhREMn4)

<p><em>Note: Try to solve this task in <code>O(n)</code> time using <code>O(1)</code> additional space, where <code>n</code> is the number of elements in <code>l</code>, since this is what you'll be asked to do during an interview.</em></p>
<p>Given a singly linked list of integers, determine whether or not it's a <a href="keyword://palindrome" target="_blank">palindrome</a>.</p>
<p><em>Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node <code>l</code> of the linked list</em></p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>l = [0, 1, 0]</code>, the output should be<br>
<code>isListPalindrome(l) = true</code>;</p>
</li>
<li>
<p>For <code>l = [1, 2, 2, 3]</code>, the output should be<br>
<code>isListPalindrome(l) = false</code>.</p>
</li>
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
<code>0 ≤ list size ≤ 5 · 10<sup>5</sup></code>,<br>
<code>-10<sup>9</sup> ≤ element value ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if <code>l</code> is a palindrome, otherwise return <code>false</code>.</p>
</li>
</ul>
<p><strong>[Haskell] Syntax Tips</strong></p>
<pre><code class="language-haskell"><span class="hljs-comment">-- Prints help message to the console</span>
<span class="hljs-comment">-- Returns a string</span>
<span class="hljs-title">helloWorld</span> name = unsafePerformIO $ <span class="hljs-keyword">do</span>
    print <span class="hljs-string">"This prints to the console when you Run Tests"</span>
    return $ <span class="hljs-string">"Hello, "</span> ++ name

</code></pre>
