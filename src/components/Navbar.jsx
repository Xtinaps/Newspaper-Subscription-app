import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NewsPaper App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add</a>
        <a class="nav-link" href="/View">View</a>
        <a class="nav-link" href="/Search">Search</a>
        <a class="nav-link" href="/Delete">Delete</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar