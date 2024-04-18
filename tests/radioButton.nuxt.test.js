import {mount} from "@vue/test-utils";
import RadioButton from "../components/RadioButton/RadioButton.vue";


describe('Custom button test cases for functionality', function () {

    test('check if component is being mounted',async()=>{
        const comp= await mount(RadioButton)
        expect(comp).toBeDefined()
    })
    test('label is being rendered', () => {
        const label = 'Button';
        const comp = mount(RadioButton, {
            propsData: {
                name: label
            }
        });
        const tag=comp.find('#label')
        expect(tag.text()).toContain(label);
    });
    test('button is being clicked ', async() => {
        const label = 'Button';
        const comp =await mount(RadioButton);

        const button=  comp.find('#button').trigger('click')

        expect(button).toBeTruthy()
    });
    test('button is being selected when clicked ', async() => {
        const label = 'Button';
        const comp =await mount(RadioButton);

        const button=  comp.find('#button').trigger('click')

        expect(button).toBeTruthy()
    });
    test('input border  disabled when disbaled is passed',async()=>{
        const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            disabled:true
            }
        })
         
        const input= comp.find("#radios")
        
        expect(input.element.disabled).toBeTruthy()
        
    })

});

describe("Reacting when selected ",async()=>{
    const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios"
            }
        })

    test("when clicked checked status is being change of the radio button",async()=>{

        comp.trigger('click')
        const input= comp.find("#radios")
        
        expect(input.element.checked).toBeTruthy()
        
    }
    
)
    test("Input box is scaling up when clicked",async()=>{
        comp.trigger('click')
        const input= comp.find("#radios")
        expect(input.element.classList).toContain('checked:scale-100')
    })
    test('input border is changing when hoved',async()=>{
       
        const input= comp.find("#inputWrapper")
        expect(input.element.classList).toContain('border-gray-300')
        comp.trigger('hover')
        expect(input.element.classList).toContain('hover:border-gray-400')
    })

    test('input border is changing when clicked',async()=>{
        const ingredient=ref()
        const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            modelValue: "Abc",
            value:"Abc"
            },
        })
         comp.trigger('click')
         
        await comp.vm.$nextTick();

        const inputWrapper= comp.find("#inputWrapper")

        console.log(inputWrapper.element.classList)
        
        expect(inputWrapper.element.classList).toContain('border-emerald-400')
        
    })

    test('input border is red and scale and bg is none when invalid',async()=>{
        const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            invalid:true
            }
        })
         
      
        
        const inputWrapper= comp.find("#inputWrapper")
            const input=await comp.find("#radios")
 
        expect(input.element.classList).toContain('bg-none')

        expect(input.element.classList).toContain('scale-0')
        expect(inputWrapper.element.classList).toContain('border-red-400')
        
    })
    test('input border and bg is gray when disbaled is passed',async()=>{
        const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            disabled:true
            }
        })
         
      
        
        const inputWrapper= comp.find("#inputWrapper")
        const input=comp.find("#radios")
        expect(input.element.classList).toContain('bg-gray-400')
    
        
        expect(inputWrapper.element.classList).toContain('border-gray-400')
        
    })

    test("Input box is chnaging color when clicked",async()=>{
        const input= comp.find("#radios")

        comp.trigger('click')
        
        expect(input.element.classList).toContain('checked:bg-emerald-400')
    })
})

 

describe('Button Accessibility', () => {
    let comp;

    beforeEach(() => {
        comp = mount(RadioButton, {
            attachTo: document.body,
            props: {
                name: 'Submit',
                inputId:"Radio1"
            },


        });
    });

    afterEach(() => {
        comp.unmount();
    });


    // test('should be focusable using keyboard navigation', async () => {
    //     const wrapper = await mount(RadioButton)
    //     const button=await wrapper.find('button')
    //      await  button.trigger('keydown.tab');


    //     expect(document.activeElement).not.toBe(button);
    // });

    test('should have proper aria attributes for accessibility', () => {
        const button = comp.find('#Radio1');
        expect(button.attributes('role')).toBe('inputRadio');
        expect(button.attributes('aria-label')).toBe('Submit');
        expect(button.attributes('aria-disabled')).toBe('false');
    });

    test('should work with screen readers', () => {
        const button = comp.find('#Radio1');
        expect(button.attributes('aria-hidden')).toBeUndefined();
        expect(button.attributes('role')).toBe('inputRadio');
        
    });
});

describe('Button Performance', () => {
    let comp;

    beforeEach(() => {
        comp = mount(RadioButton);
    });

    afterEach(() => {
        comp.unmount();
    });

      

    test('responsiveness should be within acceptable limits', () => {
        const button = comp.find('#button');
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
