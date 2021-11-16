import { shallowMount } from "@vue/test-utils";
import CreateSolution from "@/views/CreateSolution.vue";
import SolutionContext from "@/data/solution-context";
import WeatherContext from "@/data/weather-context";
import { $t } from "../../mocks";
import Vue from "vue";

describe("CreateSolution.vue", () => {
    it('is created', async() => {
        //will change to string
        let id = 1;

        const wrapper = shallowMount(CreateSolution, {
            mocks: {
                solutionContext: new SolutionContext(),
                weatherContext: new WeatherContext(),
                $t: $t,
            },
            propsData: {
                solutionId: id
            }
        });

        await Vue.nextTick();

        expect(wrapper.text()).toBeDefined();
    })
})