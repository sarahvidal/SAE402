<?php
get_header();
?>
<article class="flex flex-col gap-20 px-52 pt-10">
      <section id="section1" class="flex flex-col gap-5 text-center">
        <h1 class="font-bold text-3xl"><?php the_field('histoire_nav') ?></h1>
        <p class="text-justify leading-2">
        <?php the_field('histoire') ?>
        </p>
      </section>

      <section id="section2" class="flex flex-col gap-5 justify-center items-center text-center">
        <h1 class="font-bold text-3xl"><?php the_field('perso_nav') ?></h1>
        <div class="flex gap-16 items-center">
          <img class="w-[400px] h-[400px] bg-cover" src="<?php the_field('img_perso') ?>" alt="">
          <div class="flex flex-col gap-4 w-[350px] text-left">
            <ul class="flex justify-between">
              <li class="flex flex-col gap-2 items-start">
              <p><span class=" font-semibold"><?php the_field('nom_span_perso') ?></span> <?php the_field('nom_perso') ?></p>
              <p><span class=" font-semibold"><?php the_field('genre_span_perso') ?></span> <?php the_field('genre_perso') ?></p>
              </li>
              <li class="flex flex-col gap-2 items-start">
              <p><span class=" font-semibold"><?php the_field('age_span_perso') ?></span> <?php the_field('age_perso') ?></p>
<p><span class=" font-semibold"><?php the_field('metiers_span_perso') ?></span> <?php the_field('metiers_perso') ?></p>
              </li>
            </ul>
            <p class="text-justify pt-5"><?php the_field('description_perso') ?></p>
          </div>
        </div>
      </section>

      <section id="section3" class="flex flex-col gap-5 text-center">
        <h1 class="font-bold text-3xl"><?php the_field('objectifs_nav') ?></h1>
        <ul class="flex justify-between gap-14">
          <li data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="0" class="flex flex-col gap-4 w-[326px]">
            <img class="w-[250px] h-[250px]" src="<?php the_field('pouce_vert_img') ?>" alt="">
            <p class="text-justify">
            <?php the_field('objectif_pouce_vert') ?>
            </p>
          </li>
          <li data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" class="flex flex-col gap-4 w-[326px]">
            <img class="w-[250px] h-[250px]" src="<?php the_field('pouce_rouge_img') ?>" alt="">
            <p class="text-justify">
            <?php the_field('objectif_pouce_rouge') ?>
            </p>
          </li>
          <li data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="600" class="flex flex-col gap-4 w-[326px]">
            <img class="w-[250px] h-[250px]" src="<?php the_field('piece_img') ?>" alt="">
            <p class="text-justify">
            <?php the_field('objectif_piece') ?>
            </p>
          </li>
        </ul>
      </section>

      <section id="section4" class="flex flex-col pb-28 gap-5 text-center">
        <h1 class="font-bold text-3xl"><?php the_field('extrait_nav'); ?></h1>
        <iframe class="w-full" height="500" src="<?php the_field('video_jeu'); ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </article>

<?php
get_footer();
?>