<template>
<v-container>
    <v-row >
      <v-col class="ma-2">
          <v-card style="padding: 10px">
            <h2>Welcome to Walbro Writer Dashboard</h2>
            <p>Data as of October, 2021 10:00 PM</p>
            <v-btn style="margin-top: 20px" color="success">
              CREATE ARTICLE
            </v-btn>

            <v-tabs v-model="tab">
              <v-tab value="one">TODAY </v-tab>
              <v-tab value="two">ADVANCE </v-tab>
              <v-tab value="three">LAST 7 DAYS </v-tab>
              <v-tab value="three">SENT BACK </v-tab>
            </v-tabs>

            <v-list v-for="data in writer_data">
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Customer</v-list-subheader
                    >
                    <v-list-item
                      v-for="details in data.customer"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      <v-rating
                        model-value="3"
                        color="yellow-darken-3"
                        half-increments
                      ></v-rating>
                      <p>{{ details.date }}</p>
                      <template v-slot:prepend>
                       
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                       
                      </template>

                      <template v-slot:append>
                        <v-btn
                          color="primary"
                          icon="mdi-message-text"
                          variant="text"
                        ></v-btn>
                      </template>
                    </v-list-item>
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Competitors</v-list-subheader
                    >
                    <div style="text-align: center; margin: 10px;" v-if="data.competitors.length === 0 || !data.competitors">
                      <p>- No Articles Available -</p>
                    </div>

                    <v-list-item
                      v-for="details in data.competitors"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      <v-rating
                        model-value="3"
                        color="yellow-darken-3"
                        half-increments
                      ></v-rating>
                      <p>{{ details.date }}</p>
                      <template v-slot:prepend>
                       
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                       
                      </template>

                      <template v-slot:append>
                        <v-btn
                          color="primary"
                          icon="mdi-message-text"
                          variant="text"
                        ></v-btn>
                      </template>
                    </v-list-item>
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Products</v-list-subheader
                    >
                    <v-list-item
                      v-for="details in data.products"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      <v-rating
                        model-value="3"
                        color="yellow-darken-3"
                        half-increments
                      ></v-rating>
                      <p>{{ details.date }}</p>

                      <template v-slot:prepend>
                       
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                       
                      </template>

                      <template v-slot:append>
                        <v-btn
                          color="primary"
                          icon="mdi-message-text"
                          variant="text"
                        ></v-btn>
                      </template>
                    </v-list-item>
                  </v-list>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                 
                </v-window-item>

                <v-window-item value="two"> </v-window-item>

                <v-window-item value="three"> Three </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
      </v-col>

      <v-col class="ma-2">
          <v-card>
            <h2 class="pa-2 ma-2">Writer Production</h2>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Assigned</th>
                  <th class="text-left">Submitted</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in writer_production" :key="data.name">
                  <td>{{ data.name }}</td>
                  <td>{{ data.assigned }}</td>
                  <td>{{ data.submitted }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
          <v-card  style=" margin-top: 10px;">
            <h2 class="pa-2 ma-2">Article List Preview</h2>
            <v-list v-for="data in article">
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Customer</v-list-subheader
                    >
                    <div style="text-align: center; margin: 10px;" v-if="data.customer.length === 0 || !data.customer">
                      <p>- No Articles Available -</p>
                    </div>
                    <v-list-item
                      v-for="details in data.customer"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      
                      <p>{{ details.description }}</p>
                      <template v-slot:prepend>
                   
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                       
                      </template>

                    </v-list-item>
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Competitors</v-list-subheader
                    >
                    <div style="text-align: center; margin: 10px;" v-if="data.competitors.length === 0 || !data.competitors">
                      <p>- No Articles Available -</p>
                    </div>
                    <v-list-item
                      v-for="details in data.competitors"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      
                      <p>{{ details.description }}</p>
                      <template v-slot:prepend>
                      
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                       
                      </template>

                    </v-list-item>
                    <v-list-subheader
                      style="background-color: rgb(0, 157, 255); color: white"
                      inset
                      >Products</v-list-subheader
                    >
                    <div style="text-align: center; margin: 10px;" v-if="data.products.length === 0 || !data.products">
                      <p>- No Articles Available -</p>
                    </div>
                    <v-list-item
                      v-for="details in data.products"
                      :key="details.title"
                    >
                      <h3>{{ details.title }}</h3>
                      
                      <p>{{ details.description }}</p>

                      <template v-slot:prepend>
                     
                        <v-icon color="green">mdi-pencil</v-icon>

                        <v-icon color="blue">mdi-account-plus</v-icon>

                        <v-icon color="red">mdi-file-remove</v-icon>
                      
                      </template>

                    </v-list-item>
                  </v-list>
          </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
  data: () => ({
    article: [
      {
        customer: [
          {
            description:  "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.",
            title: "Deeside Golf Club bolsters Toro fleet",
          },
          {
            description:"The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.",
            title: "Recipes",
          },
          {
            description: "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.",
            title: "Work",
          },
        ],
        competitors: [],
        products: [],
      },
    ],
    writer_data: [
      {
        customer: [
          {
            date: "Jan 9, 2014",
            title: "Deeside Golf Club bolsters Toro fleet",
          },
          {
            date: "Jan 17, 2014",
            title: "Recipes",
          },
          {
            date: "Jan 28, 2014",
            title: "Work",
          },
        ],
        competitors: [],
        products: [
          {
            date: "Jan 9, 2014",
            title: "Deeside Golf Club bolsters Toro fleet",
          },
        ],
      },
    ],
    
    writer_production: [
      {
        name: "Writer User 1",
        assigned: 159,
        submitted: 20,
      },
      {
        name: "Writer User 2",
        assigned: 19,
        submitted: 10,
      },
      {
        name: "Writer User 3",
        assigned: 19,
        submitted: 20,
      },
      {
        name: "Writer User 4",
        assigned: 1,
        submitted: 21,
      },
    ],
  }),
};
</script>
