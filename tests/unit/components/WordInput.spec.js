import { mount } from '@vue/test-utils';
import WordInputComponent from '@/components/WordInput.vue';

describe('WordInputComponent', () => {
    it('adds a word to the list when clicking "Agregar palabra"', async () => {
        const wrapper = mount(WordInputComponent);
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        await input.setValue('Test Word');
        await button.trigger('click');

        expect(wrapper.vm.words).toContain('Test Word');
        expect(wrapper.vm.word).toBe('');
    });

    it('activates and deactivates words when "Activar" button is clicked', async () => {
        const wrapper = mount(WordInputComponent, {
            data() {
                return {
                    words: ['Word 1', 'Word 2'],
                };
            },
        });

        const activateButtons = wrapper.findAll('button');

        // Click the first "Activar" button
        await activateButtons[0].trigger('click');
        expect(wrapper.vm.activeWordIndex).toBe(null);

        // Click the first "Desactivar" button
        await activateButtons[0].trigger('click');
        expect(wrapper.vm.activeWordIndex).toBe(null);

        // Click the second "Activar" button
        await activateButtons[1].trigger('click');
        expect(wrapper.vm.activeWordIndex).toBe(0);

        // Click the second "Desactivar" button
        await activateButtons[1].trigger('click');
        expect(wrapper.vm.activeWordIndex).toBe(null);
    });

    it('displays the correct longest word length', async () => {
        const wrapper = mount(WordInputComponent, {
            data() {
                return {
                    words: ['Apple', 'Banana', 'Cherry'],
                };
            },
        });

        expect(wrapper.vm.longestWordLength).toBe(6); // Length of "Banana"
    });

    it('deletes a word when "Eliminar" button is clicked', async () => {
        const wrapper = mount(WordInputComponent, {
            data() {
                return {
                    words: ['Word 1', 'Word 2'],
                };
            },
        });

        const deleteButtons = wrapper.findAll('button');

        // Asumimos que el botón de eliminar es el tercero en la lista para la primera palabra
        await deleteButtons[2].trigger('click');

        expect(wrapper.vm.words).not.toContain('Word 1');
    });
});