import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import SolutionContext from "@/data/solution-context";
import Vue from "vue";

describe("Home.vue", () => {
    it('is created', async() => {

        const wrapper = shallowMount(Home, {
            mocks: {
                solutionContext: new SolutionContext(),
            }
        });

        await Vue.nextTick();

        expect(wrapper.text()).toBeDefined();
    })
})