<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('master');
    }
    public function admin()
    {
        return view('admin');
    }


    public function add(Request $request)
    {
        $img = $request->file('bgImg');
        $imgName = time() . rand() . '.' . $img->extension();
        $img->move(public_path('frontEnd/assets/img/home/bg'), $imgName);
        $bgImg = 'frontEnd/assets/img/home/bg/' . $imgName;

        $home = new Home();
        $home->name = $request->name;
        $home->focusTitle = $request->focusTitle;
        $home->shortDescription = $request->shortDescription;
        $home->bgImg = $bgImg;
        $home->bgColor = $request->bgColor;
        $home->opacity = $request->opacity;
        $home->save();
    }
}
