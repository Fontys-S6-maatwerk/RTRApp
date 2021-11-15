import { shallowMount } from "@vue/test-utils";
import Profile from "@/views/Profile.vue";
import SolutionContext from "@/data/solution-context";
import UserContext from "@/data/user-context";
import { $t } from "../../mocks";

describe("Profile.vue", () => {
    it('is created', () => {

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

        expect(wrapper.text()).toBeDefined();
    })
})