<? snippet('header') ?>



  <main role="main">

  <div class="container">
    <hr />
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
      </nav>
      <div class="bloc bloc-s-1">
        <h1 class="margin-top-s"><?= $page->title()->html() ?></h1>
      </div>
    </div>
    
  </div>

  <div class="main-picture margin-bottom">
    

  </div>

  <div class="container">
  <div class="grid">
    <div class="bloc bloc-s-1">
      <ul class="list-sans">
        <li>
          <h6>date</h6>
          <time datetime="<?= $page->date('Y-m') ?>"><?= $page->date('Y.m.d') ?></time>
        </li>
        <li>
          <h6>technologies</h6>
          <p><?= $page->technologies() ?></p>
        </li>
        <li>
          <h6>role</h6>
          <p><?= $page->role() ?></p>
        </li>
        <li>
          <h6>link</h6>
          <p><?= $page->link() ?></p>
        </li>
      </ul>
    </div>
    <div class="bloc bloc-s-4-1">
      <p><b><?= $page->description()->html() ?></b></p>
      <?= $page->keypoints()->kirbytext() ?>
      <? foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
      <figure>
        <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>">
      </figure>
      <? endforeach ?>
    </div>



  </div>

  </main>

<? snippet('footer') ?>