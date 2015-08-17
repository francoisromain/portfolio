<? snippet('header') ?>
  <main class="container" role="main">
    <div class="grid">
      <? foreach(page('work')->children()->visible()->limit(3) as $project): ?>
      <div class="bloc bloc-s-1">
        <h2 class="margin-top-s margin-bottom-s"><a href="<?= $project->url() ?>"><?= $project->title()->html() ?></a></h2>
        <? if($image = $project->images()->filterBy('filename', '*=', 'thumb')->sortBy('sort', 'asc')->first()): ?>
        <a href="<?= $project->url() ?>">
          <img src="<?= $image->url() ?>" alt="<?= $project->title()->html() ?>" >
        </a>
        <? endif ?>
      </div>
      <? endforeach ?>
    </div>


  </main>

<? snippet('footer') ?>