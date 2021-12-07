import { shallowMount } from "@vue/test-utils";
import Solution from "@/views/Solution.vue";
import SolutionContext from "@/data/solution-context";
import UserContext from "@/data/user-context";
import { $t, $d, $route } from "../../mocks";
import Vue from "vue";

describe("Solution.vue", () => {
    it('is created', async() => {
        let id = "1";

        const wrapper = shallowMount(Solution, {
            mocks: {
                solutionContext: new SolutionContext(),
                userContext: new UserContext(),
                $route: $route({ solutionId: id }),
                $t: $t,
                $d: $d
            },
            propsData: {
                solutionId: id
            }
        });

        await Vue.nextTick();

        expect(wrapper.text()).toBeDefined();
        expect(wrapper.vm.$props.solutionId).toEqual(id);
        // expect(wrapper.vm.$data.solution.id).toEqual(id);
    })
})