import { Injectable } from '@nestjs/common';
import { Task } from './task';
@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false },
    { id: 2, description: 'tarefa 2', completed: true },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }
}
