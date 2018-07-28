<?php

namespace App\Http\Controllers;

use App\Course;
use App\Forum;
use App\User;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        if($request->ajax()){
            $user = User::findOrFail($request->user_id);
            $user->teachers()->first()->courses()->create([
                'name'  =>  $request->name,
                'description'   =>  $request->description
            ]);

            return response()->json([
                'state' =>  'Ok'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        if($request->ajax())
        {
            $course->fill($request->all());
            $course->update();

            return response()->json($course);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Course $course)
    {
        if($request->ajax())
        {
            $course->delete();
            
            return response()->json($course);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @param  \App\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function forum(Course $course, Forum $forum)
    {
        return view('teacher.course.forum')
        ->with('course', $course)
        ->with('forum', $forum);
    }
}
