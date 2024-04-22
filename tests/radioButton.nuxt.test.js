import {mount} from "@vue/test-utils";
import RadioButton from "../components/RadioButton/RadioButton.vue";


describe('Custom button test cases for functionality', function () {
    test('check if component is being imported in line',async()=>{
        const comp=  await import('../components/RadioButton/RadioButton.vue')
        expect(comp).toBeDefined()
    })
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
         
        const comp =await mount(RadioButton);

        const button=  comp.trigger('click')

        expect(button).toBeTruthy()
    });
     
    test('input border  disabled when disabled is passed',async()=>{
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
        const input= comp.find("#radios")
        
        expect(input.element.checked).toBeFalsy()
        comp.trigger('click')

       
        expect(input.element.checked).toBeTruthy()
        
    }
    
)
    test("Input box is scaling up when clicked",async()=>{
        comp.trigger('click')
        const input= comp.find("#radios")
        expect(input.element.classList).toContain('checked:scale-100')
    })
    test('input border is changing when hover',async()=>{
       
        const input= comp.find("#inputWrapper")
        expect(input.element.classList).toContain('border-gray-300')
        comp.trigger('hover')
        expect(input.element.classList).toContain('hover:border-gray-400')
    })

    test('input border is changing when value is matched',async()=>{
       
        const comp = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            modelValue: "kjbd",
            value:"Abc"
            },
        })
        const inputWrapper= comp.find("#inputWrapper")
        
        expect(inputWrapper.element.classList).toContain('border-gray-300')
         
        const comp2 = await mount(RadioButton,{
            propsData:{
            inputId:"radios",
            modelValue: "Abc",
            value:"Abc"
            },
        })
        const inputWrapper2= comp2.find("#inputWrapper")
          
        expect(inputWrapper2.element.classList).toContain('border-emerald-400')
        
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

    test('check if slot is rendering the data',async()=>{
            const comp= await mount(RadioButton,{
                slots:{
                    name:`<template>radio</template>`
                }
            })
            expect(comp.html()).toContain(`<template>radio</template>`)
           
    })

    test("Input box is changing color when clicked",async()=>{
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
        
        const startTime = performance.now();
        comp.trigger('click');

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
