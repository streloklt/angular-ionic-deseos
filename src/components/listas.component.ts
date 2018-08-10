import { Component, Input } from "@angular/core";
import { DeseosService } from '../services/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from "../models";
import { AgregarComponent } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    @Input() terminada: boolean = false;

    constructor(public deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {}

    listaSeleccionada(lista: Lista) {
        this.navCtrl.push(AgregarComponent, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {
        slidingItem.close();

        const alerta =  this.alertCtrl.create({
            title: 'Editar Nombre Lista',
            message: 'Editar el Nombre de la Lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Editar',
                handler: data => {
                    if(data.titulo.length === 0) {
                        return;
                    }
                    
                    lista.titulo = data.titulo;

                    this.deseosService.guardarStorage();
                }
            }]
        });

        alerta.present();
    }
}