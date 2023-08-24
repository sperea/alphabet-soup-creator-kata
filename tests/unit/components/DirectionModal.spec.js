import { mount } from '@vue/test-utils';
import ModalComponent from '@/components/DirectionModal.vue';

describe('ModalComponent', () => {
    it('renders modal with arrows and close button', () => {
        const wrapper = mount(ModalComponent, {
            propsData: {
                visible: true,
            },
        });

        expect(wrapper.find('.arrow').exists()).toBe(true);
        expect(wrapper.find('.close-button').exists()).toBe(true);
    });

    it('emits "selected-direction" event when arrow is clicked', async () => {
        const wrapper = mount(ModalComponent, {
            propsData: {
                visible: true,
            },
        });

        await wrapper.find('.arrow').trigger('click');
        expect(wrapper.emitted('selected-direction')).toBeTruthy();
    });


    // Add more tests as needed
});