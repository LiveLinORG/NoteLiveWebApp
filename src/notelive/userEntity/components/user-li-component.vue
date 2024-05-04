<!-- UserComponent.vue -->
<template>
  <template v-if="isAdminView">
    <template v-if="isProfessor">
      <li class="case-container">
        <div class="nombreUser" :class="{ boldText: isProfessor }">{{ userInfo.username }}</div>
        <div class="spacer"></div>
        <div class="buttons-container">
          <button class="buttonDetail">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 2H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 18h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V8h2z"/>
            </svg>
          </button>
          <button class="buttonEliminar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 10.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293L9.414 7.293 12 10.586zm0-10C6.477 0 2 4.477 2 10s4.477 10 10 10 10-4.477 10-10S17.523 0 12 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </button>
        </div>
      </li>
    </template>
    <template v-else>
      <li class="case-container">
        <div class="nombreUser">{{ userInfo.username }}</div>
        <div class="spacer"></div>
        <div class="buttons-container">
          <button class="buttonDetail">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 2H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 18h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V8h2z"/>
            </svg>
          </button>
          <button class="buttonEliminar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 10.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293L9.414 7.293 12 10.586zm0-10C6.477 0 2 4.477 2 10s4.477 10 10 10 10-4.477 10-10S17.523 0 12 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </button>
        </div>
      </li>
    </template>
  </template>
  <template v-else>
    <template v-if="isProfessor">
      <li class="case-container">
        <div class="nombreUser" :class="{ boldText: isProfessor }">{{ userInfo.username }}</div>
        <div class="spacer"></div>
      </li>
    </template>
    <template v-else>
      <li class="case-container">
        <div class="nombreUser">{{ userInfo.username }}</div>
        <div class="spacer"></div>
      </li>
    </template>
  </template>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { getUserInfo, isProfessor } from '../service/userservice';

const props = defineProps({
  userId: {
    type: String,
    required: true
  },
  isAdminView: {
    type: Boolean,
    default: true
  }
});

const userInfo = ref(null);
const isProfessorUser = ref(false);

onMounted(async () => {
  try {
    userInfo.value = await getUserInfo(props.userId);
    isProfessorUser.value = isProfessor(userInfo.value);
  } catch (error) {
    console.error('Error fetching user information:', error);
  }
});
</script>


<style scoped>
.case-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nombreUser {
  flex: 1;
}

.spacer {
  flex: 1;
}

.buttons-container {
  flex-shrink: 0;
  display: flex;
}

.buttonDetail,
.buttonEliminar {
  width: 30px;
  height: 30px;
  border: none;
  background-size: cover;
  cursor: pointer;
}

.buttonDetail {
  background-color: #a07017;
}

.buttonEliminar {
  background-color: rgba(255, 0, 0, 0.95);
}
</style>
