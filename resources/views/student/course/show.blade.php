@extends('layout.app')

@section('section')
	<student-course-show :course="{{$course}}"></student-course-show>
@endsection