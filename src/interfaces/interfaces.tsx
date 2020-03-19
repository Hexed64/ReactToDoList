export interface IToDoListProps {

}

export interface IToDoItemProps {
    value: ITask,
    onDelete: any
    onDone: any
}

export interface ITask {
    name: string,
    description: string,
    taskId: number,
    isDone: boolean
}

export interface IToDoListState {
    tasks: Map<number, ITask>
    newTaskName: string
    futureTaskId: number
}
