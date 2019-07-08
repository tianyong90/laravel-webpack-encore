<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>laravel webpack-encore</title>

{!! encore_entry_link_tags('app') !!}
</head>
<body>
<div>
    <div id="app">
        <ExampleComponent />
    </div>
</div>

{!! encore_entry_script_tags('app') !!}
</body>
</html>
