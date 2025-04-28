<script lang="ts">
  import { browser } from "$app/environment";
  import { add } from "$lib/dotnet/main.js";

  let a = $state(0);
  let b = $state(1);
  let output: number = $state(0);

  async function addButton() {
    output = add(a, b) as unknown as number;
  }
</script>

<h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<label for="a">
  A:
  <input bind:value={a} type="number" id="a" />
</label>

<label for="a">
  B:
  <input bind:value={b} type="number" id="a" />
</label>

<button onclick={addButton}>Execute Add</button>

<textarea bind:value={output}></textarea>
