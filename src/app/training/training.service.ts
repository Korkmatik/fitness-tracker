import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private runningExercise!: Exercise;

    getAvailableExercises() {
        return this.availableExercises;
    }

    startExercise(selectedId: string) {
        const exercise = this.availableExercises.find(ex => ex.id == selectedId);
        if(exercise != undefined) {
            this.runningExercise = exercise;
            this.exerciseChanged.next({...this.runningExercise});
        }
    }
}