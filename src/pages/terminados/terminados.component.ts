import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../../models/index';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {
    constructor(public deseosService: DeseosService,
        private navCtrl: NavController) {}
}