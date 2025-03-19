<script>
	import HenkelLogo from '$lib/assets/logos/Henkel-Logo 1.svg';
	import PepsicoLogo from '$lib/assets/logos/PepsiCo_logo 1.svg';
	import WFMLogo from '$lib/assets/logos/Whole_Foods_Market_201x_logo 1.svg';
	import AmazonLogo from '$lib/assets/logos/Amazon_icon 1.svg';
	import VisaLogo from '$lib/assets/logos/Visa_Inc._logo 1.svg';
</script>

<div class="relative mx-auto max-w-4xl overflow-hidden py-10">
	<!-- Container with animation -->
	<div class="animate-infinite-scroll flex w-max gap-20">
		<!-- Duplicate content for seamless loop -->
		<div class="flex gap-20">
			<!-- Carousel Items -->
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={HenkelLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={PepsicoLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={WFMLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={AmazonLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={VisaLogo} alt="" />
			</div>
		</div>
		<!-- Duplicated Items -->
		<div class="flex gap-20" aria-hidden="true">
			<!-- Carousel Items -->
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={HenkelLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={PepsicoLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={WFMLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={AmazonLogo} alt="" />
			</div>
			<div class="flex items-stretch justify-center rounded-xl">
				<img src={VisaLogo} alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes infinite-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.animate-infinite-scroll {
		animation: infinite-scroll 20s linear infinite;
	}

	.hover\:pause:hover {
		animation-play-state: paused;
	}
</style>
