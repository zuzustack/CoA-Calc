import { smelt } from "../data/smelting.js";
import { ore } from "../data/ore.js";
export class SmeltingController {
    showView() {
        $("#main").html(`
        <div class="main">
        <h4 class="title-content">Smelting Exp Calc</h4>
        <div class="content">
            <div class="form d-flex">
                <select id="select" class="val mr-4"></select>
                <div class="d-flex mr-4">
                    <p class="mr-3">Smelt:</p>
                    <input
                        value="0"
                        id="need"
                        class="val"
                        type="number"
                        min="1"
                        name=""
                        id=""
                    />
                </div>
                <div class="d-flex">
                    <p class="mr-3">
                        Require Item: <span class="item"></span>
                    </p>
                </div>
            </div>
            <div class="d-flex mt-3">
                <button class="calc">Calc</button>
            </div>
        </div>
    </div>
        `);

        let option = "";
        let require = "";

        smelt.forEach((e, index) => {
            option += `<option value="${index}">${e.name}</option>`;
        });

        smelt[0].ore_require.forEach((e) => {
            require += `${ore[e.ore_id].name}, `;
        });

        $(".calc").click(function (e) {
            let result = smelt[$("#select").val()].exp * $("#need").val();

            result = result.toString();

            if (result.length > 3) {
                let arr = result.split("").reverse();
                let count = 0;

                result = "";
                arr.forEach((e) => {
                    if (count % 3 == 0 && count != 0) {
                        result += ",";
                    }

                    result += e;

                    count++;
                });

                arr = result.split("").reverse();
                result = "";
                arr.forEach((e) => {
                    result += e;
                });
            }
            let req = "";
            smelt[0].ore_require.forEach((e) => {
                req += `<li>${ore[e.ore_id].name} : ${
                    e.val * $("#need").val()
                }</li>`;
            });

            $(".exp-player-get").html(`${result}`);
            $(".require-item").html(req);
        });

        $("#select").html(option);
        $(".item").html(require);
    }
}
