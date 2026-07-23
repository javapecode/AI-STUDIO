import { EditorCommand } from '../../shared/interfaces/editor-command.interface';
import { AssetService } from '../services/asset.service';
import { Asset } from '../../shared/interfaces/asset.interface';


export class AddAssetCommand implements EditorCommand {


  constructor(
    private assetService: AssetService,
    private asset: Asset
  ){}



  execute(): void {

    this.assetService.add(this.asset);

  }



  undo(): void {

    this.assetService.remove(this.asset.id);

  }


}