<!DOCTYPE html>
<html>

    <head>
        <title>{{  Route::currentRouteName() }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="../../css/style.css" rel="stylesheet">
        <link href="../../css/responsive.css" rel="stylesheet">
        <style type="text/css">
            {!! $page->css !!}
        </style>   
    </head>
    <body>      
        @if(Route::currentRouteName() == 'portal')
            @yield('lp.content')
            @yield('lp.js')
        @elseif(Route::currentRouteName() == 'staff')
            @yield('staff.content')
        @endif      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>        
    </body>
</html>



