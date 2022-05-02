@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Paginas') }}</div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                            <button id="addPagina" class="btn btn-success" click="showModalTemplate()">Add pagina</button>
                        </div>
                    </div>
                    <hr>
                    <div class="container-fluid">
                        @foreach($pages as $key => $page)
                        <div class="row">                        
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                {{$page->id}}
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                {{$page->tipo}}
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-end" >
                                <button type="button" class="btn btn-primary openModal" onclick="openview(this)" value="{{$page->id}}" style="margin-bottom: 5px">view</button>
                                <br>
                            </div>                            
                            <hr>                        
                        </div>
                        @endforeach
                    </div>    
                </div>
            </div>
        </div>        
    </div>
</div>    
<div class="modal" id="viewPage">
    <div class="modal-header" style="background-color: white">
        <h4 class="modal-title"></h4>
        <button type="button" id="btnClose" class="btn-close">&nbsp;</button>
    </div>
    <div class="modal-dialog" style="width: 80%!important;max-width: 80%;">
        
        <div class="modal-content" style="width: 100%">
            <div class="modal-body">
                <iframe id="viewPageTela" class="container-fluid" width="100%" height="800px" src=""></iframe>
            </div>    
        </div>       
    </div>
</div>
<div class="modal" id="modalTemplate">
    
    <div class="modal-dialog" >
        <div class="modal-content" style="width: 100%">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
                <button type="button" id="btnClose" onclick="closeModalTemplate()" class="btn-close">&nbsp;</button>
            </div>
            <div class="modal-body">
            @foreach($pages as $key => $page)
                <div class="row">                        
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        {{$page->id}}
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                {{$page->tipo}}
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-end" >
                        <button type="button" class="btn btn-primary" onclick="creatView(this)" value="{{$page->id}}" style="margin-bottom: 5px">selecionar</button>
                        <br>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-end" >
                        <button type="button" class="btn btn-primary openModal" onclick="openview(this)" value="{{$page->id}}" style="margin-bottom: 5px">view</button>
                        <br>
                    </div>                            
                    <hr>                        
                </div>
            @endforeach
            </div>
        </div>       
    </div>
</div>
<script>
    var templateOpened = false; 
    const body = document.getElementsByTagName("body")[0];  
    body.addEventListener("load", load(), false);
    


    function load(){
        const btnClose = document.getElementById("btnClose");
        const addPagina = document.getElementById("addPagina");        
        btnClose.addEventListener("click",function(){
            closeview();
        });
        addPagina.addEventListener("click",function(){
            console.log("abrir templates");
            showModalTemplate();
        });
    }

    function openview(el){
        if(templateOpened){
            let modalTemplate = document.getElementById("modalTemplate");
            modalTemplate.style.display = "none";
        }
        var url = "http://localhost:8000/portal/" + el.value;
        console.log(url);
        let viewPageTela = document.getElementById("viewPageTela");
        viewPageTela.setAttribute("src", url);
        let viewPage = document.getElementById("viewPage");
        viewPage.style.display = "block";
    }

    function closeview(){
        console.log("fechar");
        let viewPage = document.getElementById("viewPage");
        viewPage.style.display = "none";
        if(templateOpened){
            showModalTemplate();
        }
    }

    function showModalTemplate(){
        templateOpened = true;
        let modalTemplate = document.getElementById("modalTemplate");
        modalTemplate.style.display = "block";
    }

    function closeModalTemplate(){
        console.log("fechar");
        let viewPage = document.getElementById("modalTemplate");
        viewPage.style.display = "none";
        templateOpened = false;
    }

    function creatView(el){
        console.log(el.value);
        let url = '/addPage/' + el.value;
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
            //window.location.href = '/pages/'+ data +'/editor'
            
        })
        .catch(function(error) {
            console.log(error);
        });

    }
   
</script>    
@endsection

