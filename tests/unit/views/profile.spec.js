import { shallowMount } from "@vue/test-utils";
import Profile from "@/views/Profile.vue";
import SolutionContext from "@/data/solution-context";
import UserContext from "@/data/user-context";
import { $t } from "../../mocks";
import Vue from "vue";

describe("Profile.vue", () => {
    it('is created', async() => {

        //require.context is a webpack-specific feature, 
        //so it doesn't work in jest. You can try to mock it somehow
        const wrapper = shallowMount(Profile, {
            mocks: {
                solutionContext: new SolutionContext(),
                userContext: new UserContext(),
                $t: $t
            },
            propsData: {
                userId: "1"
            }
        });

        await Vue.nextTick();

        expect(wrapper.text()).toBeDefined();
    })
})