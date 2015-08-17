<? snippet('header') ?>

<main role="main">

  <div class="container">
    <div class="grid">
      <nav  class="bloc bloc-s-1 right" role="navigation">
        <div class="grid">
  <? if($prev = $page->prevVisible()) { ?>
          <a class="bloc-one-third" href="<?= $prev->url() ?>"><div class="margin-top-s">&larr;</div></a>
  <? } else { ?>
          <span class="bloc-one-third"></span>
  <? } ?>
  <? if($next = $page->nextVisible()) { ?>
          <a  class="bloc-one-third" href="<?= $next->url() ?>"><div class="margin-top-s">&rarr;</div></a>
  <? } else { ?>
          <span class="bloc-one-third"></span>
  <? } ?>
          <a class="bloc-one-third" href="<?= $page->parent()->url() ?>"><div class="margin-top-s">&uarr;</div></a>
        </div>
      </nav>
      <div class="bloc bloc-m-2 title">
        <h1 class="margin-top-s"><?= $page->title()->html() ?></h1>
      </div>
    </div>
  </div>
  <div class="loader"></div>
  <div id="project-glide" class="main-picture margin-bottom-s glide">
    <div class="glide__arrows">
        <span class="glide__arrow prev btn btn-border btn-s-border btn-rnd" data-glide-dir="<">&larr;</span>
        <span class="glide__arrow next btn btn-border btn-s-border btn-rnd rigth" data-glide-dir=">">&rarr;</span>
    </div>

    <div class="glide__wrapper">
      <div class="glide__track">
<? foreach($page->images()->filterBy('filename', '*=', '--')->sortBy('sort', 'asc') as $image): ?>    
        <div class="glide__slide">
          <div class="pad">
            <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>">
            
          </div>
        </div>
<? endforeach ?>
      </div>
    </div>
    <ul class="glide__bullets"></ul>
    <div class="bg"></div>
  </div>

  <div class="container">
    <div class="grid">
      <div class="bloc bloc-s-1">
        <h6>date</h6>
        <time datetime="<?= $page->date('Y-m') ?>"><?= $page->date('Y.m.d') ?></time>
        <h6>technologies</h6>
        <?= $page->technologies()->kirbytext() ?>
        <h6>role</h6>
        <?= $page->role()->kirbytext() ?>
        <h6>link</h6>
        <?= $page->link()->kirbytext() ?>
      </div>
      <div class="bloc bloc-s-4-1 margin-top">
        <p class="margin-bottom"><b><?= $page->description()->html() ?></b></p>
        <?= $page->keypoints()->kirbytext() ?>
      </div>
    </div>
  </div>

</main>

<? snippet('footer') ?>