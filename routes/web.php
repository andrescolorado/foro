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

Route::get('/userLogged', 'UserController@userLogged')->middleware('auth');
Route::put('/user/changeState/{user}', 'UserController@changeState');

Route::resource('course', 'CourseController', ['only'=>['update','store','destroy']]);
Route::resource('forum', 'ForumController', ['only'=>['update', 'store', 'destroy']]);

Route::group(['prefix' => 'teacher'], function() {
    
    Route::get('/', 'TeacherController@index');

    Route::get('/courses', 'Teacher\CourseController@index');
    Route::resource('course', 'Teacher\CourseController', ['except'=>'index']);
    Route::put('course/{course}/updateEnrollment', 'Teacher\CourseController@updateEnrollment');


});

Route::group(['prefix' => 'admin', 'middleware'=> ['auth'] ], function() {

    Route::get('/', 'AdministratorController@teachers');	
    Route::get('/teacher', 'AdministratorController@teachers');
    Route::get('/student', 'AdministratorController@students');

});