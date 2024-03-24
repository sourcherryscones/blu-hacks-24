<script>
    export let data;
    let carb_progress = data.user.carb/data.user.max_carb
    let fat_progress = data.user.fat/data.user.max_fat
    let protein_progress = data.user.protein/data.user.max_protein
</script>

<progress class="progress w-56" value={data.user.calories} max={data.user.max_calories}></progress>

<div class="radial-progress" style="--value:{carb_progress};" role="progressbar">{data.user.carb}</div>
<div class="radial-progress" style="--value:{fat_progress};" role="progressbar">{data.user.fat}</div>
<div class="radial-progress" style="--value:{protein_progress};" role="progressbar">{data.user.protein}</div>
