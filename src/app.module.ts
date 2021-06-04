import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskService } from './tasks/shared/task.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
