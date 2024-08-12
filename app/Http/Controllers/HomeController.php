<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function __invoke()
    {
        return Inertia::render('User/Frontend/Home/Index');
    }
}
