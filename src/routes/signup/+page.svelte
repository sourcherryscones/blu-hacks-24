<script>
    let username = "";
    let password = "";

    function signup(){
        fetch(/*whatever route*/, {
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

<input name="username" bind:value={username}>
<input name="password" bind:value={password}>
<button on:click={signup}>Sign up</button>

