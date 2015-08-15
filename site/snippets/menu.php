<div class="menu grid">
<? foreach($pages->visible() as $p): ?>
  <a class="<? e($p->isOpen(), ' active') ?>" href="<?= $p->url() ?>"><?= $p->title()->html() ?></a>
<? endforeach ?>
</div>