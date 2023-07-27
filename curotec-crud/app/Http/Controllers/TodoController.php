<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Services\TodoService;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public $todoService;
    public function __construct() {
        $this->todoService = new TodoService();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return $this->todoService->findAll();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return $this->todoService->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        //

        return $this->todoService->findById($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        //
        return $this->todoService->update($id, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $todo)
    {
        //
        return $this->todoService->remove($todo);
    }
}
