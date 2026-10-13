import { Routes } from '@angular/router';
import { ComposantsPcComponent } from './composants-pc/composants-pc.component';
import { AddComposantPcComponent } from './add-composant-pc/add-composant-pc.component';
import { UpdateComposantPcComponent } from './update-composant-pc/update-composant-pc.component';

export const routes: Routes = [
    {path: "composants-pc", component : ComposantsPcComponent},
    {path: "add-composant-pc", component : AddComposantPcComponent},
    {path: "updateComposantPc/:id",  component: UpdateComposantPcComponent},
    {path: "", redirectTo: "composants-pc", pathMatch: "full"}
];
