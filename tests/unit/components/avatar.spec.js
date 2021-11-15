import { shallowMount } from "@vue/test-utils";
import Avatar from "@/components/Avatar.vue";

describe("Avatar.vue", () => {
    it('has received the correct user prop', () => {
        const user = {
            id: 1,
            firstName: 'Jan',
            lastName: 'Janssen',
            profileImage: ''
        }
        const wrapper = shallowMount(Avatar, {
            propsData: { user },
            stubs: ['router-link']
        })
        expect(wrapper.text()).toBeDefined();
        expect(wrapper.vm.$props.user).toEqual(user);
        expect(wrapper.vm.getInitials()).toEqual(user.firstName.first + user.lastName.first)
    })
})