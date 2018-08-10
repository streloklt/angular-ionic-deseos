import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/index';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendiente.component.html'
})
export class PendientesComponent {
    constructor(public deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {}

    agregarLista() {
        const alerta =  this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                    if(data.titulo.length === 0) {
                        return;
                    }

                    this.navCtrl.push(AgregarComponent, {
                        titulo: data.titulo
                    });

                    console.log(data);
                }
            }]
        });

        alerta.present();
    }
}