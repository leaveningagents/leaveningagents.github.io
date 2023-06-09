<script>
  /**
   * @type {{ id: any; name: any; type: any; other_names: string | { [s: string]: any; } | ArrayLike<any>; notes: any; }}
   */
  export let agent;
  
  let doneState = false;
  $: indicatorDoneClasses = doneState ? 'bg-accent' : 'border border-light-43';
  function toggleDone() {
    doneState = !doneState;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="id{agent.id}" class="flex cursor-pointer {agent.id != 0 ? 'mt-10' : ''}" on:click={toggleDone}>
  <div class="flex flex-row align-center">
    <div class="flex">
      <span class="w-4 h-4 rounded-full mt-3 mr-6 {indicatorDoneClasses}"></span>
    </div>
    <div>
      <div class="flex items-center">
        <h4 class="text-3xl text-light-43 dark:text-dark-90 font-extrabold mr-2" class:line-through={doneState}>{agent.name}</h4><span class="relative rounded-full font-bold bg-light-93 dark:bg-dark-24 text-light-43 dark:text-dark-80 text-sm py-1 px-3">{agent.type}</span>
      </div>
      {#if agent.other_names.length != 0}
      <h5 class="text-lg text-light-43 dark:text-dark-72 font-medium mt-1">
        Also called: 
        {#each Object.values(agent.other_names) as name}
          {#if name != agent.other_names[agent.other_names.length-1]}
          {name},&nbsp;
          {:else}
          {name}
          {/if}
        {/each}
      </h5>
      {/if}
      <p class="text-lg text-light-53 dark:text-dark-80 mt-2">{agent.notes}</p>
    </div>
  </div>
</div>