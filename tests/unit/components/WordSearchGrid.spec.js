import { mount } from '@vue/test-utils';
import GridComponent from '@/components/WordSearchGrid.vue';

describe('GridComponent', () => {
    it('shows the DirectionModal when a grid cell is clicked', async () => {
        const wrapper = mount(GridComponent);
        const gridCell = wrapper.find('.grid-cell');

        await gridCell.trigger('click');

        const directionModal = wrapper.findComponent({ name: 'DirectionModal' });
        expect(directionModal.exists()).toBe(true);
    });

    it('hides the DirectionModal when clicking outside', async () => {
        const wrapper = mount(GridComponent);
        const gridCell = wrapper.find('.grid-cell');

        await gridCell.trigger('click');

        const directionModal = wrapper.findComponent({ name: 'DirectionModal' });
        expect(directionModal.exists()).toBe(true);

    });

    it('handles direction selection when DirectionModal emits "selected-direction"', async () => {
        const wrapper = mount(GridComponent);
        const gridCell = wrapper.find('.grid-cell');

        await gridCell.trigger('click');

        const directionModal = wrapper.findComponent({ name: 'DirectionModal' });
        expect(directionModal.exists()).toBe(true);

        const selectedDirection = 'up';
        await directionModal.vm.$emit('selected-direction', selectedDirection);

        expect(wrapper.vm.isModalVisible).toBe(false);
    });
});