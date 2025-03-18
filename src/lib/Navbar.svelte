<script>
    import './navbar.css';
</script>


<div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Connect">Connect</a>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>

