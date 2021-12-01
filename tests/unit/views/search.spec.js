import { shallowMount } from "@vue/test-utils";
import Search from "@/views/Search.vue";
import SolutionContext from "@/data/solution-context";
import WeatherContext from "@/data/weather-context";

describe("Search.vue", () => {
    it('is created', () => {

        let sort = "Likes";

        const wrapper = shallowMount(Search, {
            mocks: {
                solutionContext: new SolutionContext(),
                weatherContext: new WeatherContext(),
            },
        });

        expect(wrapper.text()).toBeDefined();

        wrapper.vm.selectSortBy(sort);
        expect(wrapper.vm.$data.selectedSortBy).toEqual(sort);
    })
})