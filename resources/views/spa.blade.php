<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>{{ config('app.name') }}</title>

  <!-- Fans setting. -->
  <meta name="api-base" content="{{ url('/api') }}">
  <meta name="api-version" content="v1">

</head>
<body>
<div id="app"></div>
<script src="{{ mix('app.js', 'assets/medz-fans-material-spa') }}"></script>
</body>
</html>
