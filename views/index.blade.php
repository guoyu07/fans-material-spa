<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>{{ config('app.name') }}</title>
</head>
<body>
<div id="app"></div>
<script src="{{ mix('/manifest.js', 'fans-material-spa') }}"></script>
<script src="{{ mix('/vendor.js', 'fans-material-spa') }}"></script>
<script src="{{ mix('/app.js', 'fans-material-spa') }}"></script>
</body>
</html>