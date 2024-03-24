<script>
    let username = "";
    let password = "";
    let weight = 0;
    let height = 0;
    let activity_level = "How active are you?";
    let goal = "What is your goal?";
    
    
    let activity_levels = ["inactive", "sedentary", "light", "moderate", "high"]
    let goals = ["cut", "maintain", "bulk", "stress relief"]

    function signup(){
        fetch('', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                weight,
                height,
                activity_level,
                goal
            })
        })
    }

</script>

<div class="flex flex-col w-48 gap-2 m-4">
  <input class="input input-bordered" name="username" placeholder="username" bind:value={username}>
  <input type="password" class="input input-bordered" name="password" placeholder="password" bind:value={password}>
  <input placeholder="weight(lbs)" class="input input-bordered" name="weight" bind:value={weight}>
  <input placeholder="height(ft)" class="input input-bordered" name="height" bind:value={height}>

  
  <select class="select flex flex-col w-48 gap-2" bind:value={activity_level}>
    <option disabled selected>Select your activity level</option>
    {#each activity_levels as a}
      <option value={a}>{a}</option>
    {/each}
  </select>
  <select class="select flex flex-col w-48 gap-2" bind:value={goal}>
    <option disabled selected>What is your goal?</option>
    {#each goals as g}
      <option value={g}>{g}</option>
    {/each}
  </select>
  <button class="btn" on:click={signup}>Sign up</button>
</div>

