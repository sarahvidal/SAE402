<html lang="en">
<head>
<?php wp_head();?>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body class=" font-teko">
<header class="relative w-screen h-screen bg-header bg-cover">
  <ul class="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-12 py-3 backdrop-blur-md">
        <li class="">
          <a href="#"><img class=" w-1/5" src="<?php the_field('logo_img') ?>" alt="logo-jeu" /></a>
        </li>
        <li class="flex gap-12 items-center">
          <a class="lg:flex hidden hover:underline underline-offset-8" href="#section1"><?php the_field('histoire_nav') ?></a>
          <a class="lg:flex hidden hover:underline underline-offset-8" href="#section2"><?php the_field('perso_nav') ?></a>
          <a class="lg:flex hidden hover:underline underline-offset-8" href="#section3"><?php the_field('objectifs_nav') ?></a>
          <a class="lg:flex hidden hover:underline underline-offset-8" href="#section4"><?php the_field('extrait_nav') ?></a>
          <a class="py-3 px-5 font-teko bg-darkgreen text-white text-lg rounded-full hover:text-black hover:bg-white" href="https://www.s-vidal.mmi-limoges.fr/jeuSAE402/index.html"
            ><?php the_field('jouer_nav') ?></a
          >
        </li>
      </ul>
      <section class="w-screen h-screen flex justify-center items-center">
        <img class="object-cover object-center w-full h-full" src="<?php the_field('img_accueil') ?>" alt="">
        <div class="absolute inset-0 flex justify-center flex-col gap-2 top-[20%] left-32 w-[350px]">
          <h1 data-aos="fade-right" data-aos-delay="300" class="text-3xl font-bold"><?php the_field('nom_jeu') ?></h1>
          <p data-aos="fade-right" data-aos-delay="900" class="text-justify"><?php the_field('description_jeu') ?></p>
        </div>
      </section>
</header>

     