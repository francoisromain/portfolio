<? snippet('header') ?>
  <main class="main" role="main">
    <div class="container">

      <div>
        <h1><?= $page->title()->html() ?></h1>
        <?= $page->text()->kirbytext() ?>
      </div>
    </div>
  </main>

<? snippet('footer') ?>