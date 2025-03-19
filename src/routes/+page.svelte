<script>
    import "../app.css";
    import Navbar from '$lib/Navbar.svelte';
    import Hero from '$lib/Hero.svelte';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'

  </script>






<section use:scrollRef={'home'}>
  
  <Hero/>  

</section>



<Navbar />

<section id="about">
  <div class="night">
    <div class="hero ghost min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl">Hello! I'm <span class="hero_highlight">Mathew.</span></h1>
          <p class="py-6 ">
            I'm a <span class="hero_highlight">data scientist</span> and <span class="hero_highlight">front-end developer.</span>
          </p>
          <button class="btn btn-outline">View My Work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg></button>
        </div>
      </div>
    </div>

</section>
<section use:scrollRef={'blog'}></section>
