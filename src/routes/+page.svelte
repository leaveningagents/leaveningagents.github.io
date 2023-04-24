<script>
  import json from '../agents.json';
  import Agent from './agent.svelte';

  let searchTerms = '';
  let allAgents = json.agents;
  let filteredAgents = allAgents;
  let isDarkTheme = false;

	const searchAgents = () => {	
    filteredAgents = allAgents.filter(agent => {
			let agentName = agent.name.toLowerCase();
			return agentName.includes(searchTerms.toLowerCase());
		});
	}
  const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    isDarkTheme ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark');
  }
</script>

<div class="relative">
  <!-- Navbar -->
  <div class="flex justify-between max-w-6xl mx-auto py-4 px-6">
    <img class="w-12 h-12" src="logo.svg" alt="logo"/>
    <div class="flex">
      <button class="flex py-3 px-4 rounded-full shadow-light dark:shadow-dark dark:bg-dark-24 text-light-43 dark:text-dark-90 items-center font-medium" on:click={toggleTheme}>
        {#if isDarkTheme }<img class="w-4 h-4" src="moon.svg" alt="dark theme"/>{:else}<img class="w-5 h-5" src="brightness-high.svg" alt="light theme"/>{/if}
        <span class="hidden sm:block sm:ml-2"> Theme</span>
      </button>
      <!-- <button class="flex py-3 px-4 rounded-full shadow-light dark:shadow-dark dark:bg-dark-24 text-light-43 dark:text-dark-90 font-medium ml-3">
        <span class="bg-accent rounded-full p-1"><img class="w-4 h-4" src="filetype-pdf.svg" alt="pdf"/></span> 
        <span class="hidden sm:block sm:ml-2"> Download</span>
      </button> -->
    </div>
  </div>
  <div class="container max-w-4xl mx-auto px-6 pb-32">
    <div class="max-w-2xl mx-auto text-center mt-20">
      <h1 class="text-5xl text-light-43 dark:text-dark-90 font-extrabold">Potential Leavening Agents.</h1>
      <h2 class="text-xl mt-4 text-light-53 dark:text-dark-80">Leavening agents that you may want to remove from your dwelling for Passover and the Feast of Unleavened Bread.</h2>
      <!-- Search bar -->
      <div class="flex flex-auto max-w-lg relative mt-10 mx-auto">
        <input class="flex flex-auto w-full text-base md:text-lg text-light-43 dark:text-dark-90 dark:text-white bg-white dark:bg-dark-24 rounded-full pl-12 md:pl-14 pr-6 py-3.5 shadow-light dark:shadow-dark focus:border-light-53 focus:ring-0 focus:outline-none placeholder:text-light-80 placeholder:dark:text-dark-40 placeholder:font-medium" placeholder="Type to search" bind:value={searchTerms} on:input={searchAgents}>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-1 my-auto h-12 w-12 fill-light-53 dark:fill-dark-80 px-3.5 ml-2" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g></svg>
      </div>
    </div>
    <!-- Agents list -->
    {#each Object.values(filteredAgents) as agent (agent.id)}
      <Agent agent={agent}/>
    {/each}
  </div>
  <!-- Footer -->
  <footer class="flex text-center py-8 px-6 mt-10">
    <small class="text-light-43 dark:text-dark-90 mx-auto">The <a class="text-light-43 dark:text-dark-80 underline duration-300 dark:hover:text-dark-80" href="https://github.com/leaveningagents">source code</a> for this site is open source on Github. &copy; 2023 </small>
  </footer>
</div>