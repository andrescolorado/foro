@extends('layout.app')

@section('section')
	<teacher-forum-show :course="{{{$course}}}" :forum="{{$forum}}"></teacher-forum-show>
@endsection