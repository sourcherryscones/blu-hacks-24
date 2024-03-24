<script>
    let username = "";
    let password = "";

    function login(){
        fetch('', {
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

<input class="input input-bordered" name="username" placeholder="username" bind:value={username}>
<input type="password" class="input input-bordered" name="password" placeholder="password" bind:value={password}>
<button on:click={login}>Log In</button>