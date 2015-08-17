  <div class="push-footer margin-top"></div>
</div>
<footer class="footer container">
  <hr />
  <div class="margin-top-s">
    <?= $site->copyright()->kirbytext() ?>
  </div>

</footer>

  <?= js(array(
  'assets/dist/js/lib.js',
  'assets/dist/js/scripts.js'
  )) ?>

</body>
</html>