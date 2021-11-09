import { shallowMount } from "@vue/test-utils";
import Solution from "@/views/Solution.vue";
import SolutionContext from "@/data/solution-context";

describe("Solution.vue", () => {
    it('is created', () => {
        const wrapper = shallowMount(Solution, {
            data: () => {
                return {
                    solutionContext: new SolutionContext()
                }
            }
        })
        expect(wrapper.text()).toBeDefined();
    })
})