<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        {{-- Token --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        
        {{-- Css --}}
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

    </head>
    <body class="bg-grey-lighter h-screen">
        <div id="app">
            @yield('section')
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
