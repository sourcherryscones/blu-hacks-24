<script>
  export let data;
  const foods = data.user.foods;
  console.log(foods);
</script>

<div class="flex flex-col items-center p-8 gap-8">
  {#each foods as food}
    <div class="card w-72 bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{food.name}</h2>
        <p>{food.quantity}</p>
        <div class="card-actions justify-end">
          <p class="text-md"><span class="text-4xl text-black">{food.cal}</span> cals</p>
        </div>
      </div>
    </div>
  {/each}
</div>
