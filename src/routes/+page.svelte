<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Hero from '$lib/Hero.svelte';
	import profile_photo from '$lib/assets/images/profile-photo-2023_V2.png';
	import WorkPlaceLogos from '$lib/WorkplaceLogos.svelte';
	import ProjectGrid from '$lib/ProjectGrid.svelte';
</script>

<section id="home">
	<div class="max-h-screen max-w-screen overflow-hidden">
		<Hero />
	</div>
</section>

<div class="grid grid-cols-1 items-center justify-center">
	<div class="top-0 sticky">
		<Navbar />
	</div>

	<section id="about" class="h-screen">
		<div class="flex items-center justify-center mt-25">
			<div class="max-w-md justify-center text-center">
				<h1 class="text-5xl">About Me</h1>
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src={profile_photo}
					alt="Profile Photo"
					class="mt-6 rounded-xl shadow-lg shadow-gray-700 w-full object-cover object-center"
				/>
			</div>
		</div>
		<div class="flex items-center justify-center pt-5">
			<p class="max-w-3xl text-center">
				I love to build things! That's why I became an engineer. Along the way I fell in love with
				Programming, Python, and Javascript. I'm a passionate leader with 7+ years of experience
				bringing analytics to supply chain, marketing, and E-Commerce. Currently honing my skills in
				the Masters of Data Science Degree program at UT Austin. Now leading an amazing team of 4 as
				Business Intelligence Manager for E-Commerce Analytics at Amazon (Whole Foods Market). When
				I'm not building things, I'm traveling, gardening, learning a new instrument!
			</p>
		</div>
		<WorkPlaceLogos />
	</section>

	<!-- <section id="projects" class="h-screen pt-15">
		<div class="flex items-center justify-center">
			<div class="max-w-md justify-center py-10 text-center">
				<h1 class="text-5xl">Projects</h1>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<ProjectGrid />
		</div>
	</section>

	<section id="connect" class="h-screen pt-15">
		<div class="flex items-center justify-center">
			<div class="max-w-md justify-center py-10 text-center">
				<h1 class="text-5xl">Connect</h1>
			</div>
		</div>
	</section> -->

	<!-- 
<scrollTop>
	<button on:click={() => scrollTop()}>Go to top</button>
</scrollTop> -->
</div>
