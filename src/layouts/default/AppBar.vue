<template>
  <!-- Fixed Navigation Drawer -->
  <v-navigation-drawer
    app
    fixed
    v-model="drawer"
    permanent
    mini-variant
    class="fixed-drawer"
    style="background-color: rgb(24, 70, 44); color: white;"
  >
    <!-- Drawer content goes here -->
  
    <v-list-item lines="one" title="Writer Chassis"></v-list-item>
    <v-divider></v-divider>
    <v-list-item
      lines="two"
      prepend-avatar="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
      title="Lester Bernardez"
      subtitle="Writer"
      @click="openAccount"
    >
      <template v-slot:append>

        <v-icon color="white">{{ account ?  `mdi-menu-down` :  `mdi-menu-up`}}</v-icon>
      </template>
    </v-list-item>
    <div v-if="!account" style="background-color:white; color: black;">
      <v-list-item>
        <v-list>
          <v-list-subheader>Chasis</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            variant="plain"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list>
          <v-list-subheader>Other Profile</v-list-subheader>
          <v-list-item title="Update Profile"></v-list-item>
          <v-list-item style="color: red" title="Exit Chasis"> </v-list-item>
        </v-list>
      </v-list-item>
    </div>
    <v-divider></v-divider>
    <v-list-item lines="one" title="Walbero" class="center-title"></v-list-item>

    <v-divider></v-divider>
    <v-list density="compact" nav>
      
        <v-list-item @click="goToDashboardPage" title="Dashboard" value="Dashboard"></v-list-item>
        <v-list-item @click="goToAllMediaPage" title="All Media" value="All Media"></v-list-item>
        <v-list-item
          @click="goToAccountSettings"
          title="Account Setting"
          value="Account Setting"
        ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Scrollable App Bar -->
  <v-app-bar style="background-color: rgb(24, 70, 44); color: white;" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-text-field
      style="margin-top: 20px"
      prepend-inner-icon="mdi-magnify"
      type="text"
      density="compact"
      label="Search"
      variant="outlined"
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-monitor-dashboard</v-icon>
    </v-btn>

    <v-btn icon @click="openDialog">
      <v-badge content="2" color="error">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon @click="openSetting">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn icon @click="openVersion">
      <v-icon>mdi-update</v-icon>
    </v-btn>

  </v-app-bar>

  <!-- Setting dialog -->
  <v-dialog v-model="setting" max-width="500">
    <v-card class="right-dialog">
      <v-card-title> Settings </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-list lines="two">
          <v-list-subheader style="margin-left: -60px" inset
            >General</v-list-subheader
          >
          <v-list-item
            title="Push Notfication"
            subtitle="Enable/disable web push notifications"
          >
            <template v-slot:prepend>
              <v-switch
                color="primary"
                :model-value="true"
                label="   "
              ></v-switch>
            </template>
          </v-list-item>
          <v-list-item
            title="Dark Mode"
            subtitle="Enable dark mode theme (only applicable to internal webpages)"
          >
            <template v-slot:prepend>
              <v-switch
                color="primary"
                :model-value="true"
                label="   "
              ></v-switch>
            </template>
          </v-list-item>
          <v-list-subheader style="margin-left: -60px" inset
            >Writer/Editor</v-list-subheader
          >
          <v-list-item
            title="Auto-Save Draft"
            subtitle="(Experimental) Enable autosaving of draft"
          >
            <template v-slot:prepend>
              <v-switch
                color="primary"
                :model-value="true"
                label="   "
              ></v-switch>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeSetting">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Notification dialog -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card class="right-dialog">
      <v-card-title>
        Notifications <v-icon color="gray" right>mdi-filter</v-icon>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-list lines="two" v-for="data in notifications">
          <v-list-item :key="data.id">
            <p>{{ data.message }}</p>
            <p>{{ data.time }}</p>
            <template v-slot:prepend>
              <v-avatar color="blue">
                <v-icon color="white">mdi-message-text</v-icon>
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  
  <!-- Version log dialog -->
  <v-dialog v-model="version" max-width="500">
    <v-card class="right-dialog">
      <v-card-title>
        Version Logs
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-list lines="two" v-for="data in logs">
       
          <v-list-item :key="data.id">
            <p>{{ data.version }}</p>
            <p>{{ data.date }}</p>
            <template v-slot:prepend>
                <v-icon color="orange">mdi-star</v-icon>
            </template>
            <template v-slot:append>
                <v-icon color="black">mdi-drop-down</v-icon>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeVersion">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
.right-dialog {
  left: 600px;
  margin-top: -400px;
  position: absolute;
  top: 0; /* Adjust the top position as needed */
  z-index: 999; /* Adjust the z-index as needed */
}
.fixed-drawer {
 background-color: rgb(15, 75, 42);
  z-index: 999; /* Set the z-index value to keep the drawer above other content */
}

.center-title .v-list-item-title {
  text-align: center;
  font-weight: bold;
}
</style>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      items: [
        { text: "Research", icon: "mdi-magnify" },
        { text: "Writer", icon: "mdi-pencil" },
        { text: "Editor", icon: "mdi-flag" },
      ],
      logs: [
        {
          id: 1,
          version:
            "1.2.3",
          date: "September 31, 2021",
        },
        {
          id: 2,
          version:
            "1.2.2",
            date: "September 30, 2021",
        },
      
      ],
      notifications: [
        {
          id: 1,
          message:
            "Glenn posted new feedback on you submitted EM traditional Media article: [Spotlight] lester Bernaldez Test asads. Please acknowledge.",
          time: "a month ago",
        },
        {
          id: 2,
          message:
            "Glenn posted new feedback on you submitted EM traditional Media article: [Spotlight] lester Bernaldez Test asads. Please acknowledge.",
          time: "a month ago",
        },
        // Add more notifications as needed
      ],
      version: false,
      dialog: false,
      account: false,
      setting: false,
      notificationsVisible: false,
      showTooltip: false,
      drawer: false, // Control whether the drawer is open or closed
      miniVariant: false, // Control the mini variant (collapsed) mode of the drawer
    };
  },
  methods: {
    goToDashboardPage() {
    this.$router.push('/')
  },
  goToAllMediaPage() {
    this.$router.push('/all-media')
  },
  goToAccountSettings() {
    this.$router.push('/account-settings')
  },
    toggleNotifications() {
      this.notificationsVisible = !this.notificationsVisible;
    },
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    openSetting() {
      this.setting = true;
    },
    closeSetting() {
      this.setting = false;
    },
    closeVersion() {
      this.version = false;
    },
    openVersion() {
      this.version = true;
    },
    openAccount() {
      this.account = !this.account;
    },
  },
};
</script>
