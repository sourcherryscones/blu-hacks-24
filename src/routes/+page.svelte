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

<progress class="progress w-64" value={data.user.calories} max={data.user.max_calories}></progress>

<div>
  <div class="radial-progress" style="--size:6rem; --value:{carb_progress};" role="progressbar">{data.user.carb}</div>
  <div class="radial-progress" style="--size:6rem; --value:{fat_progress};" role="progressbar">{data.user.fat}</div>
  <div class="radial-progress" style="--size:6rem; --value:{protein_progress};" role="progressbar">{data.user.protein}</div>
</div>

<div class="stats shadow">
  
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
    <div class="stat-value text-secondary">{data.user.water}</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-secondary">31 tasks remaining</div>
  </div>

</div>