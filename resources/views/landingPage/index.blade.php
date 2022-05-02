@extends('layouts.customer');



@section('lp.content')
	{!! $page->html !!} 
    <input type="text"  id="registered" value="{{Auth::check()? 's' : 'n'}}" hidden >
	<input type="text"  id="accessType" value="1" hidden >    
	<input type="text"  id="getCards_url" value="{{route('getcards')}}" hidden >
	<input type="text"  id="id" value="{{$page->id}}" hidden > 
@endsection

@section('lp.js')
	<script>
		var logado = document.querySelector("#registered").value;
		var accessType = parseInt(document.querySelector("#accessType").value);
		var getCards_url = document.getElementById("getCards_url").value;
	</script>
	<script src="../../js/lp.js"></script>
@endsection