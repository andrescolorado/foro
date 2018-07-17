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
Route::get('/teacher/{teacher}/courses', 'TeacherController@courses');

Route::get('/students', 'StudentController@all');