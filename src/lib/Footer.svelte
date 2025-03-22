<script>
	const shields = [
		{
			src: 'https://img.shields.io/badge/daisyui-white?logo=daisyui',
			href: 'https://daisyui.com/'
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

	import github from '$lib/assets/logos/github.svg';
	import linkedin from '$lib/assets/logos/linkedin.svg';
	import medium from '$lib/assets/logos/medium.svg';	

	const socialMedia = [
		{
			src: github,
			href: 'https://github.com/mathew-wai-lee'
		},
		{
			src: linkedin,
			href: 'https://linkedin.com/in/mathew-wai-lee'
		},
		{
			src: medium,
			href: 'https://medium.com/@mwlee9'
		},

	]
</script>

<footer class="footer bg-neutral text-neutral-content flex items-center justify-between p-4 text-xs md:text-base font-mono">
	<aside class="grid-flow-col items-center">
		<!-- <p>Copyright © {new Date().getFullYear()} - All right reserved</p> -->
		 <p>Made with ❤️ using Svelte</p>
	</aside>
	    
	<!-- <p> ©{new Date().getFullYear()} Mathew Lee</p> -->
	<nav>
		<div class="grid grid-flow-col gap-4">
			{#each socialMedia as socials}
		  <a href={socials.href}>
			<img src="{socials.src}" alt="" class="w-7 h-7">
		  </a>
		  {/each}
		</div>
	  </nav>

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