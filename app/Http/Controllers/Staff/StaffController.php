<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    //
    public function index($id){
        $page = Page::find($id);
        return view('staff.index' ,compact('page'));
    }
}
