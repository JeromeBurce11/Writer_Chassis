<template>
    <v-container>
     <h2>Walbero - Account Settings</h2>
     <p>Manage account settings for Walbro</p>
    <v-row >
        
      <v-col class="ma-2">
        <v-card style="padding: 10px">
          <h2 class="ma-2">General</h2>
          <v-checkbox label="Require image Caption"></v-checkbox>
          <p style="font-size: 12px; margin: -35px 10px 10px">
            This will require caption line 1 upon submit for editing or publish.
            Unchecking will desable all image caption fields
          </p>
          <v-checkbox label="Require Meta Description"></v-checkbox>
          <p style="font-size: 12px; margin: -35px 10px 10px">
            This will require description upon submit for editing or publish,,
            Unchecking will hede the field.
          </p>

          <v-checkbox label="Show Video Text field"></v-checkbox>
          <p style="font-size: 12px; margin: -35px 10px 10px">
            This will show video text field in the writer/editor panels
          </p>

          <v-checkbox label="Enable Video Process"></v-checkbox>
          <p style="font-size: 12px; margin: -35px 10px 10px">
            Ths will show video text field in the writer/editor panels
          </p>
          <v-row>
            <v-col class="ma-2">
              <p>Summary Word Count</p>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Minimum"
                hint="Below the value will appear the count display in red text otherwise it will appear orange"
                persistent-hint
                variant="outlined"
              ></v-text-field>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Standard"
                hint="Equal or greater than this value will appear the count display in green text"
                persistent-hint
                variant="outlined"
              ></v-text-field>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Maximum"
                hint="Greater than this value will appear the count display in red text"
                persistent-hint
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col class="ma-2">
              <p>Content Word Count</p>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Minimum"
                hint="Below the value will appear the count display in red text otherwise it will appear orange"
                persistent-hint
                variant="outlined"
              ></v-text-field>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Standard"
                hint="Equal or greater than this value will appear the count display in green text"
                persistent-hint
                variant="outlined"
              ></v-text-field>
              <v-text-field
                style="font-size: 12px; margin: 10px 0 5px"
                label="Maximum"
                hint="Greater than this value will appear the count display in red text"
                persistent-hint
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <div justify="center">
            <v-btn color="success" style="width: 100%">SAVE</v-btn>
          </div>
        </v-card>
      </v-col>

      <v-col class="ma-2">
        <v-sheet>
          <v-card style="padding: 10px">
            <h2>Categories</h2>
            <p>
              This settings are category validations on submmitting an article
              for edit or publish
            </p>

            <v-table style="margin-top: 10px">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Require Summary</th>
                  <th class="text-left">Require Content</th>
                  <th class="text-left">
                    Require Link In Summary                     
                        <v-icon color="primary" style="font-size: 15px;">mdi-help-circle</v-icon>
                    
                  </th>
                  <th class="text-left">
                    Require Link in Content                
                        <v-icon color="primary" style="font-size: 15px;" >mdi-help-circle</v-icon>
                    
                  </th>
                  <th class="text-left">
                    Prevent Links In Summar
                
                        <v-icon color="primary" style="font-size: 15px;">mdi-help-circle</v-icon>
                    
                  </th>
                  <th class="text-left">
                    Prevent Links In Conten
                
                        <v-icon color="primary" style="font-size: 15px;">mdi-help-circle</v-icon>
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in category" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>
                    <v-checkbox v-model="item.rs"></v-checkbox>
                  </td>
                  <td>
                    <v-checkbox v-model="item.rc"></v-checkbox>
                  </td>
                  <td>
                    <v-checkbox v-model="item.rlis"></v-checkbox>
                  </td>
                  <td>
                    <v-checkbox v-model="item.rlic"></v-checkbox>
                  </td>
                  <td>
                    <v-checkbox v-model="item.plis"></v-checkbox>
                  </td>
                  <td>
                    <v-checkbox v-model="item.plic"></v-checkbox>
                  </td>
                </tr>
              </tbody>
            </v-table>

            <div justify="center">
              <v-btn color="success" style="width: 100%">SAVE</v-btn>
            </div>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
  data: () => ({
    category: [
      {
        name: "Customer",
        rs: false,
        rc: false,
        rlis: false,
        rlic: false,
        plis: false,
        plic: false,
      },
      {
        name: "Competitors",
        rs: false,
        rc: false,
        rlis: false,
        rlic: false,
        plis: false,
        plic: false,
      },
      {
        name: "Products",
        rs: false,
        rc: false,
        rlis: false,
        rlic: false,
        plis: false,
        plic: false,
      },
    ],
  }),
};
</script>
