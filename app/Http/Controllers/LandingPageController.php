<?php

namespace App\Http\Controllers;
use App\Models\Page;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index($id){
        $page = Page::find($id);
        return view('landingPage.index' ,compact('page'));
    }
}
