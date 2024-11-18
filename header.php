<?php
$current_page = basename($_SERVER['PHP_SELF']);

?>
<nav class="navbar navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 cont-nav-item">
          <li class="nav-item">
            <a class="nav-link <?php if($current_page == 'index.php'){ echo 'active'; } ?>" aria-current="page" href="index.php">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects/">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link <?php if($current_page == 'contacto.php'){ echo 'active'; } ?>" href="contacto.php">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>