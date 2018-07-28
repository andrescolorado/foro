<?php

namespace App\Http\Controllers\Teacher;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Teacher;

class ForumController extends Controller
{
    public function index(User $user)
    {   
        $teacher = $user->teachers()->first();
        
    	$forums = $teacher->courses()
    	->whereHas('forums')
    	->with('forums.comments.student.user')
        ->get()
        ->pluck('forums')
        ->collapse();

        $filter = $forums->sortByDesc('id');

        // dd($filter);
        return response()->json($filter);
    }
}
