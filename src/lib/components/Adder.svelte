<script>
  let data = undefined;
  let query = "";
  let measureIndex;

  async function get () {

    const res = await fetch(`/add?query=${query}`)

    if (res.status !== 200) {
      const { message } = await res.json();
      alert(message);
      return;
    } 
    data = await res.json();

    document.getElementById('modal').show();
  }

  async function submit () {
    data.measure = data.measures[measureIndex];

    const res = await fetch(`/add`, {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (res.status !== 200) {
      const { message } = await res.json();
      alert(message);
      return;
    }
    data = undefined;

    document.getElementById('modal').close();
  }
</script>


<div class="flex flex-col gap-2 p-4 items-center">
  <input class="input input-bordered" placeholder="query" bind:value={query}>
  <button on:click={get}>Add</button>

  <!-- Open the modal using ID.showModal() method -->
  <dialog id="modal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <h3 class="font-bold text-lg">Is this right?</h3>
      
      {#if data}
        <p class="py-4">{data.name}</p>

        <span class="label-text">Select your serving</span>
        <select class="select select-bordered" bind:value={measureIndex}>
          {#each data.measures as m, i}
            <option value={i}>{m.text}</option>
          {/each}
        </select>
      {/if}

      <button on:click={submit} class="btn">confirm</button>
    </div>
  </dialog>
</div>
