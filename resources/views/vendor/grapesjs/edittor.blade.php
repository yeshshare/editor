<!DOCTYPE html>
<html lang="en">
{{Auth::check()}}

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit {{ $model->editor_page_title }}</title>
    <link href=""{{ asset('fonts/vendor/atyp_bl/stylesheet.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
        }
    </style>
    <script>
        window.editorConfig = @json($editorConfig ?? [])
    </script>
</head>

<body>
   
    <div id="loader" style="left: 0;top:0;background-color:white;opacity:0.7;position:absolute;align-items:center;justify-content:center;width:100%;height:100%;font-size:36pt;display:flex;z-index:100;">
        <i class="fa fa-spinner fa-spin"></i>
    </div>
    {{auth()->check()}}
    <input type="text"  id="registered" value="{{auth()->check()? 's' : 'n'}}" hidden >
	<input type="text"  id="accessType" value="0" hidden > 
    <input type="text"  id="id" value="{{$model->id}}" hidden>
    <input type="text"  id="getCards_url" value="{{route('getcards')}}" hidden >    
    <div id="{{ str_replace('#', '', $editorConfig->container ?? 'editor') }}"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('vendor/grapesjs/editor.js') }}"></script>
    <script>
		var logado = document.querySelector("#registered").value;
		var accessType = parseInt(document.querySelector("#accessType").value);
        var getCards_url = document.getElementById("getCards_url").value;
        function openNav(x){
            console.log(x);
        }
	</script>
    
  

</body>
</html>