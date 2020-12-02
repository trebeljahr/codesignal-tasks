# Task - groupingDishes

[Do it yourself here!](https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo)

<p>You are given a list <code>dishes</code>, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least <code>2</code> such dishes).</p>
<p>Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted <a href="keyword://lexicographical-order-for-strings" target="_blank">lexicographically</a>, and the result array should be sorted <a href="keyword://lexicographical-order-for-strings" target="_blank">lexicographically</a> by the names of the ingredients.</p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For<pre><code>  dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
</code></pre>
the output should be<pre><code>  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]
</code></pre>
</li>
<li>For<pre><code>  dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
            ["Chicken Curry", "Chicken", "Curry Sauce"],
            ["Fried Rice", "Rice", "Onions", "Nuts"],
            ["Salad", "Spinach", "Nuts"],
            ["Sandwich", "Cheese", "Bread"],
            ["Quesadilla", "Chicken", "Cheese"]]
</code></pre>
the output should be<pre><code>  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Chicken", "Chicken Curry", "Quesadilla"],
                            ["Nuts", "Fried Rice", "Salad"],
                            ["Onions", "Fried Rice", "Pasta"]]
</code></pre>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.string dishes</strong></p>
<p>An array of dishes, where <code>dishes[i]</code> for each valid <code>i</code> contains information about the <code>i<sup>th</sup></code> dish: <code>dishes[i][0]</code> is the name of the dish, and all the elements after it are the ingredients of that dish. Both the dish name and the ingredient names consist of English letters and spaces. It is guaranteed that all dish names are different. It is also guaranteed that the ingredient names for any one dish are also pairwise distinct.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ dishes.length ≤ 500</code>,<br>
<code>2 ≤ dishes[i].length ≤ 10</code>,<br>
<code>1 ≤ dishes[i][j].length ≤ 50</code>.</p>
</li>
<li>
<p><strong>[output] array.array.string</strong></p>
<p>The array containing the grouped dishes.</p>
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
