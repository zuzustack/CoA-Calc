import { ore } from "../data/ore.js";

export class MiningController {
    showView() {
        $("#main").html(`
        <div class="main">
        <h4 class="title-content">Mining Exp Calc</h4>
        <div class="content">
            <div class="form d-flex">
                <select id="select" class="val mr-4"></select>
                <div class="d-flex">
                    <p class="mr-3">Mine:</p>
                    <input
                        value="0"
                        id="need"
                        class="val"
                        type="number"
                        min=""
                        name=""
                        id=""
                    />
                </div>
            </div>
            <div class="d-flex mt-3">
                <button class="calc">Calc</button>
            </div>
        </div>
    </div>
        `);

        let option = "";

        ore.forEach((e, index) => {
            option += `<option value="${index}">${e.name}</option>`;
        });

        $("#select").html(option);

        $(".calc").click(function (e) {
            let result = ore[$("#select").val()].exp * $("#need").val();

            // readable value
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

            $(".exp-player-get").html(`${result}`);
            $(".require-item").html(`<li>None</li>`);
        });
    }
}
