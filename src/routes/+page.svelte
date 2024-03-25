<script>
  export let data;
  let carb_progress = 100*data.user.carb/data.user.max_carb
  let fat_progress = 100*data.user.fat/data.user.max_fat
  let protein_progress = 100*data.user.protein/data.user.max_protein
  console.log(data)
  console.log(data.user)
  console.log("calories: " + data.user.calories)
  console.log("carb progress: " + carb_progress)
  console.log("fat progress: " + fat_progress)
  console.log("protein progress: " + protein_progress)
</script>

<div class="font-black text-2xl">Welcome, {data.username}!</div>

<div class="font-light text-xl my-4">Your daily stats</div>



<div class="stats my-5">
  <div class="radial-progress font-black text-2xl mx-2" style="--size:6rem; --thickness: 0.7rem; --value:{carb_progress};" role="progressbar">{data.user.carb}g</div>
  <div class="radial-progress font-black text-2xl mx-2" style="--size:6rem; --thickness: 0.7rem; --value:{fat_progress};" role="progressbar">{data.user.fat}g</div>
  <div class="radial-progress font-black text-2xl mx-2" style="--size:6rem; --thickness: 0.7rem; --value:{protein_progress};" role="progressbar">{data.user.protein}g</div>
</div>

<div class="stats stats-vertical shadow my-4">

  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Calories burned</div>
    <div class="stat-value text-primary">{data.user.calories}</div>
    <div class="stat-desc">today</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Hydration level</div>
    <div class="stat-value text-secondary">{data.user.water}L</div>
    <div class="stat-desc">21% more than last month</div>
  </div>

</div>

<div class="btm-nav">
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </button>
  <button class="active">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </button>
</div>