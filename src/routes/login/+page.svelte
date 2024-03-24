<script>
  import { goto } from '$app/navigation';

  let username = "";
  let password = "";

  async function login(){
    const res = await fetch('', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (res.status == 200) 
      goto("../")
  }
</script>

<input class="input input-bordered" name="username" placeholder="username" bind:value={username}>
<input type="password" class="input input-bordered" name="password" placeholder="password" bind:value={password}>

<button class="btn" on:click={login}>Log In</button>

<p>Not a user? sign up <a class="text-sky-600" href="../signup">here</a></p>
