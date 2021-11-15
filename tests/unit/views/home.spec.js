import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import SolutionContext from "@/data/solution-context";

describe("Home.vue", () => {
    it('is created', () => {

        const wrapper = shallowMount(Home, {
            mocks: {
                solutionContext: new SolutionContext(),
            }
        });

        expect(wrapper.text()).toBeDefined();
    })
})