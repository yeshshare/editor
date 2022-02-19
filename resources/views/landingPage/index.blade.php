<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="../../css/style.css" rel="stylesheet">
<link href="../../css/responsive.css" rel="stylesheet">
<style type="text/css">
	{!! $page->css !!}
</style>

{!! $page->html !!}

<input type="text"  id="registered" value="{{Auth::check()? 's' : 'n'}}" hidden >

<script>
	var logado = document.querySelector("#registered").value;
</script>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="../../js/lp.js"></script>