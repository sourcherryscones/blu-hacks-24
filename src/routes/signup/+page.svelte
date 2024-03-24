<script>
  import { goto } from '$app/navigation';

  const activity_levels = ["inactive", "sedentary", "light", "moderate", "high"]
  const goals = ["cut", "maintain", "bulk", "stress relief"]


  let username = "";
  let password = "";
  let weight;
  let height;
  let activity_level = activity_levels[0];
  let goal = goals[0];
  
  
  async function signup () {
    const body = {
      username,
      password,
      weight,
      height,
      activity_level,
      goal
    }
    const res = await fetch('/signup', {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    if (res.status == 200) {
      goto('../login');
    } else {
      const error = await res.text();
      console.log(res.status, error);
    }
  }

</script>

<input class="input input-bordered" name="username" placeholder="username" bind:value={username}>
<input type="password" class="input input-bordered" name="password" placeholder="password" bind:value={password}>
<input placeholder="weight(lbs)" class="input input-bordered" name="weight" bind:value={weight}>
<input placeholder="height(ft)" class="input input-bordered" name="height" bind:value={height}>

<span class="label-text">Select your activity level</span>
<select class="select select-bordered" bind:value={activity_level}>
  {#each activity_levels as a}
    <option value={a}>{a}</option>
  {/each}
</select>

<span class="label-text">Select your goal</span>
<select class="select select-bordered" bind:value={goal}>

  {#each goals as g}
    <option value={g}>{g}</option>
  {/each}
</select>

<button class="btn m-4" on:click={signup}>Sign up</button>

