<?php

namespace App\Http\Controllers\Forum;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

// use App\Comment;
use App\Forum;
class CommentController extends Controller
{
    public function index(Forum $forum)
    {
    	$comments = $forum->comments()
    	->with('student.user')
    	->orderBy('pivot_id', 'desc')
    	->get();
    		
    	return response()->json($comments);
    }
}
