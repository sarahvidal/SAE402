<footer class="w-screen">
<article class="typofooter relative flex justify-between p-16">
   <section class="z-2 flex flex-col justify-between">
       <h3 class="font-bold"><?php the_field('propos_footer') ?></h3>
       <p class="w-[256px] "><?php the_field('propos_texte') ?> </p>
       <ul class="flex gap-4">
           <li><img src="<?php the_field('instagram') ?>" alt="instagram"></li>
           <li><img src="<?php the_field('facebook') ?>" alt="facebook"></li>
           <li><img src="<?php the_field('twitter') ?>" alt="twitter"></li>
           <li><img src="<?php the_field('linkedin') ?>" alt="linkedin"></li>
       </ul>
   </section>
   <section class="z-2 flex flex-col justify-between gap-8">
       <h3 class="font-bold"><?php the_field('liens_footer') ?></h3>
       <ul class="flex flex-col gap-5">
           <li><a class="typofooter" href="#"><?php the_field('histoire_nav') ?></a></li>
           <li><a class="typofooter" href="#"><?php the_field('perso_nav') ?></a></li>
           <li><a class="typofooter" href="objectifs"><?php the_field('objectifs_nav') ?></a></li>
           <li><a class="typofooter" href="#"><?php the_field('extrait_nav') ?></a></li>
       </ul>
   </section>
   <section class="z-1 flex flex-col justify-between gap-8">
       <h3 class="font-bold"><?php the_field('contact_footer') ?></h3>
       <ul class="flex flex-col gap-5">
           <li><a class="typofooter" href="#"><?php the_field('adresse') ?></a></li>
           <li><a class="typofooter" href="#"><?php the_field('mail') ?></a></li>
           <li><a class="typofooter" href="#"><?php the_field('numero') ?></a></li>
       </ul>
   </section>
   <img class="absolute bottom-0 -z-10 left-0" src="<?php the_field('img_footer') ?>" alt="footer">
</article>
</footer>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>