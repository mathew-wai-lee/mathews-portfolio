<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Hero from '$lib/Hero.svelte';
	import profile_photo from '$lib/assets/images/profile-photo-2023_V2.png';
	import WorkPlaceLogos from '$lib/WorkplaceLogos.svelte';
	import ProjectGrid from '$lib/ProjectGrid.svelte';
	import Footer from '$lib/Footer.svelte';
	const formFields = [
		{ name: 'name', label: 'Name', type: 'textarea' },
		{ name: 'email', label: 'Email', type: 'email' },
		{ name: 'message', label: 'Message', type: 'textarea' }
	];
	
</script>

<section id="home">
	<div class="max-h-screen max-w-screen overflow-hidden">
		<Hero />
	</div>
</section>

<div class="">
	<div class="sticky top-0 z-100">
		<Navbar />
	</div>

	<section id="about" class="">
		<div class="flex-col mt-15 w-xs mx-auto sm:w-full  ">
			<h1 class="text-5xl text-center font-mono">About Me</h1>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
			src={profile_photo}
			alt="Profile Photo"
			class="mt-6 rounded-xl shadow-lg shadow-gray-700 sm:w-sm mx-auto"/>

		<p class="text-center mt-8 mb-8 text-xs mx-auto font-mono sm:pt-5 px-5 sm:px-0 sm:text-base sm:max-w-2xl ">
			I love to build things - that's why I became an engineer! I fell in love with Programming
			specifically, despite classically training as a Chemical Engineer, because it requires so many
			skills to be successful: puzzle solving, creativity, and most importantly, communication. From
			supply chain, marketing, E-Commerce, and payments teams, I've had the opportunity to work
			with, and learn from, some amazing people during my 8+ years in industry. I'm currently honing
			my skills in the Masters of Data Science Degree program at UT Austin. When Professionally, I'm
			an analytics manager at Visa. When I'm not building things, I'm traveling, gardening, and
			learning a new instrument!
		</p>

		<WorkPlaceLogos />
		</div>
	</section>

	<section id="projects" class="h-auto mb-10">
		<div class="flex items-center justify-center">
			<div class="max-w-md justify-center py-10 text-center">
				<h1 class="text-5xl font-mono">Projects</h1>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<ProjectGrid />
		</div>
	</section>



	<section id="footer">
		<Footer />
	</section>


</div>

