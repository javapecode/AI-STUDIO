import { Injectable, signal } from '@angular/core';
import { Asset } from '../../shared/interfaces/asset.interface';



@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private readonly assetsSignal = signal<Asset[]>([]);

  readonly assets = this.assetsSignal.asReadonly();

  add(asset: Asset): void {

    this.assetsSignal.update(items => [...items, asset]);

  }

  remove(id: string): void {

    this.assetsSignal.update(items =>
      items.filter(asset => asset.id !== id)
    );

  }

  clear(): void {

    this.assetsSignal.set([]);

  }

}