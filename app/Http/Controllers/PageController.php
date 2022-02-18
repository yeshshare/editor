<?php

namespace App\Http\Controllers;

//use app\Models\Page;
use Illuminate\Http\Request;
use Dotlogics\Grapesjs\App\Traits\EditorTrait;
use App\Models\User;
use App\Models\Page;

class PageController extends Controller
{
    use EditorTrait;




    public function editor(Request $request, Page $page)
    {
        return $this->show_gjs_editor($request, $page);
    }

    
}