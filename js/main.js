import { MiningController } from "../controllers/MiningController.js";
import { WoodcutController } from "../controllers/WoodcutController.js";
import { FishingController } from "../controllers/FishingController.js";
import { SmeltingController } from "../controllers/SmeltingController.js";

const MiningCtrl = new MiningController();
const WoodcutCtrl = new WoodcutController();
const FishingCtrl = new FishingController();
const SmeltCtrl = new SmeltingController();

// wda

MiningCtrl.showView();

$(".list-item").click(function (e) {
    let v = e.target.id;
    eval(`${v}Ctrl.showView()`);
});
