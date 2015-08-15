<ul class="grid list-inline">
  <? foreach(page('work')->children()->visible()->limit(3) as $project): ?>
  <li class="bloc bloc-s-1">
    <h2><a href="<?= $project->url() ?>"><?= $project->title()->html() ?></a></h2>
    <p><?= $project->text()->excerpt(80) ?> <a href="<?= $project->url() ?>">read&nbsp;more&nbsp;→</a></p>
    <? if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
    <a href="<?= $project->url() ?>">
      <img src="<?= $image->url() ?>" alt="<?= $project->title()->html() ?>" >
    </a>
    <? endif ?>
  </li>
  <? endforeach ?>
</ul>
