<template>
  <vft-form labvft-position="left" labvft-width="150px" style="max-width: 460px">
    <vft-space fill>
      <vft-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </vft-alert>
      <vft-form-item label="Full Name">
        <vft-input v-model="formAccessibility.fullName" />
      </vft-form-item>
    </vft-space>
    <vft-space fill>
      <vft-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </vft-alert>
      <vft-form-item label="Your Information">
        <vft-row :gutter="20">
          <vft-col :span="12">
            <vft-input
              v-model="formAccessibility.firstName"
              label="First Name"
              placeholder="First Name"
            />
          </vft-col>
          <vft-col :span="12">
            <vft-input
              v-model="formAccessibility.lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </vft-col>
        </vft-row>
      </vft-form-item>
    </vft-space>
  </vft-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: ''
});
</script>
