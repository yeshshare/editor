@extends('layouts.customer');


@section('staff.content')
<section id="menu" >
   <nav class="navbar fixed-top yesh_navbar" style="z-index: 98;">
       <div class="container-fluid">
           <div class="d-flex justify-content-start">
               <div class="row">
                   <div class="col">
                       <img id="logo" src="https://yeshmeet.yeshmeet.com.br/storage//YESH/landingpage/imagens/yesh-meet07pngyesh_1633023076837216987.png" class="logo_yesh" alt="">
                   </div>
               </div>
           </div>
           <div class="d-flex justify-content-center">
               <div class="row">
                   <div class="col"></div>
               </div>
           </div>
           <div class="d-flex justify-content-end">
               <div id="menu_registerd">
                   <div class="row">
                       <div class="col">
                           <button class="btn btn-outline-primary">
                              Relat´rios
                           </button>
                       </div>
                       <div class="col">
                           <button class="btn btn-outline-primary">
                              Eventos
                           </button>
                       </div>
                       <div class="col">
                           <button class="btn btn-outline-primary">
                              SAC
                           </button>
                       </div>
                       <div class="col">
                           <button class="btn btn-outline-primary">
                              E-mails
                           </button>
                       </div>
                       <div class="col">
                           <div class="" id="btn_H" onclick="openNav(this)">
                               <div class="bar1"></div>
                               <div class="bar2"></div>
                               <div class="bar3"></div>
                           </div>
                       </div>
                   </div>
               </div> 
               <div id="menu_unregisterd">
                   <div class="row">
                       <div class="col">
                           <button class="btn btn-outline-primary">
                               Login
                           </button>
                       </div>
                       <div class="col">
                           <button class="btn btn-outline-primary">
                               Cadastrar
                           </button>
                       </div>
                       <div class="col">
                           <div class="" id="btn_H" onclick="openNav(this)">
                               <div class="bar1"></div>
                               <div class="bar2"></div>
                               <div class="bar3"></div>
                           </div>
                       </div>
                   </div> 
               </div>          
           </div>
       </div>
   </nav>    
</section>





  
@stop
