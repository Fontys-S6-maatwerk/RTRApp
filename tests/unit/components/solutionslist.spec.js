import { shallowMount } from "@vue/test-utils";
import SolutionsList from "@/components/SolutionsList.vue";
import { solutions, $d, $t } from "../../mocks";

describe("SolutionsList.vue", () => {

    it('has created correctly', () => {
        const wrapper = shallowMount(SolutionsList, {
            propsData: {
                solutions: solutions,
                onProfile: true,
            },
            mocks: {
                $d: $d,
                $t: $t,
            }
        });

        expect(wrapper.text()).toBeDefined();
        expect(wrapper.vm.$data.dialog).toBe(false);
    })
})