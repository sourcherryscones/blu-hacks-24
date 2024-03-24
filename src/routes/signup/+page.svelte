<script>
  let username = "";
  let password = "";

  function signup(){
    fetch('/signup', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
  }
</script>

<div class="flex flex-col w-48 gap-2 m-4">
  <input class="input input-bordered" name="username" bind:value={username}>
  <input class="input input-bordered" name="password" bind:value={password}>

  <button class="btn" on:click={signup}>Sign up</button>
</div>

