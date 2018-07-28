<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\User;
use Auth;

class UserController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $users = User::orderBy('name')
        ->whereHas($request->type)
        ->where(function($q)use($request){
            $q->orWhere('name', 'like', "%{$request->q}%")
            ->orWhere('last_name', 'like', "%{$request->q}%")
            ->orWhere('email', 'like', "%{$request->q}%")
            ->orWhere('username', 'like', "%{$request->q}%");
        })
        ->get();

        return response()->json($users);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function userLogged()
    {
        return response()->json(Auth::user());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function userRole()
    {
        $user = Auth::user();
        $role = '';

        if(count($user->administrators) == 1 )
            $role = 'admin';

        if(count($user->teachers) == 1 )
            $role = 'teacher';

        if(count($user->students) == 1 )
            $role = 'student';

        return response()->json($role);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if($request->ajax())
        {
            $user->fill($request->all());
            $user->password = bcrypt($request->password);
            $user->update();
            
            return response()->json($user);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeState(Request $request, User $user)
    {
        $user->state = $request->state;
        $user->update();

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function checkPasssword(Request $request)
    {
        $user = Auth::user();

        if (Hash::check('admin', $user->password)) {
            
            return response()->json([
                'state' => false,
                'changePassword'    => true
            ]);
        }

        return response()->json([
            'state' => true,
            'changePassword'    => false
        ]);
    } 

    public function changePassword(Request $request, User $user)
    {
        $request->validate([
            'password'  =>  'required'
        ],
        [
            'password.required' =>  'La contraseña es requerida'
        ]);

        if($request->ajax())
        {
            $user->password = bcrypt($request->password);
            $user->update();

            return response()->json([
                'state' =>  true
            ]);
        }
    }

    public function isActive(Request $request)
    {
        $user = Auth::user();

        if($user->state)
            return response()->json([
                'state' => true
            ]);

        return response()->json([
            'state' => false
        ]);
    }

    public function inactive(Request $request)
    {
        return view('inactive');
    }
}
