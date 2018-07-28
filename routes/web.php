<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout');

Route::post('/register', 'Auth\RegisterController@register');
Route::get('/register', 'Auth\RegisterController@showRegistrationForm');

Route::resource('user', 'UserController', ['only' => ['update', 'store', 'destroy'] ])->middleware('auth');
Route::put('user/{user}/changePassword', 'UserController@changePassword')->middleware('auth');
Route::get('/userLogged', 'UserController@userLogged')->middleware('auth');
Route::get('/userRole', 'UserController@userRole')->middleware('auth');
Route::get('/checkPasssword', 'UserController@checkPasssword')->middleware('auth');
Route::get('/inactive', 'UserController@inactive')->middleware('auth');
Route::get('/activeStatus', 'UserController@isActive')->middleware('auth');

Route::put('/user/changeState/{user}', 'UserController@changeState');

Route::resource('enrollment', 'EnrollmentController');
Route::resource('course', 'CourseController', ['only'=>['update','store','destroy']])->middleware('auth');
Route::get('course/{course}/forum/{forum}', 'CourseController@forum');
Route::resource('forum', 'ForumController', ['only'=>['update', 'store', 'destroy']])->middleware('auth');
Route::post('/commentStore', 'EnrollmentController@createComment')->middleware('auth');

Route::group(['prefix' => 'teacher', 'middleware'=>['auth'] ], function() {
    
    Route::get('/', 'TeacherController@index');

    Route::get('/courses', 'TeacherController@courses');
    Route::resource('course', 'Teacher\CourseController', ['except'=>'index']);
    Route::get('course/{course}/forum/{forum}', 'CourseController@forum');
    Route::put('course/{course}/updateEnrollment', 'Teacher\CourseController@updateEnrollment');

    Route::get('/forums', 'TeacherController@forums');

});

Route::group(['prefix' => 'student', 'middleware'=>['auth'] ], function() {

	Route::get('/', 'StudentController@index');

	Route::get('/courses', 'StudentController@courses');
    Route::get('/course/{course}', 'Student\CourseController@show');
	Route::get('course/{course}/forum/{forum}', 'Student\CourseController@forum');

    Route::get('/forums', 'StudentController@forums');

});

Route::group(['prefix' => 'admin', 'middleware'=> ['auth'] ], function() {

    Route::get('/', 'AdministratorController@teachers');	
    Route::get('/teacher', 'AdministratorController@teachers');
    Route::get('/student', 'AdministratorController@students');

});