<script>
	import './Hero.css';
	import { scrollToElement } from './utils/scroll';

	function handleScroll() {
		scrollToElement('about');
	}
</script>

<div class="night relative flex min-h-screen rotate-z-45">
	<div class="">
		{#each { length: 2 }}
			<div class="shooting_star"></div>
		{/each}
	</div>

	<div class="hero -rotate-z-45">
		<div class="hero-content text-center">
			<div class="p-2">
				<h1 class="text-5xl text-white">Hello! I'm <span class="text-amber-500">Mathew.</span></h1>
				<p class="prose py-6 text-white">
					I'm a <span class="text-amber-500">data scientist</span> and aspiring
					<span class="text-amber-500">front-end developer.</span>
				</p>
				<button
					class="btn btn-outline border-amber-500 from-amber-500 from-0% to-purple-700 to-100% text-amber-500 hover:border-0 hover:bg-gradient-to-r hover:text-white"
					on:click={handleScroll}
					>View My Work
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-double-down animate-bounce"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
						/>
						<path
							fill-rule="evenodd"
							d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
						/>
					</svg></button
				>
			</div>
		</div>
	</div>
</div>
