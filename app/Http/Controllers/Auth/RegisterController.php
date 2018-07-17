<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

use App\User;
use App\Student;
use App\Teacher;
use App\Administrator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->saveUserType($user, $request->typeuser);

        $this->guard()->login($user);

        return response()->json([
            'user'      =>  $user,
            'redirect'  =>  $this->redirectPath()
        ]);
        // return $this->registered($request, $user)
        //                 ?: redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'                  => 'required|string|max:255',
            'last_name'             => 'required|string|max:255',
            'username'              => 'required|unique:users|max:255',
            'typeuser'              => 'required',
            'email'                 => 'required|string|email|max:255|unique:users',
            'password'              => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required'
        ],[
            'name.required'         =>  'El nombre es requerido',
            'last_name.required'    =>  'El apellido es requerido',
            'username.required'     =>  'El nombre de usuario es requerido',
            'username.unique'       =>  'Este nombre de usuario ya existe',
            'typeuser.required'     =>  'El tipo de usuario es requerido',
            'email.required'        =>  'El correo electronico es requerido',
            'email.email'           =>  'Ingrese una dirección de correo electronico valida',
            'email.unique'          =>  'Esta dirección de correo electronico ya esta siendo utilizada',
            'password.required'     =>  'Ingrese la contraseña',
            'password.min'          =>  'La contraseña debe tener minimo 6 caracteres',
            'password.confirmed'    =>  'Las contraseñas no son iguales',
            'password_confirmation.required'    =>  'Confirme la contraseña'
        ]);
    }

    public function saveUserType(User $user, $type)
    {
        if($type == 'student')
        {
            $user->students()->save(
                new Student([
                    'user_id'   =>  $user->id
                ])
            );

            $this->redirectTo = "/student";
        }
        elseif($type == 'teacher')
        {
            $user->teachers()->save(
                new Teacher([
                    'user_id'   =>  $user->id
                ])
            );
            $this->redirectTo = "/teacher";
        }
        elseif($type == 'administrator')
        {
            $user->administrators()->save(
                new Administrator([
                    'user_id'   =>  $user->id
                ])
            );
            $this->redirectTo = "/admin";
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name'      => $data['name'],
            'last_name' => $data['last_name'],
            'username'  => $data['username'],
            'email'     => $data['email'],
            'password'  => Hash::make($data['password']),
        ]);
    }
}
