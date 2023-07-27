<?php

namespace App\Repositories;

use App\Models\Todo;

class TodoRepository
{
    public function findAll() {
        return Todo::all();
    }

    public function findById($id) {
        return Todo::find($id);
    }

    public function create($todo) {
        return Todo::create($todo);
    }
    public function update($id,$todo) {
        return Todo::find($id)->update($todo);
    }

    public function remove($id) {
        return Todo::destroy($id);
    }
}
