<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Hero from '$lib/Hero.svelte';
	import profile_photo from '$lib/assets/images/profile-photo-2023_V2.png';
	import WorkPlaceLogos from '$lib/WorkplaceLogos.svelte';
	import ProjectGrid from '$lib/ProjectGrid.svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
</script>

<section use:scrollRef={'home'}>
	<Hero />
</section>

<Navbar />

<section id="about">
	<div class="flex items-center justify-center">
		<div class="max-w-md justify-center text-center py-10">
			<h1 class="text-5xl">About Me</h1>
			<img src={profile_photo} alt="A photo of a man smiling" class="py-6" />
		</div>
	</div>
	<div class="flex items-center justify-center">
		<p class="max-w-3xl text-center">
			I love to build things! That’s why I became an engineer. Along the way I fell in love with
			Programming, Python, and Javascript. I’m a passionate leader with 7+ years of experience
			bringing analytics to supply chain, marketing, and E-Commerce. Currently honing my skills in
			the Masters of Data Science Degree program at UT Austin. Now leading an amazing team of 4 as
			Business Intelligence Manager for E-Commerce Analytics at Amazon (Whole Foods Market). When
			I’m not building things, I’m traveling, gardening, learning a new instrument!
		</p>
	</div>
	<WorkPlaceLogos />
</section>

<section use:scrollRef={'projects'}>
	<ProjectGrid />
</section>

<section use:scrollRef={'projects'}>
	<ProjectGrid />
</section>

<section use:scrollRef={'projects'}>
	<ProjectGrid />
</section>

<section use:scrollRef={'projects'}>
	<ProjectGrid />
</section>

<section use:scrollRef={'projects'}>
	<ProjectGrid />
</section>

<!-- 
<scrollTop>
	<button on:click={() => scrollTop()}>Go to top</button>
</scrollTop> -->
