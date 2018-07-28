<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/user/search', 'UserController@search');

Route::get('/teachers', 'TeacherController@all');
Route::get('/teacher/{user}/courses', 'Teacher\CourseController@index');
Route::get('/teacher/{user}/forums', 'Teacher\ForumController@index');

Route::get('/students', 'StudentController@all');
Route::get('/student/{user}/courses', 'Student\CourseController@index');
Route::get('/student/{user}/enrollment/{course}', 'Student\CourseController@getEnrollment');
Route::get('/student/{user}/forums', 'Student\ForumController@index');

Route::get('/course/{course}/students', 'Course\StudentController@index');
Route::get('/course/{course}/searchStudent', 'Course\StudentController@search');
Route::get('/course/{course}/forums', 'Course\ForumController@index');

Route::resource('forum', 'ForumController', ['only'=>'show']);
Route::get('/forum/{forum}/comments', 'Forum\CommentController@index');