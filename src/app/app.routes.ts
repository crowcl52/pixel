import { RouterModule, Routes } from '@angular/router';
import { LandingViewComponent } from "./views/landing-view/landing-view.component";
import { ServiceViewComponent } from './views/service-view/service-view.component';
import { BigFormatComponent } from './views/service-view/big-format/big-format.component';
import { DigitalMediaComponent } from './views/service-view/digital-media/digital-media.component';
import { DigitalPrintComponent } from './views/service-view/digital-print/digital-print.component';
import { EstampComponent } from './views/service-view/estamp/estamp.component';
import { FinishedComponent } from './views/service-view/finished/finished.component';
import { OffsetComponent } from './views/service-view/offset/offset.component';
import { PackComponent } from './views/service-view/pack/pack.component';





const APP_ROUTES:Routes=[
    {path: '', component: LandingViewComponent},
    {path: 'servicios', component: ServiceViewComponent,
    children:[
        {path: 'big', component: BigFormatComponent},
        {path: 'digital', component: DigitalMediaComponent},
        {path: 'print', component: DigitalPrintComponent},
        {path: 'Estamp', component: EstampComponent},
        {path: 'finished', component: FinishedComponent},
        {path: 'offset', component: OffsetComponent},
        {path: 'pack', component: PackComponent},
        {path: '**', pathMatch: 'full', redirectTo: 'big'}
    ]
    },
    // {path: 'servicios', component: ServiciosComponent,
    // children:[
    //     {path: 'animacion', component: AnimacionComponent},
    //     {path: 'branding', component: BrandingComponent},
    //     {path: 'desarrollo', component: DesarrolloComponent},
    //     {path: 'fotos', component: FotoComponent},
    //     {path: 'marketing', component: MarketingComponent},
    //     {path: 'publicidad', component: PublicidadComponent},
    //     {path: '**', pathMatch: 'full', redirectTo: 'animacion'}
    // ]
    // },
    // {path: 'servicios', component: ServiciosComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES, {useHash:true});