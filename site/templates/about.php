<? snippet('header') ?>
  <main class="main container" role="main">
      <div class="grid">
        <div class="bloc bloc-s-1">
          <h6>Contact</h6>
           <?= $page->contact()->kirbytext() ?>
          <h6>Links</h6>
           <?= $page->links()->kirbytext() ?>
        </div>
        <div class="bloc bloc-s-4-1 margin-top">
          <?= $page->text()->kirbytext() ?>
          <h6>Engineering skills</h6>
          <?= $page->engineering()->kirbytext() ?>
          <h6>Design skills</h6>
          <?= $page->design()->kirbytext() ?>
        </div>
      </div>
     
  </main>

<? snippet('footer') ?>