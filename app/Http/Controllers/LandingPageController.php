<?php

namespace App\Http\Controllers;
use App\Models\Page;
use App\Models\Plataforma_curso;
use App\Models\Plataforma_cursos_palestrantes;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index($id){
        $page = Page::find($id);
        //dd($page->components,$page->html,$page->styles,$page->css);
        return view('landingPage.index' ,compact('page'));
    }
    
    public function pages(){
        $pages = Page::where('pages.gjs_data',"!="," ")->get();
        //dd($pages);
        return view('landingPage.pages' ,compact('pages'));
    }

    public function addPage($idTemplate){
        $idTemplate++;
        return response()->json($idTemplate);
    }


    public function get_cursos($id){
        $cursos = Plataforma_curso
        ::join('plataforma_landingpages_cursos',
          'plataforma_cursos.id',
          'plataforma_landingpages_cursos.plataforma_curso_id')
        ->where("plataforma_cursos.customer_id",155)
        ->where("plataforma_landingpages_cursos.landingpage_id",$id)
        ->get();
        return response()->json($cursos);
    }


    public function get_palestrante($cursos_id){
        $ids = explode(",", $cursos_id);
        //dd($ids);
        $cursos_id = $ids;
        $palestrantes = Plataforma_cursos_palestrantes
        ::where("plataforma_cursos_palestrantes.customer_id",155)
        ->whereIn('plataforma_cursos_palestrantes.plataforma_curso_id', $cursos_id)
        ->orderBy('plataforma_cursos_palestrantes.plataforma_curso_id')
        ->get();
        return response()->json($palestrantes);
    }



    public function getcards(){
        $cards = [];        
        $url = "https://yeshmeet.yeshmeet.com.br/storage//YESH/landingpage/imagens/plataforma-yesh-layout-de-teste-foto-de-palestrante-1pngyesh_1616077381177556524.png";
        $id = "";
        for($dia = 11;$dia <14; $dia ++ ){
            $images = [];
            if($dia == 11){
                for ($contador = 0; $contador <= 8; $contador++) {
                    array_push($images,$url);
                }
                $id = "home";
            }elseif($dia == 12){
                $id = "profile";
            }else{
                $id = "contact";
            }            
            array_push($cards,['label' => $dia."/04","id" =>$id,"images" => $images]); 
        }
        return response()->json($cards);
    }

}
