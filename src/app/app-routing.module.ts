import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/List.component';
import { IntervalComponent } from './Observable/interval/interval.component';
import { OfAndfromComponent } from './observable/of-andfrom/of-andfrom.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { CancatMapComponent } from './observable/cancat-map/cancat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';

const routes: Routes = [
  {path:"promise", component:PromiseComponent},
  {path:"observable", component:ObservableComponent,
    children:[
      {path:'', component:ListComponent},
      {path:'fromEvent', component:FromEventComponent},
      {path:'interval', component:IntervalComponent},
      {path:'of&from', component:OfAndfromComponent},
      {path:'toArray', component:ToArrayComponent},
      {path:'customObservable', component:CustomObservableComponent},
      {path:'map', component:MapComponent},
      {path:'pluck', component:PluckComponent},
      {path:'filter', component:FilterComponent},
      {path:'tap', component:TapComponent},
      {path:'take', component:TakeComponent},
      {path:'retry', component:RetryComponent},
      {path:'debounce-time', component:DebounceTimeComponent},
      {path:'subject', component:SubjectComponent},
      {path:'replaySubjcet', component:ReplaySubjectComponent},
      {path:'asyncSubjcet', component:AsyncSubjectComponent},
      {path:'cancat', component:ConcatComponent},
      {path:'merge', component:MergeComponent},
      {path:'mergemap', component:MergeMapComponent},
      {path:'cancatmap', component:CancatMapComponent},
      {path:'switchmap', component:SwitchMapComponent}
    ]
  },
  {path:"**", redirectTo:'promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
