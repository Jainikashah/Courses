<template>
  <div>
    <!-- <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item}}</h2>
        <p>{{ slotProps.next }}</p>

      </template>
    </course-goals>
     -->

    <button @click="setselectedComponent('active-goals')"> ACTIVE GOALS </button>
    <button @click="setselectedComponent('managed-goals')"> MANAGED GOALS </button>

      <!--one way-  -->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <managed-goals v-if="selectedComponent === 'managed-goals'"></managed-goals> -->


  <!-- short hand way -->
  <keep-alive>
      <component :is="selectedComponent"></component>
  </keep-alive>


  </div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/courseGoals.vue';
import ManagedGoals from './components/managedGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components : {
    // 'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info' : UserInfo,
    // 'course-goals': CourseGoals,
    'active-goals' : ActiveGoals,
    'managed-goals' : ManagedGoals
  },

  data() {
    return {
      selectedComponent : 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods : {
    setselectedComponent(cmp){
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>