import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation.vue", () => {

    it('has correct amount of navItems', () => {
        const wrapper = shallowMount(Navigation);

        expect(wrapper.text()).toBeDefined();
        expect(wrapper.vm.$data.navItems.length).toBe(4);
        expect(wrapper.vm.$data.navItems).toContainEqual({ title: 'Home', path: '/home', icon: 'mdi-home' });
    })
})