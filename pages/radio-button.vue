<template>
    <div>
        <div>.
            <RadioButton inputId="ingredient1" v-model="ingredient" value='Cheese' name="Cheese">
                <template #name>dfsdg</template>
            </RadioButton>
        </div>
        <div>
            <RadioButton v-model="ingredient" value='Mushroom' name="Mushroom" />
        </div>
        <div>
            <RadioButton disabled v-model="ingredient" value='Peeper' name="Peeper" />

        </div>
        <div>
            <RadioButton invalid v-model="ingredient" value='Onion' name="Onion" />
        </div>
    </div>
    <p class="capitalize">{{ ingredient }} is here</p>

    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">

            <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" :name="category.name"
                    :value="category.name" />

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import RadioButton from "../components/RadioButton/RadioButton.vue";


const ingredient = ref('')

const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);

</script>