<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $pageTitle = "Welcome to My Website";
        
        // Pass the data to the view
        return view('home', compact('pageTitle'));
    }
}
