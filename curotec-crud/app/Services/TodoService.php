<?php

namespace App\Services;

use App\Models\Todo;
use App\Repositories\TodoRepository;

class TodoService
{
    public $todoRepository;
    public function __construct() {
        $this->todoRepository = new TodoRepository();
    }
    public function findAll() {
        return $this->todoRepository->findAll();
    }

    public function findById($id) {
        return $this->todoRepository->findById($id);
    }

    public function create($todo) {
        return $this->todoRepository->create($todo);
    }

    public function remove($id) {
        return $this->todoRepository->remove($id);
    }
    public function update($id,$todo) {
        return $this->todoRepository->update($id,$todo);
    }
}
