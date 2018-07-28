@extends('layout.app')

@section('section')
	<student-forum-show :course="{{$course}}" :forum="{{$forum}}"></student-forum-show>
@endsection