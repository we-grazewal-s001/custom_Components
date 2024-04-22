import {mount} from "@vue/test-utils";
import Button from "../components/Button/Button.vue";


describe('Custom button test cases for functionality', function () {
    test('check if component is being imported in line',async()=>{
        const comp=  await import('../components/Button/Button.vue')
        expect(comp).toBeDefined()
    })
    test('check if component is being mounted',async()=>{
        const comp= await mount(Button)
        expect(comp).toBeDefined()
    })
    test('label is being rendered', () => {
        const label = 'Button';
        const comp = mount(Button, {
            propsData: {
                label: label
            }
        });
        const tag=comp.find('#label')
        expect(tag.text()).toContain(label);
    });
    test('button is being clicked ', async() => {
        const label = 'Button';
        const comp =await mount(Button);

        const button=  comp.find('[data-testId="button"]').trigger('click')

        expect(button).toBeTruthy()
    });

    test('emitting event on click when disable', async() => {
        const label = 'Button';
        const comp =await mount(Button,{
            propsData:{
                label,
                disabled:true
            }
        });
        const button=await comp.find("button").trigger('click')
        expect(button).toBeFalsy()


    });
    test('emitting handle-click on button click ', async() => {
        const label = 'Submit';
        const comp =await mount(Button,{
            propsData:{
                label:label,
                type:'submit'
            }
        });
        comp.find("button").trigger('click')

        const emiter=await comp.emitted('handle-click')

        expect(emiter).toBeTruthy()
    });

    test('form with type submit on enter button clicked',async()=>{
        const label = 'Submit';
        const comp =await mount(Button,{
            propsData:{
                label:label,
                type:'submit'
            }
        });

        const button = comp.find('[data-testId="button"]')
        expect(button.attributes('type')).toBe('submit');

    })

    test('check if button is showing loader when loading is true',async()=>{
        const val='Loading'
        const comp =await mount(Button,{
            propsData:{
                severity:'primary',
                loading:true,
                label:val

            }
        });
        let button=await comp.find('#Loading_text')

        expect(button.text()).toContain(val)

    })


});


describe('Custom button test cases for background, text and hover color', function () {

    test('check if button are raised on use of raised prop ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'label',
                raised:true
            }
        });
        let button=comp.find('[data-testId="button"]')
        expect(button.classes()).toContain('shadow');
    })
    test('check if button are circular on use of rounded prop ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                rounded:true
            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('rounded-full');
    })
    test('check if button background is teal  in case of primary severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Primary',
                severity:'primary'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-emerald-400');
        expect(button.classes()).toContain('hover:bg-emerald-500')
        expect(button.classes()).toContain('text-white')
    })

    test('check if button background is red  in case of danger severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Danger',
                severity:'danger'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-red-400');
        expect(button.classes()).toContain('hover:bg-red-500')
        expect(button.classes()).toContain('text-white')
    })
    test('check if button background is orange  in case of warning severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Warning',
                severity:'warning'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-orange-400');
        expect(button.classes()).toContain('hover:bg-orange-500')
        expect(button.classes()).toContain('text-white')
    })
    test('check if button background is green  in case of success severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Success',
                severity:'success'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-green-400');
        expect(button.classes()).toContain('hover:bg-green-500')
        expect(button.classes()).toContain('text-white')
    })

    test('check if button background is blue  in case of info severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Information',
                severity:'info'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-blue-400');
        expect(button.classes()).toContain('hover:bg-blue-500')
        expect(button.classes()).toContain('text-white')
    })

    test('check if button background is purple  in case of help severity ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Help',
                severity:'help'

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('bg-purple-400');
        expect(button.classes()).toContain('hover:bg-purple-500')
        expect(button.classes()).toContain('text-white')
    })

    test('check if outlined is being applied ',async()=>{
        const comp =await mount(Button,{
                propsData:{
                    label:'Help',
                    severity:'help',
                    outlined:true

                }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('border');
        expect(button.classes()).toContain('hover:bg-purple-50')
        expect(button.classes()).toContain('text-purple-600')
    })
    test('check if bg-hover effect is being applied ',async()=>{
        const comp =await mount(Button,{
            propsData:{
                label:'Help',
                severity:'help',
                outlined:true

            }
        });
        let button=comp.find('[data-testId="button"]')

        expect(button.classes()).toContain('border');
        expect(button.classes()).toContain('hover:bg-purple-50')
        expect(button.classes()).toContain('text-purple-600')
    })
});
describe('Custom styles',()=>{
    test('check if custom style using inline style is being applied', async function(assert) {
        const customStyle='background-color: indianred; border-radius: 50%;'
            const comp= await mount(Button,{
                props:{
                    styleName:customStyle
                }
            })
        await comp.vm.$nextTick();
        const buttonElement = comp.find('[data-testId="button"]');
        expect(buttonElement.attributes('style')).toEqual(customStyle);
    });
    test('check if custom className  is being applied', async function(assert) {
        let customClass='bg-pink-200'
        const comp= await mount(Button,{
            props:{
                className: customClass
            }
        })
        await comp.vm.$nextTick();
        const button = comp.find('[data-testId="button"]');
        expect(button.classes()).toContain(customClass)
    });

})

describe('Button Accessibility', () => {
    let comp;

    beforeEach(() => {
        comp = mount(Button, {
            attachTo: document.body,
            props: {
                label: 'Submit'
            },


        });
    });

    afterEach(() => {
        comp.unmount();
    });


    test('should be focusable using keyboard navigation', async () => {
        const wrapper = await mount(Button)
        const button=await wrapper.find('button')
         await  button.trigger('keydown.tab');


        expect(document.activeElement).not.toBe(button);
    });

    test('should have proper aria attributes for accessibility', () => {
        const button = comp.find('[data-testId="button"]');
        expect(button.attributes('role')).toBe('button');
        expect(button.attributes('aria-label')).toBe('Submit');
        expect(button.attributes('aria-disabled')).toBe('false');
    });

    test('should work with screen readers', () => {
        const button = comp.find('[data-testId="button"]');
        expect(button.attributes('aria-hidden')).toBeUndefined();
        expect(button.attributes('role')).toBe('button');
        expect(button.text()).toBe('Submit');
    });
});

describe('Button Performance', () => {
    let comp;

    beforeEach(() => {
        comp = mount(Button);
    });

    afterEach(() => {
        comp.unmount();
    });

    test('loading time should be within acceptable limits', () => {
        const startTime = performance.now();
        mount(Button);
        const endTime = performance.now();
        const loadingTime = endTime - startTime;
        expect(loadingTime).toBeLessThan(100);
    });

    test('responsiveness should be within acceptable limits', () => {
        const button = comp.find('[data-testId="button"]');
        const startTime = performance.now();
        button.trigger('click');

        return new Promise(resolve => {
            setTimeout(() => {
                const endTime = performance.now();
                const responseTime = endTime - startTime;
                expect(responseTime).toBeLessThan(600);
                resolve();
            }, 500);
        });
    });


});
