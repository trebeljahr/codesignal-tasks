# Task - isCryptSolution

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H)

<p>A <em>cryptarithm</em> is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.</p>
<p>You have an array of strings <code>crypt</code>, the <em>cryptarithm</em>, and an an array containing the mapping of letters and digits, <code>solution</code>. The array <code>crypt</code> will contain three non-empty strings that follow the structure: <code>[word1, word2, word3]</code>, which should be interpreted as the <code>word1 + word2 = word3</code> cryptarithm.</p>
<p>If <code>crypt</code>, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in <code>solution</code>, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is <code>true</code>. If it does not become a valid arithmetic solution, the answer is <code>false</code>.</p>
<p><strong>Note</strong> that number <code>0</code> doesn't contain leading zeroes (while for example <code>00</code> or <code>0123</code> do).</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>crypt = ["SEND", "MORE", "MONEY"]</code> and</p>
<pre><code>solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
</code></pre>
<p>the output should be<br>
<code>isCryptSolution(crypt, solution) = true</code>.</p>
<p>When you decrypt <code>"SEND"</code>, <code>"MORE"</code>, and <code>"MONEY"</code> using the mapping given in <code>crypt</code>, you get <code>9567 + 1085 = 10652</code> which is correct and a valid arithmetic equation.</p>
<p>For <code>crypt = ["TEN", "TWO", "ONE"]</code> and</p>
<pre><code>solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
</code></pre>
<p>the output should be<br>
<code>isCryptSolution(crypt, solution) = false</code>.</p>
<p>Even though <code>054 + 091 = 145</code>, <code>054</code> and <code>091</code> both contain leading zeroes, meaning that this is not a valid solution.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (go)</strong></p>
</li>
<li>
<p><strong>[input] array.string crypt</strong></p>
<p>An array of three non-empty strings containing only uppercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>crypt.length = 3</code>,<br>
<code>1 ≤ crypt[i].length ≤ 14</code>.</p>
</li>
<li>
<p><strong>[input] array.array.char solution</strong></p>
<p>An array consisting of pairs of characters that represent the correspondence between letters and numbers in the cryptarithm. The first character in the pair is an uppercase English letter, and the second one is a digit in the range from <code>0</code> to <code>9</code>.</p>
<p>It is guaranteed that <code>solution</code> only contains entries for the letters present in <code>crypt</code> and that different letters have different values.</p>
<p><em>Guaranteed constraints:</em><br>
<code>solution[i].length = 2</code>,<br>
<code>'A' ≤ solution[i][0] ≤ 'Z'</code>,<br>
<code>'0' ≤ solution[i][1] ≤ '9'</code>,<br>
<code>solution[i][0] ≠ solution[j][0], i ≠ j</code>,<br>
<code>solution[i][1] ≠ solution[j][1], i ≠ j</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p>Return <code>true</code> if the <code>solution</code> represents the correct solution to the cryptarithm <code>crypt</code>, otherwise return <code>false</code>.</p>
</li>
</ul>
<p><strong>[Go] Syntax Tips</strong></p>
<pre><code class="language-go"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-title">helloWorld</span><span class="hljs-params">(name <span class="hljs-keyword">string</span>)</span> <span class="hljs-title">string</span></span> {
    fmt.Printf(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}

</code></pre>
