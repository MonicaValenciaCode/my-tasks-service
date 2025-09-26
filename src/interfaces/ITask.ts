interface ITask {
  task_id: number;
  task_name: string;
  frequency: string;
  category: ITaskCategory;
  start_date: Date;
  history: ITaskHistory[];
  due_date?: Date;
}
