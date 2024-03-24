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