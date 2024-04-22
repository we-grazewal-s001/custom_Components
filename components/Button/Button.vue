<script setup lang="ts">

import { props as buttonProps } from "./props";
import { twMerge } from "tailwind-merge";

const props = defineProps(buttonProps);

const defaultClass = ref(' min-h-[32px] relative rounded-md px-4 py-2 bg-transparent hover:bg-gray-50 ')

type severityObjType = {
  primary: String;
  secondary: String;
  success: String;
  danger: String;
  warning: String;
  help: String;
  info: String;
  contrast: String;
}


const severityObj: severityObjType = {
  'primary': ' bg-emerald-400 hover:bg-emerald-500 ',
  'secondary': ' bg-gray-400 hover:bg-gray-500 ',
  'success': '  bg-green-400 hover:bg-green-500 ',
  'danger': ' bg-red-400 hover:bg-red-500  ',
  'warning': 'bg-orange-400 hover:bg-orange-500  ',
  'help': '  bg-purple-400 hover:bg-purple-500  ',
  'info': ' bg-blue-400 hover:bg-blue-500 ',
  'contrast': 'bg-black hover:bg-white  hover:bg-black'
}

const plainObj: severityObjType = {
  'primary': 'text-emerald-600 ',
  'secondary': ' text-slate-600',
  'success': 'text-green-600',
  'danger': ' text-red-600',
  'warning': 'text-orange-600',
  'help': 'text-purple-600',
  'info': ' text-blue-600 ',
  'contrast': 'text-black',

}
const textObj: severityObjType = {
  'primary': ' hover:bg-emerald-50 ',
  'secondary': ' hover:bg-slate-50 ',
  'success': ' hover:bg-green-50 ',
  'danger': ' hover:bg-red-50 ',
  'warning': ' hover:bg-orange-50 ',
  'help': ' hover:bg-purple-50 ',
  'info': ' hover:bg-blue-50 ',
  'contrast': ' hover:bg-gray-50 ',
}
const outlinedObj: severityObjType = {
  'primary': ' border-emerald-500 ',
  'secondary': ' border-slate-500',
  'success': 'border-green-500',
  'danger': ' border-red-500',
  'warning': 'border-orange-500',
  'help': 'border-purple-500',
  'info': ' border-blue-500 ',
  'contrast': 'border-black',
}
// @ts-ignore
const severityClass: ComputedRef<String> = computed(() => (severityObj[props.severity]))
// @ts-ignore
const plainClass: ComputedRef<String> = computed(() => (plainObj[props.severity]))
// @ts-ignore
const textClass: ComputedRef<String> = computed(() => (textObj[props.severity]))
// @ts-ignore
const outlinedClass: ComputedRef<String> = computed(() => (outlinedObj[props.severity]))


const severity = computed(() => {
  if (props.severity) {
    let val: String = ` text-white ${severityClass.value} `
    if (props.className) {
      return `${props.className} ${val}`
    }
    return twMerge(val.split(' '))

  }
})

const plain = computed(() => {
  let val: String = ` hover:bg-gray-50 ${plainClass.value} `

  return twMerge(val.split(' '))

})

const text = computed(() => {
  let val: String = ` ${plain.value} bg-transparent ${textClass.value}`
  return twMerge(val.split(' '))

})


const outlined = computed(() => {
  let val = `  ${text.value}  bg-transparent  border ${outlinedClass.value}`

  return twMerge(val.split(' '))

})


const link = computed(() => {
  if (props.link) {
    let val = twMerge(` ${plain.value} hover:bg-transparent hover:underline `.split(" "))

    return twMerge(val.split(' '))
  }

})


const buttonOverlay = computed(() => {
  let val = 'absolute rounded-md p-0 top-0 left-0 w-full h-full z-[999] bg-white opacity-50 ' +
    'transition-opacity duration-500 hover:opacity-100';
  if (props.rounded) {
    val += ' rounded-full';
  } return twMerge(val.split(" "));
});

const borderOpacity = computed(() => {
  return 'border-opacity-50'
})

const iconColor = ref(
  {
    'primary': 'emerald',
    'secondary': 'black',
    'info': 'blue',
    'success': 'green',
    'help': 'purple',
    'warning': 'orange',
    'danger': 'red',
    'contrast': 'black',
  }
);
const buttonClass = computed(
  () => {

    return twMerge(` ${defaultClass.value} ${props.disabled || props.loading ? ` disabled:pointer-events-none disabled:cursor-default
            ${borderOpacity}` : ''}
            ${props.raised ? 'shadow' : ''}
             relative
             ${props.text ? text.value : props.outlined ? outlined.value : props.link ? link.value :
        props.plain ? plain.value : severity.value} ${props.rounded ? 'rounded-full w-12 h-12 p-2' : ''}
        ${props.className ? props.className : ""}
        `.split(" ")
    )
  }
)
const iconAlignment = computed(() => {
  return ` flex flex-row ${props.iconPos == 'left' ? 'flex-row-reverse' : 'justify-center'} `
})
</script>

<template>


  <button :aria-label="props.label" :aria-disabled="props.disabled || props.loading" :role="props.type"
    :style="props.styleName" id="button" :type="props.type" @click="$emit('handle-click')"
    @keydown.enter="$emit('handle-enter')" :disabled="props.disabled || props.loading" :class="buttonClass">

    <span id="buttonLoading" v-if="props.disabled || props.loading" :class="`${buttonOverlay}`"></span>
    <span v-if="props.loading" class="!flex items-center !justify-center">
      <span id="loader" :class="` loader `"></span>
      <span id="Loading_text" class="px-1" v-if="!props.rounded">{{ props.label }}</span>
    </span>
    <span v-else>

      <span :class="iconAlignment">
        <span class="px-1" id="label" v-if="props.label">{{ props.label }}</span>
        <Icon id="iconright" v-if="props.icon" :name="props.icon" :size="props.iconSize" :color="`${!props.text && !props.outlined && !props.plain && !props.iconColor ? 'white' : (props.iconColor
          || iconColor[props.severity])}`" />
      </span>


    </span>

  </button>


</template>


<style scoped>
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }

}

.shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.border {
  @apply border-2 border-solid
}

.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite
}

.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 2px solid;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg)
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
  }

  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
  }

  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
  }

  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
  }

  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
  }
}
</style>