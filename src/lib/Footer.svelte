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
		},
		{
			src: 'https://img.shields.io/badge/Svelte-white?logo=svelte',
			href: 'https://svelte.dev/'
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

<footer class="footer footer-center footer-horizontal bg-gray-950 p-7 ">
	
	
		<nav>
			<div class="flex gap-4">
				{#each socialMedia as socials}
		  <a href={socials.href}>
			<img src="{socials.src}" alt="" class="w-8 h-8">
		  </a>
		  {/each}
		</div>
	  </nav>

	<aside class= "items-center justify-center">
		<!-- <p>Copyright © {new Date().getFullYear()} - All right reserved</p> -->
		 <p class="font-mono text-base mb-2" >Made with ❤️ using</p>
		 <nav class="flex gap-2 sm:gap-3">
			{#each shields as shield}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href={shield.href}>
					<!-- svelte-ignore a11y_missing_attribute -->
					<img src={shield.src} class="sm:h-5" />
				</a>
			{/each}
		</nav>
	</aside>

	
	    
	<!-- <p> ©{new Date().getFullYear()} Mathew Lee</p> -->



</footer>