<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <meta name="keywords" content="<?= $site->keywords()->html() ?>">

  <?= css('assets/dist/css/styles.css') ?>

</head>
<body>

<div class="page">
  <div class="container">
    <header role="banner" class="grid">
      <div class="bloc bloc-m-2">
        <div class="grid">
          <div class="bloc bloc-one-half center"><a href="<?= url() ?>"><img src="<?= url('assets/dist/img/fr-logo.svg') ?>" alt="francois romain logo" width="64px" height="64px" class="img-logo margin-top-s"/></a></div>
          <div class="bloc-n">
            <h1 class="margin-top margin-bottom-0"><a href="<?= url() ?>"><?= $site->title() ?></a></h1>
            <h4><?= $site->subtitle() ?></h4>
          </div>
        </div>
      </div>
      
      <nav role="navigation" class="bloc bloc-m-2 m-right">
        <? snippet('menu') ?>
      </nav>
    </header>
  </div>
  