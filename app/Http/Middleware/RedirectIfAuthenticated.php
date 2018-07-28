<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {

            $user = Auth::user();

            if(count($user->administrators) == 1 )
                return redirect('/admin'); 

            if(count($user->teachers) == 1 )
                return redirect('/teacher'); 

            if(count($user->students) == 1 )
                return redirect('/student'); 
        }

        return $next($request);
    }
}
