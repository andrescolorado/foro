<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Student;
use App\User;
use App\Course;
use App\Forum;

class CourseController extends Controller
{
    public function index(Request $request, User $user)
    {
    	$student = $user->students()->first();

        if($request->type == 'withEnrollment')
            return $this->withErollment($request, $student);    

        return $this->enrollments($request, $student);
    }

    public function enrollments(Request $request, Student $student)
    {
        $courses = $student->courses()
        ->get();

        return response()->json($courses);
    }


    public function withErollment(Request $request, Student $student)
    {
        $courses = Course::whereDoesntHave('students', function($q) use ($student){
            $q->where('student_id', $student->id);
        })
        ->get();

        return response()->json($courses);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        return view("student.course.show", compact('course'));
    }

    public function forum(Course $course, Forum $forum)
    {
        return view("student.forum.show")
        ->with('course', $course)
        ->with('forum', $forum);
    }

    public function getEnrollment(User $user, Course $course)
    {
        $student = $user->students()->first();

        $enrollment = $student->courses()
        ->where('course_id', $course->id)
        ->first();

        return response()->json($enrollment);
    }
}
