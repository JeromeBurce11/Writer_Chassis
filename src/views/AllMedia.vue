<template>
  <v-card style="padding: 10px">
    <v-row>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <h2>Walbero - All Media</h2>
          <p>This Table shows recently researched articles for Walbro</p>
        </v-sheet>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto">
        <v-sheet style="margin-top: 10px" class="pa-2 ma-2">
          <h4 style="color: rgb(3, 132, 197)">VIEW OLDER ARTICLES</h4>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-btn color="primary"> EXPORT </v-btn>
        </v-sheet>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <v-sheet style="margin-top: 10px">
          <v-text-field
            append-inner-icon="mdi-magnify"
            type="text"
            density="compact"
            placeholder="Search"
            variant="outlined"
          ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet style="margin-top: 10px">
          <v-text-field
            append-inner-icon="mdi-calendar-blank-outline"
            type="text"
            density="compact"
            placeholder="Filter Date Start"
            variant="outlined"
          ></v-text-field>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet style="margin-top: 10px">
          <v-text-field
            append-inner-icon="mdi-calendar-blank-outline"
            type="text"
            density="compact"
            placeholder="Filter Date End"
            variant="outlined"
          ></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>

    <v-tabs v-model="tab">
      <v-tab value="one"
        >ALL <v-badge color="info" content="1000" inline></v-badge>
      </v-tab>
      <v-tab value="two"
        >CUSTOMER
        <v-badge color="info" content="221" inline></v-badge>
      </v-tab>
      <v-tab value="three"
        >COMPETITOR
        <v-badge color="info" content="78" inline></v-badge>
      </v-tab>
      <v-tab value="three"
        >PRODUCTS
        <v-badge color="info" content="171" inline></v-badge>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Actions</th>
                <th class="text-left">Media Date</th>
                <th class="text-left">Created Date & Time</th>
                <th class="text-left">For Editing</th>
                <th class="text-left">Publishing</th>
                <th class="text-left">Category</th>
                <th class="text-left">Title</th>
                <th class="text-left">Researcher</th>
                <th class="text-left">Writer</th>
                <th class="text-left">Editor</th>
                <th class="text-left">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in media" :key="item.name">
                <td>
                  <v-icon color="success">mdi-file-document-edit</v-icon>
                  <v-icon color="primary">mdi-apple-icloud</v-icon>
                </td>
                <td>{{ item.media_date }}</td>
                <td>{{ item.create_date_time }}</td>
                <td> 
                  <v-container fluid>
                    <v-checkbox v-model="item.for_editing"></v-checkbox>
                  </v-container>
                </td>
                <td>
                  <v-container fluid>
                    <v-checkbox v-model="item.publishing"></v-checkbox>
                  </v-container>
                </td>
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.researcher }}</td>
                <td>{{ item.writer }}</td>
                <td>{{ item.editor }}</td>
                <td>
                  <v-rating
                    model-value="3"
                    color="yellow-darken-3"
                    half-increments
                  ></v-rating
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>

        <v-window-item value="two"> Customer </v-window-item>
        <v-window-item value="three"> Competitor </v-window-item>
        <v-window-item value="three"> Products </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    media: [
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: true,
        publishing: true,
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "5",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
      {
        id: "12421352135",
        media_date: "Oct 12, 2021",
        create_date_time: "Oct 12, 2021",
        for_editing: "true",
        publishing: "true",
        category: "Customer",
        title: "Review; 2021 Honda Gold Wing DCT a Good Long-Distance Tourer",
        researcher: "Lim Datahan",
        writer: "Sepencer Macabudbud",
        editor: "Rosellers Bojosers",
        rating: "3",
      },
    ],
  }),
};
</script>
