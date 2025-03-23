<script lang="ts">
	import { scrollToElement } from './utils/scroll';
	let isMenuOpen = false;
	
	const navItems = [
		{ href: 'home', label: 'Home' },
		{ href: 'about', label: 'About' },
		{ href: 'projects', label: 'Projects' }
	];

	function handleScroll(href: string) {
		scrollToElement(href);
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	}
</script>

<nav class="sticky top-0 bg-neutral shadow-md backdrop-blur-sm">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo or Brand -->
			<div class="flex-shrink-0">
				<span class="text-xl font-bold">ML</span>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:space-x-8">
				{#each navItems as item}
					<button
						on:click={() => handleScroll(item.href)}
						class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
					>
						{item.label}
					</button>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={() => isMenuOpen = !isMenuOpen}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
					aria-expanded={isMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Icon when menu is closed -->
					<svg
						class="{isMenuOpen ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!-- Icon when menu is open -->
					<svg
						class="{isMenuOpen ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{#each navItems as item}
					<button
						on:click={() => handleScroll(item.href)}
						class="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
					>
						{item.label}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</nav>