<div align="center">

<h1>🚀 Dev Stack</h1>

<h3>Build Your Ideal Development Stack</h3>

<p>
Dev Stack is a simple web application where users can explore different technologies and build their own development stack.
</p>

</div>

<hr>

<h2>🛠️ Technologies Used</h2>

<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
  <li>React Icons</li>
  <li>React Hot Toast</li>
  <li>Vite</li>
</ul>

<hr>

<h2>✨ Features</h2>

<h3>1. Explore Technologies</h3>

<p>
Users can explore different technologies with their name, description, category, difficulty, rating, and badge.
</p>

<h3>2. Build Your Stack</h3>

<p>
Users can add technologies to <strong>Your Stack</strong> and see all selected technologies in one place.
</p>

<h3>3. Add and Remove Technologies</h3>

<p>
Users can add technologies, remove a single technology, or remove all selected technologies.
</p>

<hr>

<h2>📚 React Questions & Answers</h2>

<h3>1. What is JSX, and why is it used in React?</h3>

<p> JSX is a way to write HTML code inside JavaScript or TypeScript. It makes React code easier to write and understand. </p>

<h3>2. What is the difference between props and state?</h3>

<p>
<strong>Props</strong> are used to send data from a parent component to a child component.
</p>

<p>
<strong>State</strong> is used to store data that can change in a component.
</p>

<h3>3. What does the useState hook do, and where did you use it in this project?</h3>

<p>
<code>useState</code> is used to store data that can change.
I used it in the <code>Technology</code> component to store the selected technologies.
</p>

<pre>
const [selectedStack, setSelectedStack] = useState<IdataType[]>([]);
</pre>

<p>
<strong>selectedStack</strong> stores the selected technologies, and
<strong>setSelectedStack</strong> updates them.
</p>

<h3>4. What does the useEffect hook do, and why did you need it to load the JSON data?</h3>

<p>
<code>useEffect</code> is used to run code when a component loads or when some data changes.
It can be used to fetch technology data from a JSON file.
</p>

<h3>5. Why does every item in a .map() list need a unique key prop?</h3>

<p>
React needs a unique <code>key</code> to identify each item in a list.
It helps React update the list correctly.
</p>

<pre><code>
{selectedStack.map((technology) => (
  &lt;div key={technology.id}&gt;
    {technology.name}
  &lt;/div&gt;
))}
</code></pre>

<p>
Here from my YourStack component <code>technology.id</code> is the unique key.
</p>

<h3>6. What is conditional rendering? Show one place you used it.</h3>

<p>
Conditional rendering means showing different content based on a condition.
I used it in the <strong>YourStack</strong> section.
</p>

<pre>
{selectedStack.length === 0 ? (
  <p>Your Stack is empty</p>
) : (
  <div>
    Selected technologies
  </div>
)}
</pre>

<p>
If no technology is selected, it shows <strong>"Your Stack is empty"</strong>.
Otherwise, it shows the selected technologies.
</p>

<h3>7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?</h3>

<p>
A parent component can send data to a child component using <strong>props</strong>.
</p>

<pre>
<Card
  CardInfo={CardInfo}
  selectedStack={selectedStack}
  addToStack={addToStack}
/>
</pre>

<p>
Here, <strong>Technology</strong> is the parent component and
<strong>Card</strong> is the child component.
</p>

<p>
The parent can also send a function to the child.
The child can call that function when needed.
</p>

<pre>
onClick={() => addToStack(technology)}
</pre>

<p>
Here, the <strong>Card</strong> component calls the
<strong>addToStack</strong> function from the parent.
</p>

<hr>

<div align="center">

<p>🚀 Built with React, TypeScript and Tailwind CSS</p>

</div>
