<script>
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
</script>

<div class="navbar bg-neutral text-neutral-content sticky top-0">
	<div class="flex-1">
		<a use:scrollTo={'home'} href="#Home" class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<!-- <li><a>Link</a></li> -->
			<!-- <li> -->
			<!-- <details> -->
			<!-- <summary>Parent</summary> -->
			<!-- <ul class="bg-base-100 rounded-t-none p-2"> -->
			<li><a use:scrollTo={'home'} href="#Home">Home</a></li>
			<li><a use:scrollTo={'home'} href="#About">About</a></li>
			<li><a use:scrollTo={'home'} href="#Experience">Experience</a></li>
			<li><a use:scrollTo={'home'} href="#Projects">Projects</a></li>
			<li><a use:scrollTo={'home'} href="#Connect">Connect</a></li>
			<!-- </ul> -->
			<!-- </details> -->
			<!-- </li> -->
		</ul>
	</div>
</div>
