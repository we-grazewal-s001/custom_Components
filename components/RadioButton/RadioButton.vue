<script setup lang="ts">

import { props as inputProps } from './props';
import { twMerge } from "tailwind-merge";

const inputRef = ref();
const props = defineProps(inputProps);
const model = defineModel();
const id = useId()

const defaultClass = ref(`flex gap-2 m-1 items-center cursor-pointer`)
const inputWrapper = computed(() => twMerge(` w-6 h-6 border-gray-300 border-2 border-solid hover:border-gray-400 
rounded-full relative ${props.disabled ? 'border-gray-400' : ''} ${props.invalid ? ' border-red-400 hover:border-red-400 ' : ""}
 ${model.value == props.value ? ' border-emerald-400 hover:border-emerald-400' : ''}  `).split(" "))

const defaultInputClass = ref(`!w-2 !h-2 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
     appearance-none rounded-full transition ease-in duration-100 absolute scale-0 checked:bg-emerald-400
     !p-2 checked:scale-100 `)



const handleInputWrapperClick = () => {
  if (inputRef.value && !props.invalid) {
    inputRef.value.click()
  }

};


const className = twMerge([defaultInputClass.value, props.invalid && ''.split(' '),
props.disabled && 'bg-gray-400 scale-100', props.invalid && ' bg-none scale-0'])

</script>
<template>
  <div data-testId="radio_button" :id="id" :class="defaultClass" @click="handleInputWrapperClick">
    <div id="inputWrapper" :class="inputWrapper">
      <input :aria-disabled='false' role="inputRadio" :disabled="props.disabled" :aria-labelledby='props.inputId || id'
        :aria-label="props.name" ref="inputRef" :class="className" v-model="model" :id="props.inputId"
        :name="props.name" type="radio" :value="props.value || props.name" />
    </div>
    <slot name="name">
      <p id="label" :class="`capitalize ${props.labelClass}`">
        {{ props.name }}

      </p>
    </slot>
  </div>

</template>
