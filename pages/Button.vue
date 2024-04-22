<script setup lang="ts">
import Button from "../components/Button/Button.vue";

const loading = ref(false)
const handleSearch = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 3000)

}
</script>
<template>
  <div class=" m-10">
    <Button @handle-click="handleSearch" :loading="loading" label="hello" />
    <div class="m-2">
      <Button link severity="primary" label="Link" />
      <Button link severity="secondary" label="Link" />
      <Button link severity="success" label="Link" />
      <Button link severity="danger" label="Link" />
      <Button link severity="help" label="Link" />
      <Button link severity="info" label="Link" />
      <Button link severity="warning" label="Link" />
      <Button link severity="contrast" label="Link" />
    </div>
    <p>---------Link ------</p>
    <div class="my-2">
      <Button severity="primary" label="Primary" />
      <Button severity="secondary" label="secondary" />
      <Button severity="success" label="success" />
      <Button severity="danger" label="Danger" />
      <Button severity="info" label="Info" />
      <Button severity="warning" label="Warning" />
      <Button severity="help" label="Help" />
      <Button severity="contrast" label="Contrast" />

      <Button label="Default" />

    </div>
    <p>-------default fillled---</p>
    <div class="my-2">
      <Button raised severity="primary" label="Primary" />
      <Button raised severity="secondary" label="secondary" />
      <Button raised severity="success" label="success" />
      <Button raised severity="danger" label="Danger" />
      <Button raised severity="info" label="Info" />
      <Button raised severity="warning" label="Warning" />
      <Button raised severity="help" label="Help" />
      <Button raised severity="contrast" label="Contrast" />
      <Button raised label="Default" />

    </div>
    <p>- --------raised----</p>
    <div class="my-2">
      <Button raised text severity="primary" label="Primary" />
      <Button text severity="secondary" label="secondary" />
      <Button text severity="success" label="success" />
      <Button text severity="danger" label="Danger" />
      <Button text severity="info" label="Info" />
      <Button text severity="warning" label="Warning" />
      <Button text severity="help" label="Help" />
      <Button text severity="contrast" label="Contrast" />
      <Button text label="Default" />

    </div>
    <p>--------text-------</p>
    <div class="my-2">
      <Button :loading="true" raised text severity="primary" label="Primary" />
      <Button :loading="true" text severity="secondary" label="secondary" />
      <Button :loading="true" text severity="success" label="success" />
      <Button :loading="true" text severity="danger" label="Danger" />
      <Button :loading="true" text severity="info" label="Info" />
      <Button :loading="true" text severity="warning" label="Warning" />
      <Button :loading="true" text severity="help" label="Help" />
      <Button :loading="true" text severity="contrast" label="Contrast" />
      <Button :loading="true" text label="Default" />

    </div>
    <p>------------text loading -----------</p>
    <div class="my-2">
      <Button raised plain severity="primary" label="Primary" />
      <Button plain severity="secondary" label="secondary" />
      <Button plain severity="success" label="success" />
      <Button plain severity="danger" label="Danger" />
      <Button plain severity="info" label="Info" />
      <Button plain severity="warning" label="Warning" />
      <Button plain severity="help" label="Help" />
      <Button plain severity="contrast" label="Contrast" />
      <Button plain label="Default" />

    </div>
    <p>---------- plain -------------</p>
    <div class="my-2">
      <Button :loading="true" severity="primary" label="Primary" />
      <Button :loading="true" severity="secondary" label="secondary" />
      <Button :loading="true" severity="success" label="success" />
      <Button :loading="true" severity="danger" label="Danger" />
      <Button :loading="true" severity="info" label="Info" />
      <Button :loading="true" severity="warning" label="Warning" />
      <Button :loading="true" severity="help" label="Help" />
      <Button :loading="true" severity="contrast" label="Contrast" />
      <Button :loading="true" label="Default" />

    </div>

    <div class="my-2">
      <Button outlined severity="primary" label="Primary" />
      <Button outlined severity="secondary" label="secondary" />
      <Button outlined severity="success" label="success" />
      <Button outlined severity="danger" label="Danger" />
      <Button outlined severity="info" label="Info" />
      <Button outlined severity="warning" label="Warning" />
      <Button outlined severity="help" label="Help" />
      <Button outlined severity="contrast" label="Contrast" />
      <Button outlined label="Default" />

    </div>
    <div class="my-2">
      <Button raised outlined severity="primary" label="Primary" />
      <Button raised outlined severity="secondary" label="secondary" />
      <Button raised outlined severity="success" label="success" />
      <Button raised outlined severity="danger" label="Danger" />
      <Button raised outlined severity="info" label="Info" />
      <Button raised outlined severity="warning" label="Warning" />
      <Button raised outlined severity="help" label="Help" />
      <Button raised outlined severity="contrast" label="Contrast" />
      <Button raised outlined label="Default" />

    </div>
    <div class="my-2">
      <Button :loading="true" raised outlined severity="primary" label="Primary" />
      <Button :loading="true" raised outlined severity="secondary" label="secondary" />
      <Button :loading="true" raised outlined severity="success" label="success" />
      <Button :loading="true" raised outlined severity="danger" label="Danger" />
      <Button :loading="true" raised outlined severity="info" label="Info" />
      <Button :loading="true" raised outlined severity="warning" label="Warning" />
      <Button :loading="true" raised outlined severity="help" label="Help" />
      <Button :loading="true" raised outlined severity="contrast" label="Contrast" />
      <Button :loading="true" raised outlined label="Default" />


    </div>
    <div class="my-2">
      <Button icon="uil:twitter" raised rounded />
      <Button icon="uil:twitter" severity="secondary" rounded />
      <Button icon="uil:twitter" severity="success" rounded />
      <Button icon="uil:twitter" severity="info" rounded />
      <Button icon="uil:twitter" severity="warning" rounded />
      <Button icon="uil:twitter" severity="help" rounded />
      <Button icon="uil:twitter" severity="danger" rounded />
      <Button icon="uil:twitter" severity="contrast" rounded />


    </div>
    <div class="my-2">
      <Button outlined icon="uil:twitter" raised rounded />
      <Button outlined icon="uil:twitter" severity="secondary" rounded />
      <Button outlined icon="uil:twitter" severity="success" rounded />
      <Button outlined icon="uil:twitter" severity="info" rounded />
      <Button outlined icon="uil:twitter" severity="warning" rounded />
      <Button outlined icon="uil:twitter" severity="help" rounded />
      <Button outlined icon="uil:twitter" severity="danger" rounded />
      <Button outlined icon="uil:twitter" severity="contrast" rounded />


    </div>
    <div class="my-2">

      <Button raised outlined icon="uil:twitter" rounded />
      <Button raised outlined icon="uil:twitter" severity="secondary" rounded />
      <Button raised outlined icon="uil:twitter" severity="success" rounded />
      <Button raised outlined icon="uil:twitter" severity="info" rounded />
      <Button raised outlined icon="uil:twitter" severity="warning" rounded />
      <Button raised outlined icon="uil:twitter" severity="help" rounded />
      <Button raised outlined icon="uil:twitter" severity="danger" rounded />
      <Button raised outlined icon="uil:twitter" severity="contrast" rounded />

    </div>
    <div class="my-2">

      <Button :loading="true" raised outlined icon="uil:twitter" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="secondary" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="success" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="info" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="warning" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="help" rounded />
      <Button :loading="true" raised outlined icon="uil:twitter" severity="danger" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="contrast" :loading="true" rounded />

    </div>
    <div class="my-2">

      <Button disabled raised outlined icon="uil:twitter" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="secondary" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="success" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="info" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="warning" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="help" rounded />
      <Button disabled raised outlined icon="uil:twitter" severity="danger" rounded />

      <Button disabled raised outlined icon="uil:twitter" severity="contrast" rounded />

    </div>
    <p>---------Rounded----------- </p>


    <div class="mt-2">
      <Button severity="primary" label="Outline icon" iconPos="left" icon="uil:twitter" outlined />
      <Button severity="secondary" label="Outline icon" iconPos="left" icon="uil:twitter" outlined />
      <Button severity="success" label="Outline icon" iconPos="left" icon="uil:twitter" outlined />
      <Button severity="help" label="Outline icon" iconPos="right" icon="uil:twitter" outlined />
      <Button severity="danger" label="Outline icon" iconPos="right" icon="uil:twitter" outlined />
      <Button severity="warning" label="Outline icon" iconPos="right" icon="uil:twitter" outlined />
      <Button severity="contrast" label="Outline icon" iconPos="right" icon="uil:twitter" outlined />
    </div>

    <div class="mt-2">
      <Button className="bg-pink-200 text-red-500 " label="Custom class applied" />
      <Button styleName="border-radius: 50%" severity="primary" label="Disabled custom style applied" disabled />
    </div>


    <Button severity="primary" label="Outline icon" iconPos="left" icon="uil:twitter" />
    <Button severity="primary" label="Outline icon" iconPos="right" icon="uil:twitter" />


  </div>








</template>
