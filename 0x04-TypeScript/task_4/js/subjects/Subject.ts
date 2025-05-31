import { Teacher } from './Teacher';

export abstract class Subject {
    protected teacher?: Teacher;

    setTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }

    abstract getRequirements(): string;
    abstract getAvailableTeacher(): string;
}