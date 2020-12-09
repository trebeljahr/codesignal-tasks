# Task - simplifyPath

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/aRwxhGcmvhf6vKPCp)

<p>Given an absolute file path (Unix-style), shorten it to the format <code>/&lt;dir<sub>1</sub>&gt;/&lt;dir<sub>2</sub>&gt;/&lt;dir<sub>3</sub>&gt;/...</code>.</p>
<p>Here is some info on Unix file system paths:</p>
<ul>
<li><code>/</code> is the root directory; the path should always start with it even if it isn't there in the given <code>path</code>;</li>
<li><code>/</code> is also used as a directory separator; for example, <code>/code/fights</code> denotes a <code>fights</code> subfolder in the <code>code</code> folder in the root directory;
<ul>
<li>this also means that <code>//</code> stands for "change the current directory to the current directory"</li>
</ul>
</li>
<li><code>.</code> is used to mark the current directory;</li>
<li><code>..</code> is used to mark the parent directory; if the current directory is root already, <code>..</code> does nothing.</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<p>For <code>path = "/home/a/./x/../b//c/"</code>, the output should be<br>
<code>simplifyPath(path) = "/home/a/b/c"</code>.</p>
<p>Here is how this path was simplified:<br>
* <code>/./</code> means "move to the current directory" and can be replaced with a single <code>/</code>;<br>
* <code>/x/../</code> means "move into directory <code>x</code> and then return back to the parent directory", so it can replaced with a single <code>/</code>;<br>
* <code>//</code> means "move to the current directory" and can be replaced with a single <code>/</code>.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (dart)</strong></p>
</li>
<li>
<p><strong>[input] string path</strong></p>
<p>A line containing a path presented in Unix style format. All directories in the path are guaranteed to consist only of English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ path.length ≤ 5 · 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>The simplified path.</p>
</li>
</ul>
<p><strong>[Dart] Syntax Tips</strong></p>
<pre><code class="language-dart"><span class="hljs-comment">// Prints help message to the console</span>
<span class="hljs-comment">// Returns a string</span>
<span class="hljs-built_in">String</span> helloWorld(<span class="hljs-built_in">String</span> name) {
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"This prints to the console when you Run Tests"</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name;
}
</code></pre>
