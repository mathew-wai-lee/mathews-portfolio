<script>
	const shields = [
		{
			src: 'https://img.shields.io/badge/daisyui-white?logo=daisyui',
			href: 'https://daisyui.com/'
		},
		{
			src: 'https://img.shields.io/badge/Svelte-white?logo=svelte',
			href: 'https://svelte.dev/'
		},
		{
			src: 'https://img.shields.io/badge/Tailwind-white?logo=tailwindcss',
			href: 'https://tailwindcss.com/'
		},
		{
			src: 'https://img.shields.io/badge/Figma-white?logo=figma',
			href: 'https://figma.com/'
		}
		
	];
</script>

<footer class="footer bg-neutral text-neutral-content flex items-center justify-between p-4">
	<aside class="grid-flow-col items-center">
		<!-- <p>Copyright © {new Date().getFullYear()} - All right reserved</p> -->
		 <p>Made with ❤️ using Svelte</p>
	</aside>
	<nav class="grid-flow-col gap-4">
		{#each shields as shield}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href={shield.href}>
				<!-- svelte-ignore a11y_missing_attribute -->
				<img src={shield.src} />
			</a>
		{/each}
	</nav>
</footer>
