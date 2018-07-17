<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        if($this->attemptLogin($request))
            return $this->sendLoginResponse($request);


        return response()->json([
            'status'    =>  false,
            'message'   =>  'Verifica tus datos'
        ], 422);
    }

    /**
     * Validate the user login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            'username'  => 'required|string',
            'password'  => 'required|string',
        ],[
            'username.required' =>  'El nombre de usuario es requerido',
            'password.required' =>  'La contraseña es requerida',
        ]);
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt([
            'username'  =>  $request->username,
            'password'  =>  $request->password 
        ]);
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        $url = $this->getUrlByRole();

        return response()->json([
            'status'     =>  true,
            'redirect'  =>  $url,
            'user'      =>  Auth::user()
        ]);
    }

    /**
     * Get Role from user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function getUrlByRole()
    {
        $user = Auth::user();

        if(count($user->administrators) == 1 )
            return "/admin";

        if(count($user->teachers) == 1 )
            return "/teacher";

        if(count($user->students) == 1 )
            return "/student";

        return null;
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        // dd($request->all());
        $this->guard()->logout();

        $request->session()->invalidate();

        return $this->loggedOut($request) ?: redirect('/');
    }
}
