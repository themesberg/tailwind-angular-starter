import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { CollapseComponent } from './collapse/collapse.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { DismissComponent } from './dismiss/dismiss.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopoverComponent } from './popover/popover.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DatepickerComponent } from './datepicker/datepicker.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'speed-dial', component: SpeedDialComponent },
  { path: 'dismiss', component: DismissComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
