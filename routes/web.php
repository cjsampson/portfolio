<?php

Route::get('/', [
    'uses' => 'MainController@index',
    'as' => 'app',
]);
Route::get('/about', [
    'uses' => 'MainController@index',
    'as' => 'app',
]);
Route::get('/portfolio', [
    'uses' => 'MainController@index',
    'as' => 'app',
]);
Route::get('/resume', [
    'uses' => 'MainController@index',
    'as' => 'Main',
]);
Route::get('/contact', [
    'uses' => 'MainController@index',
    'as' => 'home',
]);
